import "../../styles/form.css"
import Personalform from "./personal-form/personal-form";
import QualificationForm from "./qualification-form/qualification-form";
function Form({ personalInfo, setPersonalInfo, educationInfo, setEducationInfo, experienceInfo, setExperienceInfo}) {
    return (
        <div className="form-container">
            <Personalform personalInfo={personalInfo} setpersonalInfo={setPersonalInfo} />
            <div className="educationForm-container">
                <h1>Education Background</h1>

                {/*Render a Qualification form for each EducationInfo object */}
                {educationInfo.map((entry, idx) => (
                  <QualificationForm
                    key={idx}
                    type={0}
                    info={entry}
                    setInfo={updatedEntry =>
                      setEducationInfo(prev =>
                        prev.map((item, i) => (i === idx ? { ...item, ...updatedEntry } : item))
                      )
                    }
                  />
                ))}

                {/* button to add more educationinfo */}
                <button
                  type="button"
                  onClick={() => setEducationInfo(prev => [
                    ...prev,
                    { title: "", field: "", from: "", until: "", address: "" }
                  ])}
                  style={{ marginTop: '1rem' }}
                >
                  Add Education
                </button>

                <h1>Work Experience</h1>
                {/*Render a Qualification form for each experienceInfo object */}
                {experienceInfo.map((entry, idx) => (
                  <QualificationForm
                    key={idx}
                    type={1}
                    info={entry}
                    setInfo={updatedEntry =>
                      setExperienceInfo(prev =>
                        prev.map((item, i) => (i === idx ? { ...item, ...updatedEntry } : item))
                      )
                    }
                  />
                ))}

                {/* button to add more experience info */}
                <button
                  type="button"
                  onClick={() => setExperienceInfo(prev => [
                    ...prev,
                    { title: "", field: "", from: "", until: "", address: "" }
                  ])}
                  style={{ marginTop: '1rem' }}
                >
                  Add Work Experience
                </button>
            </div>
        </div>
    )
}
export default Form;