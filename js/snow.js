function Snow() {

    let count = 0
    function create () {
        const random = Math.floor(Math.random() * 101)
        const div = document.createElement('div')
        div.classList.add("snow")
        div.style.left = `${random}%`
        document.body.append(div)
        count += 1
        if ( count > 50 ) {
            clearInterval(interval)
        }
    }
    create () 

    const interval = setInterval( create , 1127)
    
    
    
}

export default Snow