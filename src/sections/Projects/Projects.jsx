import styles from './ProjectsStyles.module.css';
import infowood from '../../assets/infowood.png'
import billing from '../../assets/autobill.png'
import aiImg from '../../assets/aiimg.png'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={infowood}
          link="https://github.com/salonigavde18/infowood"
          h3="Infowood"
          p="Movie Review App"
        />
        <ProjectCard
          src={billing}
          link="https://github.com/salonigavde18/AutomatedBilling"
          h3="AutoBill"
          p="Automated Billing System"
        />
        <ProjectCard
          src={aiImg}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="DALL-E Clone"
          p="MERN AI Image Generation App"
        />
        
      </div>
    </section>
  );
}

export default Projects;
