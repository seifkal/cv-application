import "./form.css"
import Personalform from "./personal-form/personal-form";
import QualificationForm from "./qualification-form/qualification-form";
import { useState } from "react";
function Form({ personalInfo, setPersonalInfo, educationInfo, setEducationInfo, experienceInfo, setExperienceInfo}) {
    const [pendingEducation, setPendingEducation] = useState(null);
    const [pendingExperience, setPendingExperience] = useState(null);
    return (
        <div className="form-container">
            <Personalform personalInfo={personalInfo} setpersonalInfo={setPersonalInfo} />
            <div className="educationForm-container">
                <h2 className="form-title">Education Background</h2>

                {/* Render a Qualification form for each EducationInfo object */}
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
                    length={educationInfo.length}
                    index={idx}
                    isPending={false}
                    onDelete={() => setEducationInfo(prev => prev.filter((_, i) => i !== idx))}
                  />
                ))}

                {/* Render pending education form if present */}
                {pendingEducation && (
                  <QualificationForm
                    type={0}
                    info={pendingEducation}
                    setInfo={setPendingEducation}
                    length={educationInfo.length + 1}
                    index={educationInfo.length}
                    isPending={true}
                    onSave={() => {
                      setEducationInfo(prev => [...prev, pendingEducation]);
                      setPendingEducation(null);
                    }}
                    onCancel={() => setPendingEducation(null)}
                  />
                )}

                {/* button to add more educationinfo */}
                {!pendingEducation && (
                  <button
                    type="button"
                    onClick={() => setPendingEducation({ title: "", field: "", from: "", until: "", address: "" })}
                    style={{ marginTop: '1rem' }}
                  >
                    Add Education
                  </button>
                )}

                <h2 className="form-title">Work Experience</h2>

                {/* Render a Qualification form for each experienceInfo object */}
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
                    length={experienceInfo.length}
                    index={idx}
                    isPending={false}
                    onDelete={() => setExperienceInfo(prev => prev.filter((_, i) => i !== idx))}
                  />
                ))}

                {/* Render pending experience form if present */}
                {pendingExperience && (
                  <QualificationForm
                    type={1}
                    info={pendingExperience}
                    setInfo={setPendingExperience}
                    length={experienceInfo.length + 1}
                    index={experienceInfo.length}
                    isPending={true}
                    onSave={() => {
                      setExperienceInfo(prev => [...prev, pendingExperience]);
                      setPendingExperience(null);
                    }}
                    onCancel={() => setPendingExperience(null)}
                  />
                )}

                {/* button to add more experience info */}
                {!pendingExperience && (
                  <button
                    type="button"
                    onClick={() => setPendingExperience({ title: "", field: "", from: "", until: "", address: "" })}
                    style={{ marginTop: '1rem' }}
                  >
                    Add Work Experience
                  </button>
                )}
            </div>
        </div>
    )
}
export default Form;