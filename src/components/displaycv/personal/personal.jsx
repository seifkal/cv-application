import "./personal.css"
import emailImg from "./emailImg.png"
import phoneImg from "./phoneImg.png"
import addressImg from "./addressImg.png"
function Personal({ personalInfo }) {
    return (
        <div className="personal-container">
            <p className="name">{personalInfo.name}</p>
            <div className="contact-container">
                <div className="email-container">
                    <img src={emailImg} alt="" className="icon"/>
                    <p className="email">{personalInfo.email}</p>
                </div>
                <div className="phone-container">
                    <img src={phoneImg} alt="" className="icon"/>
                    <p className="phone">{personalInfo.phone}</p>
                </div>
                <div className="address-container">
                    <img src={addressImg} alt="" className="icon"/>
                    <p className="address">{personalInfo.address}</p>
                </div>
            </div>
        </div>
    )
}

export default Personal;