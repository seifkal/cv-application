import "./ResumeEntry.css"
function ResumeEntry( {info} ){
    return(
        <>
            <p className="title entryData">{info.title}</p>
            <p className="field entryData">{info.field}</p>
            <p className="duration entryData">{info.from} - {info.until}</p>
            <p className="place entryData">{info.place}</p>
        </>
    )
}

export default ResumeEntry;