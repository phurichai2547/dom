// Good luck on JING write your code here

const colorArray = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6"];
// 1.
const buttonChange = document.getElementById('color-btn')
const bgRainbow = document.getElementById('rainbow')
buttonChange.addEventListener('click', () => {
    const colorArray = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6"];
    const random = Math.floor(Math.random() * colorArray.length)
    bgRainbow.style.backgroundColor = colorArray[random]
    localStorage.setItem('colorArray',colorArray[random])
})

// 2.
const input = document.getElementById('item-input')
const button = document.getElementById('add-btn')
const ulEle = document.querySelector('div#listItem>ul')
button.addEventListener('click', () => {
    const userInput = input.value
    const newLiEle = document.createElement('li')
    newLiEle.textContent = userInput
    ulEle.appendChild(newLiEle)
    localStorage.setItem('newLiEle', ulEle.innerHTML)
})


// 3.
const forming = document.querySelector('#input-list>form')
const error = forming.children[0]
const username1 = forming.children[1]
const email1 = forming.children[2]
const password1 = forming.children[3]
const submit = forming.children[4]
submit.addEventListener('click', (e) => {
    e.preventDefault()
    const username = username1.value
    const email = email1.value
    const password = password1.value
    console.log(username, email, password);
    if (username.length <= 0) {
        error.textContent = 'do not forget to put username'
    }
    if (email.length <= 0) {
        error.textContent = 'do not forget to put email'
    }
    if (password.length <= 0) {
        error.textContent = 'do not forget to put password'
    }
    if (username.length > 0 && email.length > 0 && password.length > 0) {
        error.textContent = 'Successfull'
    }
})


window.addEventListener('load' , () => {
    let bgcolor = localStorage.getItem('colorArray')
    console.log("");
    console.log(bgcolor);
    bgRainbow.style.backgroundColor = JSON.stringify(bgcolor)

    let newLiEle = localStorage.getItem('newLiEle')
    console.log(newLiEle);
    ulEle.innerHTML = newLiEle;
})

