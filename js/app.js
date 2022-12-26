import info from "./info.js"
import Products from "./products.js"
import Search from "./search.js"
import Filters from "./filters.js"

window.addEventListener("DOMContentLoaded", () => {
    
    const { reg } = info

    Products(reg)      
    Search()
    Filters()
})