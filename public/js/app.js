const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    console.log('testing!')
    console.log(search.value)
    messageOne.textContent = 'LOADING...'

    fetch('/weather?address=' + encodeURIComponent(search.value)).then((response) => {
        response.json().then((data) => {
            if(data.error)
            {
                messageOne.textContent = data.error
                return console.log(data.error)
            }

            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
            console.log(data.location)
            console.log(data.forecast)
        })  
    })
})