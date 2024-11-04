import React from 'react';
import './skills.css';

const skillsData = [
    { skill: 'Ngoding', level: 'Advanced' },
    { skill: 'Gamer', level: 'Intermediate' },
    { skill: 'Riding', level: 'Advanced' },
    { skill: 'Akuntan', level: 'Intermediate' },
    { skill: 'Speaking', level: 'Intermediate' },
    
];

const Skills: React.FC = () => {
    return (
        <div className="skills-container">
            <h2>My Skills</h2>
            <ul className="skills-list">
                {skillsData.map((item, index) => (
                    <li key={index} className="skill-item">
                        <span className="skill-name">{item.skill}</span>
                        <span className="skill-level">{item.level}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;
