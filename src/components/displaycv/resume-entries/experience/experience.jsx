import ResumeEntry from "../ResumeEntry";
import "../education/education.css"
function Experience( { info } ){
    return (
        <>
            <h1 className="section-title">Experience</h1>
            <div className="experience-container"></div>
            {info.map((entry) => (
                <ResumeEntry info={entry}></ResumeEntry>
           ))}
        </>
    )
}

export default Experience