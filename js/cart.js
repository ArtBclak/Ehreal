function Cart(reg, added) {
    const block = document.querySelector(".block")
    const basket = document.querySelector(".basket")
    const count = document.querySelector(".basket_count")
    const cartsect = document.querySelector(".cart")
    const cartblock = document.querySelector(".cart_container")
    const email = document.querySelector(".cart_email")
    let on = false

    const sendheandler = () => {
        const info = reg.map( i => {
            if( added.includes(i.id)) return i.name
        })
        
        email.href = `mailto:0960469634kvstrt@gmail.com?subject=Order&body=${info.join(" ")}`
    }


    const countadded = () => {
        if (added.length > 0 ) {
            count.style.display = "flex"
            count.textContent = added.length
            sendheandler()
        } else {
            count.style.display = "none"
            email.href = ""
        }
    }
    countadded()


    const prodadd = (i) => {
        cartblock.innerHTML += `
        <div
            class="prod"
            id="${i.id}"
        >
            <a 
                class="a"
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
                class="remove"
            >
                remove
            </button>
        </div>
        `
    }

    block.addEventListener("click", e => {
        e = e.target
        if (e.closest("button")) {
            const parent = e.closest("div")
            parent.classList.add("added")
            added.push(parent.id)
            let i = reg.find( i => i.id === parent.id)
            localStorage.setItem("added", JSON.stringify(added))
            countadded()
            prodadd(i)
        }
     
    })

    cartblock.addEventListener("click", e => {
        e = e.target
        if (e.closest("button")) {
            const parent = e.closest("div")
            cartblock.removeChild(parent)
            added = added.filter( i => i !== parent.id )
            document.getElementById(parent.id).classList.remove("added")
            localStorage.setItem("added", JSON.stringify(added))
            countadded()
        }
    })

    const onhandler = () => {
        cartsect.style.display = on ? "none" : "flex"
        document.body.style.overflowY = on ? "auto" : "hidden"
        on = on ? false : true
    }

    basket.addEventListener("click", () => onhandler())
    
    
    if (added.length > 0) {
        reg.forEach(i => {
            if (added.includes( i.id )) return prodadd(i)
        } )
    }
    



}


export default Cart