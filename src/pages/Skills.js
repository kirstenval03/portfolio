import React from 'react';

const skillsData = [
    { name: 'HTML', imageSrc: 'https://res.cloudinary.com/dhqplbne3/image/upload/v1692511235/PORTFOLIO/9_vyfdgx.png' },
    { name: 'CSS', imageSrc: 'https://res.cloudinary.com/dhqplbne3/image/upload/v1692511235/PORTFOLIO/10_osb5by.png' },
    { name: 'JavaScript', imageSrc: 'https://res.cloudinary.com/dhqplbne3/image/upload/v1692511235/PORTFOLIO/11_d3kszu.png' },
    { name: 'React.js', imageSrc: 'https://res.cloudinary.com/dhqplbne3/image/upload/v1692511235/PORTFOLIO/12_eemg54.png' },
    { name: 'Vite.js', imageSrc: 'https://res.cloudinary.com/dhqplbne3/image/upload/v1692511234/PORTFOLIO/13_kqy64w.png' },
    { name: 'Express.js', imageSrc: 'https://res.cloudinary.com/dhqplbne3/image/upload/v1692511235/PORTFOLIO/14_bs8hu1.png' },
    { name: 'Node.js', imageSrc: 'https://res.cloudinary.com/dhqplbne3/image/upload/v1692511234/PORTFOLIO/15_hspdjq.png' },
    { name: 'Postman APIs', imageSrc: 'https://res.cloudinary.com/dhqplbne3/image/upload/v1692511235/PORTFOLIO/16_zdcjjn.png' },
    { name: 'MongoDB', imageSrc: 'https://res.cloudinary.com/dhqplbne3/image/upload/v1692511235/PORTFOLIO/17_l25jfv.png' },
    { name: 'Mongoose', imageSrc: 'https://res.cloudinary.com/dhqplbne3/image/upload/v1692511235/PORTFOLIO/18_exfnn3.png' },
    { name: 'GitHub & Git', imageSrc: 'https://res.cloudinary.com/dhqplbne3/image/upload/v1692511235/PORTFOLIO/19_fyhlhi.png' },
    { name: 'Bootstrap', imageSrc: 'https://res.cloudinary.com/dhqplbne3/image/upload/v1692511658/PORTFOLIO/Portfolio_3_x2rmgz.png' },
    { name: 'Visual Studio', imageSrc: 'https://res.cloudinary.com/dhqplbne3/image/upload/v1692511235/PORTFOLIO/21_eh6efr.png' },
    { name: 'Payment Platform Integration', imageSrc: 'https://res.cloudinary.com/dhqplbne3/image/upload/v1692511235/PORTFOLIO/20_ispvpc.png' },

];


export const Skills = () => {
    return (
      <div className="skills">
        <div className="techSkills">
          {skillsData.map((skill, index) => (
            <div key={index} className='skillCard'>
              <img src={skill.imageSrc} alt={`${skill.name} Logo`} className='skillImg' />
              <h3 className='skillName'>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  };