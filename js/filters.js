function Filters() {

    const catalog = [
        { name: "All Categories", svg: "All"}, 
        { name: "Marketplaces", svg: "Markets"},
        { name: "Crypto Wallets", svg: "Crypto"},
        { name: "Wallets & Banks", svg: "Wallets"},
        { name: "Social media", svg: "Socials"},
        { name: "Video", svg: "Video"},
        { name: "Games", svg: "Games"}
    ]
    
    const filters = document.querySelector(".filters")
    
    catalog.forEach(( i, index ) => {
        filters.innerHTML += `
            <li 
                class="filters_li ${index === 0 ? "filters_li--active" : ""}" 
                id="${index}"
            >
            <svg>
                <use xlink:href="./img/Sprite.svg#${i.svg}" />
            </svg>
                ${i.name}
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