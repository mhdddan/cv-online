import foto from "../foto1.jpeg";
function Profile() {
    return (
      <img
        src={foto.src}
        alt="Muhamad Ramdan "
        className="fotoku"
      />
    );
  }

export default function Hero () {
    return (
        
                <div className="container mx-auto p-2 text-center">
                <h1 className="text-white-400 font-bold" > CV Online</h1>
                <h1 className="text-3xl text-blue-900 font-bold">Muhamad Ramdan</h1>
                <Profile />
             
                <p>Saya Adalah programer sejak tahun 2024</p>
                </div>
    );
}