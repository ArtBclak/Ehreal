function Search() {
    const search = document.querySelector(".search_input")
    const a = document.querySelectorAll(".a") 
 
    
    search.addEventListener("input", ( e ) => {
        e = e.target.value.toLowerCase()
        for ( let i = 0; i < a.length; i++ ) {
            const content = a[i].querySelector(".name").textContent.toLowerCase()
            content.includes(e) ? 
                a[i].classList.remove("invisibility") :
                a[i].classList.add("invisibility") 
        }
    })


    
    
    
    
}

export default Search