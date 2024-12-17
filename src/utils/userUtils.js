export const getStoredUserData = () => {
    const item = localStorage.getItem('user')
    const parsed = JSON.parse(item)
    return parsed

}