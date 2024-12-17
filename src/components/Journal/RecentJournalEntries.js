
import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux'
import { useNavigate  } from 'react-router-dom';
// import Header from './Header';
// import About from './AboutMe';
import { colors } from '../../assets/styles';




function RecentJournalEntries({setSelectedEntry, entries, selectedEntry}) {

    const navigate  = useNavigate();

    
    useEffect(()=>{
        // console.log("R ENTRIES: ", entries)
    }, [])


    const entriesJSX = entries.map((item, i) => {

        let className = "recentEntry"
        if(item.journal_id === selectedEntry.journal_id){
            className = "selectedRecentEntry"
        }

        return (
            <tr key={`recent_${i}`}>
                <td onClick={()=>{setSelectedEntry(item)}} className={className} style={{padding:"10px", color:"white", fontSize:"20px", border:"1px solid #BA6FEC" }}>
                    {`${item.journal_date} : ${item.journal_title}`}
                </td>
            </tr>
        );
    });

    if(entries){
        // console.log("RECENTS: ", entries)

        return(
            <div style={{border : "1px solid #BA6FEC", height: "35vw"}}>
            <table>
                <tbody>
                    <tr>
                        <td style={ {padding:"10px", color: "white", textDecoration: "underline", fontSize:'20px'}}>RECENT</td>
                    </tr>
                    {entriesJSX}
                </tbody>
            </table>
            </div>
        )
    }

    

}

export default RecentJournalEntries