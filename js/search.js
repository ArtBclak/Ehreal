function Search() {
    const search = document.querySelector(".search_input")
    const prd = document.querySelectorAll(".prod") 
 
    
    search.addEventListener("input", ( e ) => {
        e = e.target.value.toLowerCase()
        for ( let i = 0; i < prd.length; i++ ) {
            const content = prd[i].title.toLowerCase()
            content.includes(e) ? 
                prd[i].classList.remove("invisibility") :
                prd[i].classList.add("invisibility") 
        }
    })


    
    
    
    
}

export default Search