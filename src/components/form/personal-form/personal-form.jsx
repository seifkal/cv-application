import "./Personal-form.css";

function Personalform({ personalInfo, setpersonalInfo }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setpersonalInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="personalform-container">
      <h1 className="personal-title">Personal Information</h1>
      <form className="personal-form">
        <label htmlFor="name">Full Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={personalInfo.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={personalInfo.email}
          onChange={handleChange}
        />

        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={personalInfo.phone}
          onChange={handleChange}
        />

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={personalInfo.address}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default Personalform;