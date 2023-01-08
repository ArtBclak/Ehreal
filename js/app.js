import info from "./info.js"
import Products from "./products.js"
import Search from "./search.js"
import Snow from "./snow.js"
import Filters from "./filters.js"
import Cart from "./cart.js"

window.addEventListener("DOMContentLoaded", () => {
    
    const { reg } = info
    
    let added = JSON.parse(localStorage.getItem("added")) || []

    Products(reg, added)      
    Search()
    Filters()
    Snow()
    Cart(reg, added)
})