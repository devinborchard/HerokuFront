
import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux'
import { useNavigate  } from 'react-router-dom';
// import Header from './Header';
// import About from './AboutMe';
import { colors } from '../../assets/styles';
import JournalEntry from './JournalEntry';
import RecentJournalEntries from './RecentJournalEntries';
import { getCurrentDateString } from '../../utils/dateUtils';
import { saveJournalEntriesRequest, getJournalEntriesRequest} from '../../utils/requests';




function Journal() {

    const navigate  = useNavigate();

    const defaultEntryObject = {
        date: "MM-DD-YYYY",
        title: "Journal Entry",
        entry: "...",
        id: 0
    }
    const testObject1 = {
        date: "MM-DD-YYYY",
        title: "Journal Entry 1",
        entry: "...",
        id: 1
    }
    const testObject2 = {
        date: "MM-DD-YYYY",
        title: "Journal Entry 2",
        entry: "...",
        id: 2
    }

    const [selectedEntry, setSelectedEntry] = useState({})

    const [entries, setEntries] = useState([testObject1, testObject2])

    useEffect(()=>{
        async function setFromSavedEntries(){
            const entriesResponse = await getJournalEntriesRequest()
            setEntries(entriesResponse.data)
        }
        setFromSavedEntries()
    }, [])

    const saveEntry = (entryToSave) => {
        let oldEntries = entries.slice();
        oldEntries = oldEntries.filter((entry) => entry.id != entryToSave.id);
        const newEntries = [entryToSave, ...oldEntries]
        setEntries(newEntries)
        saveJournalEntriesRequest(newEntries)
    }

    const deleteEntry = (idToDelete) => {
        let oldEntries = entries.slice();
        oldEntries = oldEntries.filter((entry) => entry.id !=idToDelete);
        setEntries([...oldEntries])
    }

    const addEntry = () => {

        let nextId = 1;
        let ids = entries.map(entry => entry.id);
        while(ids.includes(nextId)){
            nextId++;
        }

        let newEntry = defaultEntryObject
        newEntry.id = nextId
        newEntry.title = `Journal Entry ${nextId}`
        newEntry.date = getCurrentDateString()
        setEntries([newEntry, ...entries.slice()])
        setSelectedEntry(newEntry)
    }
    
    return(
        <>
        <div style={{paddingTop: '0px',marginTop:'0%', color: colors.light, textAlign:'center'}}>
            <h1>Journal</h1>
        </div>
        <div style={{paddingTop: '0px',marginTop:'0%', color: colors.light, textAlign:'center'}}>
            <button onClick={addEntry}>New+</button>    
        </div>
        <div >
            <table style={{marginLeft:"auto", marginRight:"auto"}}><tbody>
                <tr>
                    <td style={{verticalAlign:"top"}}><RecentJournalEntries setSelectedEntry={setSelectedEntry} entries ={entries} selectedEntry={selectedEntry}></RecentJournalEntries></td>
                    <td><JournalEntry deleteEntry = {deleteEntry} saveEntry = {saveEntry} selectedEntry={selectedEntry}></JournalEntry></td>
                    <td>RELATED</td>
                </tr>
            </tbody></table>
        </div>
        </>
    )
}

export default Journal