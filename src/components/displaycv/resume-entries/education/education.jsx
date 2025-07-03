import ResumeEntry from "../ResumeEntry";
import "./education.css"
function Education( { info } ){
    return (
        <>
            <h3 className="section-title">Education</h3>
            <div className="education-container"></div>
            {info.map((entry) => (
                <ResumeEntry info={entry}></ResumeEntry>
           ))}
        </>
    )
}

export default Education;