const axios = require('axios');
const BASE = process.env.REACT_APP_BACKEND

//test request
const api = async () => {
    let res = await post_request('api',{data:'hi'})
    return res
}

//user login or sign up requests
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

//recipe calls
const getFilterTagsRequest = async() => {
    let res = await get_request('filterTags')
    return res.data.data
}

const getRecipesRequest = async(selectedFilters, recipeRange) => {
    let res = await post_request('recipes', {filters:selectedFilters, index: recipeRange[0], limit:recipeRange[1]-recipeRange[0]})
    return res
}

//emailer requests
const sendApiEmail = async(formData) => {
    let res = await post_request('emailer', formData)
    return res
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
        throw e
    }
}

//export all functions
export {
    getFilterTagsRequest,
    getRecipesRequest,
    sendApiEmail,
    api, 
    verifyCreds,
    checkCredsAvailable,
    createUser
}