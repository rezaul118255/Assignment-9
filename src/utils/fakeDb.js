// add dat to local storage
const addToDb = id => {
    localStorage.setItem('jobDetails', id)
}
export { addToDb }