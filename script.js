const picker = document.getElementById('color')
const select = document.getElementById('color-input')
const btn = document.getElementById('btn')

function fetchColor() {
    const color = picker.value.substring(1)
    const mode = select.value
    const url = `https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=5&format=json`

    fetch(url)
        .then(res => res.json())
        .then(data => displayColor(data.colors))
}

function displayColor(colors) {
    const main = document.getElementById('main')
    const hexMain = document.getElementById('hex-main')
    main.innerHTML = ''
    hexMain.innerHTML = ""


    colors.forEach(color => {
        const colorBox = document.createElement('div')
        colorBox.classList.add('color-box')
        colorBox.style.backgroundColor = color.hex.value
        main.appendChild(colorBox)
    })

    colors.forEach(color => {
        const colorHex = document.createElement('p')
        colorHex.classList.add('color-hex')
        colorHex.textContent = `${color.hex.value}`
        hexMain.appendChild(colorHex)
    })
}

btn.addEventListener('click', fetchColor)