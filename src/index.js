// function fetchDucks(){
//     const url = 'http://localhost:3000/ducks'
//     fetch(url)
//     .then(response => response.json())
//     .then(ducks => ducks.forEach(duck => renderDucks(duck)))
// }

// function renderDucks(duck){
//     const duckNav = document.querySelector('#duck-nav')
//     const duckImage = document.createElement('img')
//     duckImage.src = duck.img_url
//     duckNav.append(duckImage)

//     //click to render functionality 
//     duckImage.addEventListener('click', () => {
//         renderDuckDisplay(duck)
//     })
// }

// function renderDuckDisplay(duck) {
//     const duckDisplay = document.querySelector('#duck-display')
//     const duckName = document.querySelector('#duck-display-name')
//     duckName.textContent = duck.name
//     const duckImage = document.querySelector('#duck-display-image')
//     duckImage.src = duck.img_url
//     const likeButton = document.querySelector('#duck-display-likes')
//     likeButton.textContent = `${duck.likes} likes!!!!!!`
//     duckDisplay.appendChild(duckName, duckImage, likeButton)   
// }

// function likeButtonClick(){
//     const likeButton = document.querySelector('#duck-display-likes')
//     likeButton.addEventListener('click', () => {
//     incrementLikes()
// })
// }

// function incrementLikes(){
//     const likeButton = document.querySelector('#duck-display-likes')
//     let numberOfLikes = parseInt(likeButton.textContent, 10)
//     numberOfLikes++

    
//     likeButton.textContent = `${numberOfLikes} likes!!!`
   
    
// }

// function addNewDuckForm() {
//     const newDuckForm = document.querySelector('#new-duck-form')
//     newDuckForm.addEventListener('submit', e => renderNewDuck(e) )  
    
// } 

// function renderNewDuck(e) {
//     e.preventDefault()
//     const duckNav = document.querySelector('#duck-nav')
//     const newDuckNameInput = document.getElementsByName("duck-name-input")[0].value
//     const newDuckImageInput = document.getElementsByName("duck-image-input")[0].value
//     const newDuckName = document.createElement('h2')
//     newDuckName.textContent = newDuckNameInput
//     const newDuckImage = document.createElement('img')
//     newDuckImage.src = newDuckImageInput
//     const likeButton = document.createElement('button')
//     likeButton.textContent = '0 likes'
//     duckNav.append(newDuckImage)

//     //onclick event 
//     newDuckImage.addEventListener('click', () => {
//         renderAddedDucksToDuckDisplay()
//     })
// }

// function renderAddedDucksToDuckDisplay(){
//     //console.log('it works!')
//     const duckNav = document.querySelector('#duck-nav')
//     const duckNameValue = document.getElementsByClassName('duck-name-input')[0].value
    
//     const duckImageValue = document.getElementByClassName('duck-image-input')[0].value
    
//     const numberOfLikes = '0 likes'
// }

// document.addEventListener('DOMContentLoaded', () => {
//     fetchDucks()
//     likeButtonClick()
//     addNewDuckForm()
//     renderAddedDucksToDuckDisplay()
    
// })




const url = 'http://localhost:3000/ducks' 
fetch(url)
.then(response => response.json())
.then(ducks => ducks.forEach(duck => renderDuck(duck)))

const likeButton = document.querySelector('#duck-display-likes')
likeButton.addEventListener('click', () => updateDuckLikes())
const newDuckForm=document.querySelector("#new-duck-form")
newDuckForm.addEventListener('submit', addNewDuck)


function renderDuck(duck) {
    const duckNav = document.querySelector('#duck-nav')
    const duckImage = document.createElement('img')
    duckImage.src = duck.img_url
    duckImage.addEventListener('click', () => {
         const duckDisplay = document.querySelector('#duck-display')
         duckDisplay.querySelector('#duck-display-name').textContent = duck.name
         duckDisplay.querySelector('#duck-display-image').src = duck.img_url
         duckDisplay.querySelector('#duck-display-likes').textContent = `${duck.likes} likes`
    })
    duckNav.append(duckImage) 
}

function updateDuckLikes() {
    let numberOfLikes = parseInt(likeButton.textContent)
    numberOfLikes++
    likeButton.textContent = `${numberOfLikes} likes`
}

function addNewDuck(e) {
    e.preventDefault()
    const name = e.target['duck-name-input'].value
    const img_url = e.target['duck-image-input'].value 
    const likes = 0
    newDuckObj = {
        name, img_url, likes
    }
    renderDuck(newDuckObj)
    document.querySelector('#new-duck-form').reset()
}
