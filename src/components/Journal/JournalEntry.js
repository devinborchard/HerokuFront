
import React, { useState, useEffect, useRef } from 'react';
// import { useSelector, useDispatch } from 'react-redux'
import { useNavigate  } from 'react-router-dom';
// import Header from './Header';
// import About from './AboutMe';
import { colors } from '../../assets/styles';




function JournalEntry({selectedEntry, saveEntry, deleteEntry, user_id}) {

    const navigate  = useNavigate();

    const [isEditingDate, setIsEditingDate] = useState(false);
    const [isEditingJournal, setIsEditingJournal] = useState(false);
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [journalData, setJournalData] = useState("")
    const [DateData, setDateData] = useState("")
    const [TitleData, setTitleData] = useState("")
    const [idData, setIdData] = useState(0)


    useEffect(()=>{
        setJournalData(selectedEntry.journal_entry)
        setDateData(selectedEntry.journal_date)
        setTitleData(selectedEntry.journal_title)
        setIdData(selectedEntry.journal_id)
    }, [selectedEntry])

    const saveEntryHandler = () => {
        saveEntry({
            journal_entry: journalData,
            journal_date: DateData,
            journal_title: TitleData,
            journal_id: idData,
            user_id: user_id
        })
    }
    const deleteEntryHandler = async () => {
        await deleteEntry(idData)
    }

    const printData = () => {
        // console.log("DEBUG")
        console.log({
            journal_entry: journalData,
            journal_date: DateData,
            journal_title: TitleData,
            journal_id: idData
        })
    }

    // div styles

    const defaultDivStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "50vw",
        height: "30vw",
        boxSizing: "border-box",
        transition: "all 0.3s ease", // Smooth transition for style changes
        textDecoration: "none"
    }
    let journalDivStyle = {...defaultDivStyle}

    let dateDivStyle = {...defaultDivStyle}
    dateDivStyle.width = "25vw"
    dateDivStyle.height = "4vw"

    let titleDivStyle = {...dateDivStyle}


    // textArea styles

    const defaultTextAreaStyle = {
        fontSize: "20px",
        fontFamily: "'Arial', sans-serif",
        fontWeight: "normal",
        color: "white",
        textAlign: "left",
        width: "100%", // Expand width based on content
        height: "100%", // Takes full height of the container
        padding: "5px",
        resize: "none", // Disable resizing
        outline: "none", // Remove outline for cleaner appearance
        boxSizing: "border-box",
        transition: "all 0.3s ease", // Smooth transition for styles
        backgroundColor: isEditingDate ? "#1A232B" : "#161921",
        border: isEditingDate ? "1px solid #BA6FEC" : "1px solid #3d294b", // Border on edit mode
        overflow: isEditingDate ? "auto" : "hidden", // Show scrollbar when editing, hide when not
        boxSizing: "border-box", // Ensures padding is included in the width/height

    }
    let dateTextAreaStyle = {...defaultTextAreaStyle}

    let titleTextAreaStyle = {...defaultTextAreaStyle}
    titleTextAreaStyle.backgroundColor = isEditingTitle ? "#1A232B" : "#161921"
    titleTextAreaStyle.overflow = isEditingTitle ? "auto" : "hidden"
    titleTextAreaStyle.border = isEditingTitle ? "1px solid #BA6FEC" : "1px solid #3d294b"
    titleTextAreaStyle.textDecoration= "underline"

    let journalTextAreaStyle = {...defaultTextAreaStyle}
    journalTextAreaStyle.backgroundColor = isEditingJournal ? "#1A232B" : "#161921"
    journalTextAreaStyle.overflow = isEditingJournal ? "auto" : "hidden"
    journalTextAreaStyle.border = isEditingJournal ? "1px solid #BA6FEC" : "1px solid #3d294b"

    
    const dateEntry = (
        <div
                style={dateDivStyle}
        >
            <textarea
                value={DateData}
                onChange={(e) => {setDateData(e.target.value)}}
                onFocus={() => setIsEditingDate(true)} // Set editing mode when focused
                onBlur={() => {setIsEditingDate(false); saveEntryHandler()}} // Set editing mode off when blurred
                style={dateTextAreaStyle}
            />
        </div>
    );
    
    const titleEntry = (
        <div
                style={titleDivStyle}
        >
            <textarea
                value={TitleData}
                onChange={(e) => {setTitleData(e.target.value)}}
                onFocus={() => setIsEditingTitle(true)} // Set editing mode when focused
                onBlur={() => {setIsEditingTitle(false); saveEntryHandler()}} // Set editing mode off when blurred
                style={titleTextAreaStyle}
            />
        </div>
    );

    const journalEntry = (
        <div
                style={journalDivStyle}
        >
            <textarea
                value={journalData}
                onChange={(e) => {setJournalData(e.target.value)}}
                onFocus={() => setIsEditingJournal(true)} // Set editing mode when focused
                onBlur={() => {setIsEditingJournal(false); saveEntryHandler()}} // Set editing mode off when blurred
                style={journalTextAreaStyle}
            />
        </div>
    );

    if(selectedEntry.journal_id){
        return(
            <div style={{border : "1px solid #BA6FEC"}}>
            {/* <button className="button-5" onClick={saveEntryHandler}> Save</button> */}
            <button className="button-5" onClick={deleteEntryHandler}> Delete</button>
            {/* <button className="button-5" onClick={printData}> debug</button> */}
            <table>
                <tbody>
                    <tr>
                        <td>{dateEntry}</td>
                        <td>{titleEntry}</td></tr> 
                </tbody>
            </table>
            <table>
                <tbody>
                    <tr>
                        <td>{journalEntry}</td>
                    </tr>
                </tbody>
            </table>
            </div>
        )
    }

    return(
        <div style={{ color:"white", textAlign: "center", border : "1px solid #BA6FEC"}}>
            <h2 style={journalDivStyle} >You dont have any journal entries yet! <br/> Click the New Entry button to create your first entry</h2>
        </div>
    )

}

export default JournalEntry