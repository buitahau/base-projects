import { getAllSkills } from '@/api/skill-api';
import { Skill } from '@/types/skill';
import { useEffect, useState } from 'react';

export default function SkillSection() {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const data = await getAllSkills();
      setSkills(data);
    };
    fetchSkills();
  }, []);

  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        <i className="fas fa-laptop-code"></i> Skills & <span>Abilities</span>
      </h2>

      <div className="container">
        <div className="row" id="skillsContainer">
          {skills.map((skill: Skill) => (
            <div key={skill.id} className="bar">
              <div className="info">
                <img src={skill.icon} alt="skill" />
                <span>{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
