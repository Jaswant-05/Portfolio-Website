import portfolioImg from "../assets/portfolio.png"

export default function Project(props){
    return( 
        <div className="project-component-container">
            <img src={props.imgUrl} className="project-img"/>
            <div className="project-component-text">
                <h3>{props.title}</h3>
                <h4>{props.description}</h4>
                <button>Visit</button>
            </div>
        </div>
    )
} 