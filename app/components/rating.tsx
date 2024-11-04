'use client'; // Menandai komponen ini sebagai Client Component

import React, { useState, useEffect } from 'react';

function Rating() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState<number>(0);
  const [allRatings, setAllRatings] = useState<number[]>([]);
  const [feedbacks, setFeedbacks] = useState<{ name: string; comment: string }[]>([]);

  useEffect(() => {
    const savedRatings = JSON.parse(localStorage.getItem('allRatings') || '[]');
    const savedFeedbacks = JSON.parse(localStorage.getItem('feedbacks') || '[]');
    setAllRatings(savedRatings);
    setFeedbacks(savedFeedbacks);
  }, []);

  const averageRating = allRatings.length ? (allRatings.reduce((a, b) => a + b, 0) / allRatings.length).toFixed(1) : '0';
  const ratingPercentage = allRatings.length ? ((Number(averageRating) / 5) * 100).toFixed(1) : '0';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && comment && rating) {
      const newRatings = [...allRatings, rating];
      const newFeedbacks = [...feedbacks, { name, comment }];
      setAllRatings(newRatings);
      setFeedbacks(newFeedbacks);
      localStorage.setItem('allRatings', JSON.stringify(newRatings)); // Simpan di localStorage
      localStorage.setItem('feedbacks', JSON.stringify(newFeedbacks)); // Simpan di localStorage
      alert("Komentar dan rating berhasil dikirim!");
      setName('');
      setComment('');
      setRating(0);
    } else {
      alert("Mohon isi semua kolom dan pilih rating.");
    }
  };

  const handleDelete = (index: number) => {
    const newFeedbacks = feedbacks.filter((_, i) => i !== index);
    setFeedbacks(newFeedbacks);
    alert("Komentar berhasil dihapus! (permanen dari tampilan, tetapi masih di localStorage)");
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} style={{ color: i <= rating ? 'gold' : 'gray', fontSize: '24px' }}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div style={{ maxWidth: "1700px", margin: "20px", padding: "20px", backgroundColor: "black", borderRadius: "10px", color: "white", boxShadow: "0 0 10px rgba(0,0,0,0.5)" }}>
      <h2 style={{ color: "#FF0000", textAlign: "center" }}>Formulir Komentar</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1em" }}>
          <label htmlFor="name" style={{ color: "#ffffff", fontWeight: "bold" }}>Nama:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", color: "#ffffff", backgroundColor: "black", border: "2px solid #0004ff" }}
          />
        </div>

        <div style={{ marginBottom: "1em" }}>
          <label htmlFor="comment" style={{ color: "#ffffff", fontWeight: "bold" }}>Komentar:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            rows={4}
            style={{ width: "100%", padding: "8px", color: "#ffffff", backgroundColor: "black", border: "2px solid #0004ff" }}
          />
        </div>

        <div style={{ marginBottom: "1em" }}>
          <label style={{ color: "#FFFFFF", fontWeight: "bold" }}>Rating:</label>
          <div style={{ display: "flex", gap: "5px", marginTop: "5px" }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                style={{
                  fontSize: "24px",
                  cursor: "pointer",
                  color: star <= rating ? "gold" : "gray" // Warna bintang aktif
                }}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <button type="submit" style={{ padding: "10px 15px", backgroundColor: "green", color: "#ffffff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
          Kirim Komentar
        </button>
      </form>

      <div style={{ marginTop: "2em" }}>
        <h3 style={{ color: "#ffffff", textAlign: "center" }}>
          Rata-Rata Rating: {renderStars(Number(averageRating))} ({averageRating} / 5)
        </h3>
      </div>

      <div style={{ marginTop: "2em" }}>
        <h3 style={{ color: "#FF0000", textAlign: "center" }}>Daftar Komentar</h3>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            {feedbacks.map((feedback, index) => (
              <tr key={index}>
                <td style={{ border: "2px solid #0004ff", padding: "8px", color: "#ffffff", textAlign: "left" }}>
                  <strong>{feedback.name}:</strong> {feedback.comment}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Rating;
