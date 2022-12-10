const axios = require('axios');
const BASE = process.env.REACT_APP_BACKEND


const api = async () => {
    let res = await post_request('api',{data:'hi'})
    return res
}

const verifyCreds = async(username, password) => {
    let res = await post_request('user', {username,password})
    return res
}

const checkCredsAvailable = async(email, username) => {
    let res = await post_request('checkAvailable', {email,username})
    return res
}

const createUser = async(formResults) => {
    let res = await post_request('createUser', {
        username: formResults.userName.value,
        password: formResults.password1.value,
        firstName: formResults.firstName.value,
        lastName: formResults.lastName.value,
        email: formResults.email.value,
    })
    return res
}

const sendApiEmail = async(formData) => {
    let res = await post_request('emailer', formData)
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
export {
    sendApiEmail,
    api, 
    verifyCreds,
    checkCredsAvailable,
    createUser
}