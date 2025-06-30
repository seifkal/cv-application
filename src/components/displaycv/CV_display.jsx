import "../../styles/CV_display.css"
import Personal from "./personal/personal";
import Education from "./resume-entries/education/education";
import Experience from "./resume-entries/experience/experience";
function CV_display({personalInfo,educationInfo,experienceInfo}) {
    return (
        <div className="cv-container">
            <Personal personalInfo = {personalInfo} />
            <Education info = {educationInfo}></Education>
            <Experience info={experienceInfo}></Experience>
        </div>

    )
}
export default CV_display;