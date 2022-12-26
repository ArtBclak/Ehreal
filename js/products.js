
function Products(reg) {

    const block = document.querySelector(".block")
        
    reg.map( i => {
        block.innerHTML += `
        <a
            class="a a${i.category}"
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
            <h3 class="name">
                ${i.name}
            </h3>
        </a>
        `
    })

    

}

export default Products