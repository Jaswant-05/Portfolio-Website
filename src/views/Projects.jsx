import Project from "../components/Project";
import { projectsData } from "../projectsData";

export default function Projects(){
    const displayedProjects = projectsData.map((project) =>(
        <Project
            key={project.id}
            imgUrl={project.imgSrc}
            title={project.title}
            description={project.description}
        />
    )) 
    return(
        <div className="projects-view-container"> 
            <h2>My Personal Projects</h2>
            <div className="projects-container">
                {displayedProjects}
            </div>
        </div>

    )
}