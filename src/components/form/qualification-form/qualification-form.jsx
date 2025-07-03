import "./qualification-form.css"
function QualificationForm({ type, info, setInfo, length = 1, index = 0, isPending = false, onSave, onCancel, onDelete }) {
    const labels = [
        // index 0 = education
        {
            header: "Education",
            title: "University/Instituion/Organization",
            field: "Program/Degree/Course",
            from: "Start date",
            until: "End date",
            address: "Address"
        },
        // index 1 = experience
        {
            header: "Experience",
            title: "Workplace/Company/Organization",
            field: "Position",
            from: "Start date",
            until: "End date",
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
        <>
            {length > 1 && (
                <h3>{labels[type].header} #{index + 1}</h3>
            )}
            <form className="qualification-form" onSubmit={e => e.preventDefault()}>
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
                <label htmlFor="until">{labels[type].until}</label>
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
                {/* Action buttons */}
                <div className="qualification-actions">
                    {isPending && (
                        <>
                            {onCancel && (
                                <button type="button" className="cancel-btn" onClick={onCancel}>Cancel</button>
                            )}
                            {onSave && (
                                <button type="button" className="save-btn" onClick={onSave}>Save</button>
                            )}
                        </>
                    )}
                    {!isPending && onDelete && (
                        <button type="button" className="delete-btn" onClick={onDelete}>Delete</button>
                    )}
                </div>
            </form>
        </>
    );
}

export default QualificationForm