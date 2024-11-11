const scriptURL = '<SCRIPT URL>'
const form = document.forms['submit-to-google-sheet']

form.addEventListner('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})