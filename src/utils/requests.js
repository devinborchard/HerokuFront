const axios = require('axios');
const BASE = process.env.REACT_APP_BACKEND

//test request
const api = async () => {
    let res = await post_request('api',{data:'hi'})
    return res
}

const saveJournalEntriesRequest = async(formData) => {
    let res = await post_request('saveJournalEntries', formData)
    return res
}

const getJournalEntriesRequest = async() => {
    let res = await get_request('getJournalEntries')
    return res.data
}

//base request call functions
const get_request = async (url) => {
    try{
        let res = await axios.get(`${BASE}/${url}`)
        return res
    }catch(e){
        console.log('ERROR WITH GET: ', url, e)
        throw e
    }
}

const post_request = async(url,body) => {
    try{
        let res = await axios.post(`${BASE}/${url}`,body)
        return res
    }catch(e){
        console.log('ERROR WITH POST: ', url, e)
        throw e
    }
}

//export all functions
export {
    api, 
    saveJournalEntriesRequest,
    getJournalEntriesRequest
}