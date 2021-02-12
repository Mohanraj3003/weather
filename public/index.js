let txt = document.getElementById('txt')

// let btn = document.getElementsByTagName('button')
let btn = document.getElementById('btn')

btn.addEventListener('click', async (e) => {
    let city = txt.value;
    console.log(city)
    e.preventDefault();
    window.location = `http://localhost:8000/${city}`
})