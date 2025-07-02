import "./qualification-form.css"
function QualificationForm({ type, info, setInfo }) {
    const labels=[
        // index 0 = education
        {
            title: "University/Instituion/Organization",
            field: "Program/Degree/Course",
            from: "Start date",
            until: "End date",
            address: "Address" 
        },
        // index 1 = experience
        {
            title: "Workplace/Company/Organization",
            field: "Position",
            from: "Start date",
            until: "end date",
            address: "Address"

        }
    ];
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo({
            ...info,
            [name]: value,
        });
    };
    return (
        <form className="qualification-form">
            <label htmlFor="title">{labels[type].title}</label>
            <input 
                type="text" 
                name="title"
                id="title"
                value={info.title}
                onChange={handleChange}
            />

            <label htmlFor="field">{labels[type].field}</label>
            <input 
                type="text" 
                name="field"
                id="field"
                value={info.field}
                onChange={handleChange}
            />
            <label htmlFor="from">{labels[type].from}</label>
            <input 
                type="text" 
                name="from"
                id="from"
                value={info.from}
                onChange={handleChange}
            />
            <label htmlFor="until">{labels[type].from}</label>
            <input 
                type="text" 
                name="until"
                id="until"
                value={info.until}
                onChange={handleChange}
            />
            <label htmlFor="address">{labels[type].address}</label>
            <input 
                type="text" 
                name="address"
                id="address"
                value={info.address}
                onChange={handleChange}
            />
        </form>
    );
}

export default QualificationForm