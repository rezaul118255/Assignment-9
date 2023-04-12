// add dat to local storage
const addToDb = id => {


    let jobCart = {}
    const storedJob = localStorage.getItem('jobCart')
    if (storedJob) {
        jobCart = JSON.parse(storedJob)

    }

    const quantity = jobCart[id]
    if (quantity) {
        const newquantity = quantity + 1
        jobCart[id] = newquantity
    } else {
        jobCart[id] = 1
    }
    localStorage.setItem('jobCart', JSON.stringify(jobCart))
}

const getStoredCart = () => {
    let jobCart = {}
    const storedJob = localStorage.getItem('jobCart')
    if (storedJob) {
        jobCart = JSON.parse(storedJob)

    }
    return getStoredCart
}

export { addToDb, getStoredCart }