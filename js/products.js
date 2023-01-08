
function Products(reg, added) {

    const block = document.querySelector(".block")
        
    reg.map( i => {
        block.innerHTML += `
        <div
            class="prod prod${i.category} ${added.includes(i.id) ? "added" : ""}"
 
            alt="${i.name}"
            title="${i.name}"
            id="${i.id}"
        >
            ${ i.status === 1 ?
                `<p class="status">TOP</p>` : ""
            }
            
            <a 
                class="a"
                href="${i.url}"
                alt="${i.name}"
                title="${i.name}"
                target="_blank"
            >
                <img 
                    class="img" 
                    loading="lazy"
                    src="${i.img}"
                >
                ${i.name}
            </a>
            <button
                type="button"
                class="tobasket"
            >
                add to cart
                <svg class="tobasket_svg">
                    <use class="tobasket_use" xlink:href="./img/Sprite.svg#basket" />
                </svg>
            </button>
        </div>
        `
    })


}

export default Products