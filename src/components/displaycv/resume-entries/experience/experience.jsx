import ResumeEntry from "../ResumeEntry";
import "../education/education.css"
function Experience( { info } ){
    return (
        <>
            <h3 className="section-title">Experience</h3>
            <div className="experience-container"></div>
            {info.map((entry) => (
                <ResumeEntry info={entry}></ResumeEntry>
           ))}
        </>
    )
}

export default Experience