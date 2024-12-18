
import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux'
import { useNavigate  } from 'react-router-dom';
// import Header from './Header';
// import About from './AboutMe';
import { colors } from '../../assets/styles';
import JournalEntry from './JournalEntry';
import RecentJournalEntries from './RecentJournalEntries';
import { getCurrentDateString } from '../../utils/dateUtils';
import { saveJournalEntryRequest, getJournalEntriesRequest, deleteJournalEntryRequest} from '../../utils/requests';

import { useSelector, useDispatch } from 'react-redux'
import RelatedJournalEntries from './RelatedJournalEntries';



function Journal({user}) {

    const navigate  = useNavigate();

    const defaultEntryObject = {
        journal_date: "MM-DD-YYYY",
        journal_title: "Journal Entry",
        journal_entry: "...",
        journal_id: 0
    }

    const [selectedEntry, setSelectedEntry] = useState({})
    const [entries, setEntries] = useState([])
    const [loading, setLoading] = useState(true); // Loading state added
    

    useEffect(() => {
        // console.log("USER: ", user)
        async function setFromSavedEntries() {
            try {
                const entriesResponse = await getJournalEntriesRequest(user.user_id);
                // console.log("ENTRIES: ", entriesResponse);
                setEntries(entriesResponse);
                const newSelected = entriesResponse[0]?entriesResponse[0]:{}
                setSelectedEntry(newSelected)
            } catch (error) {
                console.error("Failed to fetch entries:", error);
            } finally {
                setLoading(false); // Set loading to false when done
            }
        }
        if(user.user_id)
        setFromSavedEntries();
    }, [user]);

    const saveEntry = (entryToSave) => {
        let oldEntries = entries.slice();
        oldEntries = oldEntries.filter((entry) => entry.journal_id != entryToSave.journal_id);
        const newEntries = [entryToSave, ...oldEntries]
        setEntries(newEntries)
        // entryToSave["user_id"]= user.user_id;
        // console.log("ENTRY TO SAVE: ", entryToSave)
        saveJournalEntryRequest(entryToSave)
    }


    const deleteEntry = async (idToDelete) => {

        let oldEntries = entries.slice();
        oldEntries = oldEntries.filter((entry) => entry.journal_id !=idToDelete);

        setEntries([...oldEntries])
        await deleteJournalEntryRequest(idToDelete)
        const newSelected = oldEntries[0]?oldEntries[0]:{}
        setSelectedEntry(newSelected)
    }

    const addEntry = () => {

        let nextId = 1;
        let ids = entries.map(entry => entry.journal_id);
        while(ids.includes(nextId)){
            nextId++;
        }

        let newEntry = defaultEntryObject
        newEntry.journal_id = nextId
        newEntry.journal_title = `Journal Entry ${nextId}`
        newEntry.journal_date = getCurrentDateString()
        newEntry.user_id = user.user_id
        setEntries([newEntry, ...entries.slice()])
        setSelectedEntry(newEntry)
    }
    
    if(!loading){
        // console.log("ENTRIES: ", entries)
        return(
            <>
            <div style={{paddingTop: '0px',marginTop:'0%', color: colors.light, textAlign:'center'}}>
                <h1>Journal</h1>
            </div>
            <div style={{paddingTop: '0px',marginTop:'0%', color: colors.light, textAlign:'center'}}>
                <button className="button-5" onClick={addEntry}>New Entry +</button>    
            </div>
            <div >
                <table style={{marginLeft:"auto", marginRight:"auto"}}><tbody>
                    <tr>
                        <td style={{verticalAlign:"top"}}><RecentJournalEntries saveEntry={saveEntry} setSelectedEntry={setSelectedEntry} entries ={entries} selectedEntry={selectedEntry}></RecentJournalEntries></td>
                        <td><JournalEntry user_id={user.user_id} deleteEntry = {deleteEntry} saveEntry = {saveEntry} selectedEntry={selectedEntry}></JournalEntry></td>
                        <td style={{verticalAlign:"top"}}><RelatedJournalEntries saveEntry={saveEntry} setSelectedEntry={setSelectedEntry} entries ={entries} selectedEntry={selectedEntry}></RelatedJournalEntries></td>
                    </tr>
                </tbody></table>
            </div>
            </>
        )
    }
    else{
        console.log("LOADING")
    }
    
}

export default Journal