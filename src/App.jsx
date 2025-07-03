import CV_display from "./components/displaycv/CV_display";
import Form from "./components/form/form";
import { useState } from "react";
import "./App.css"
function App() {
  const [personalInfo ,setPersonalInfo] = useState({
    name: "Seif Kal",
    email: "S.Kal@gju.edu.jo",
    phone: "+962 1234 5678 9012",
    address: "Amman,JO",
  });

  const [educationInfo, setEducationInfo] = useState([
    {
      title: "German Jordanian University",
      field: "Bachelors in Computer engineering",
      from: "09/2021",
      until: "present",
      address: "Amman, JO",
    },
  ])
  const [experienceInfo, setExperienceInfo] = useState([
    {
      title: "Datahub Analytics",
      field: "DevOps Traineeship",
      from: "02/2025",
      until: "04/2025",
      address: "Amman, JO",
    },
    {
      title: "Placeholder Inc.",
      field: "Software engineer",
      from: "09/2025",
      until: "present",
      address: "Amman, JO"
    }
  ])


  return(
    <>
      <div className="container">
        <div className="formm-container">
          <Form personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} educationInfo={educationInfo} setEducationInfo={setEducationInfo} experienceInfo={experienceInfo} setExperienceInfo={setExperienceInfo}></Form>
        </div>
        <div className="CVdisplay-container">
          <CV_display personalInfo={personalInfo} educationInfo={educationInfo} experienceInfo={experienceInfo}></CV_display>  
        </div>
      </div>
    </>
  )
}

export default App;
