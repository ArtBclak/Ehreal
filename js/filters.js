function Filters() {

    const catalog = [
        "All", 
        "Markets",
        "Crypto",
        "Wallets",
        "Socials",
        "Video",
        "Games"
    ]
    
    const filters = document.querySelector(".filters")
    
    catalog.forEach(( i, index ) => {
        filters.innerHTML += `
            <li 
                class="filters_li ${index === 0 ? "filters_li--active" : ""}" 
                id="${index}"
            >
            <svg class="filters_svg">
                <use xlink:href="./img/Sprite.svg#${i}" />
            </svg>
                ${i}
            </li>
        `
    })
    

    filters.addEventListener("click", e => {
        e = e.target
        
        if (e.classList.contains("filters_li")) {
            filters
                .querySelector(".filters_li--active")
                .classList.remove("filters_li--active")

            e.classList.add("filters_li--active")
            const a = document.querySelectorAll(".a")
            
            for ( let i = 0; i < a.length; i++ ) {
                a[i].classList.contains("a"+e.id) || +e.id === 0 ? 
                    a[i].classList.remove("invisibility--filter") :
                    a[i].classList.add("invisibility--filter") 
            }
        }
        
    })


}

export default Filters;