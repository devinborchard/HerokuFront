const axios = require('axios');
const BASE = process.env.REACT_APP_BACKEND


const api = async () => {
    let res = await post_request('api',{data:'hi'})
    return res
}

const get_request = async (url) => {
    let res = await axios.get(`${BASE}/${url}`)
    return res
}

const post_request = async(url,body) => {
    let res = await axios.post(`${BASE}/${url}`,body)
    return res
}

module.exports = api