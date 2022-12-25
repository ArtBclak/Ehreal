import info from "./info.js"
import Search from "./search.js"

window.addEventListener("DOMContentLoaded", () => {
    
    
    const { reg } = info
    const block = document.querySelector(".block")
    
    reg.map( i => {
        block.innerHTML += `
        <a
            class="a"
            href="${i.url}"
            alt="${i.name}"
            title="${i.name}"
            target="_blank"
        >
        ${ i.status === 1 ?
            `<p class="status" >TOP</p>` : ""
        }
        <img 
        class="img" 
        loading="lazy"
        src="${i.img}"
                >
                <h4
                class="name"
                >
                ${i.name}
                </h4>
                </a>
                `
    })
            
    Search()
})