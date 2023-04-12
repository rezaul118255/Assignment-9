import { getStoredCart } from '../utils/fakeDb';


export const productsAndCartData = async () => {
    const productsData = await fetch('/public/Featured-job.json')
    const products = await productsData.json()
    const savedCart = getStoredCart()
    let jobCart = []
    for (const id in savedCart) {
        const foundProduct = products.find(product => product.id == id)
        if (foundProduct) {
            foundProduct.quantity = savedCart[id]
            jobCart.push(foundProduct)
        }
    }
    return { jobCart }
}
