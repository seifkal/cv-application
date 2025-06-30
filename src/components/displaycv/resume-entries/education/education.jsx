import ResumeEntry from "../ResumeEntry";
import "./education.css"
function Education( { info } ){
    return (
        <>
            <h1 className="section-title">Education</h1>
            <div className="education-container"></div>
            {info.map((entry) => (
                <ResumeEntry info={entry}></ResumeEntry>
           ))}
        </>
    )
}

export default Education;