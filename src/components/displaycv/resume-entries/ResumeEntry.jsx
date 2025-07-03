import "./ResumeEntry.css"
function ResumeEntry({ info }) {
    return (
        <>
            <div className="entry-container">
                <div className="meta">
                    <p className="duration entryData">{info.from} - {info.until}</p>
                    <p className="address entryData">{info.address}</p>
                </div>
                <div className="details">
                    <p className="title entryData">{info.title}</p>
                    <p className="field entryData">{info.field}</p>
                </div>
            </div>

        </>
    )
}

export default ResumeEntry;