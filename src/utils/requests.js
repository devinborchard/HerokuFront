const axios = require('axios');
const BASE = process.env.REACT_APP_BACKEND

const getAuthToken = () => {
    // var b = Buffer.from(process.env.REACT_APP_AUTH_KEY);
    return btoa(process.env.REACT_APP_AUTH_KEY);}

//test request
const api = async () => {
    let res = await post_request('api',{data:'hi'})
    return res
}

const saveJournalEntryRequest = async(journalEntry) => {
    let res = await post_request('saveJournalEntry', journalEntry)
    return res
}

const deleteJournalEntryRequest = async(journal_id) => {
    let res = await get_request(`deleteJournalEntry?journal_id=${journal_id}`)
    return res.data
}

const getJournalEntriesRequest = async(user_id) => {
    let res = await get_request(`getJournalEntries?user_id=${user_id}`)
    return res.data
}

const getUser = async(userName, password) => {
    let res = await post_request('user', {
        "user_name":userName,
        "password":password
    })
    return res.data
}

const checkUserName = async (userName) => {
    let res = await post_request('checkUserName', {
        "user_name":userName,
    })
    return res.data
}

const createUser = async (user) => {
    let res = await post_request('createUser', user)
    return res.data
}

//base request call functions
const get_request = async (url) => {
    try{
        let res = await axios.get(`${BASE}/${url}`,{
            headers:{
                authorization: `Bearer ${getAuthToken()}`
            }
        })
        return res
    }catch(e){
        console.log('ERROR WITH GET: ', url, e)
        throw e
    }
}

const post_request = async(url,body) => {
    try{
        let res = await axios.post(`${BASE}/${url}`,body,{
            headers:{
                authorization: `Bearer ${getAuthToken()}`
            }
            
        })
        return res
    }catch(e){
        console.log('ERROR WITH POST: ', url, e)
        throw e
    }
}

//export all functions
export {
    api, 
    saveJournalEntryRequest,
    getJournalEntriesRequest,
    getUser,
    deleteJournalEntryRequest,
    checkUserName,
    createUser
}