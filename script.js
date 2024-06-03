document.addEventListener('DOMContentLoaded', () => {
    const formContainer = document.getElementById("form-container");
    const successMessage = document.getElementById("success-message");
    const subscribeButton = document.getElementById("subscribe-button");
    const errorMessage = document.getElementById('error')
    const dismissButton = document.getElementById("dismiss-button");
    const emailInput = document.getElementById("email");
    const userEmail = document.getElementById("user-email");

    subscribeButton.addEventListener('click', (e) => {
        e.preventDefault()
        const email = emailInput.value

        if(validateEmail(email)) {
            formContainer.style.display = 'none'
            successMessage.style.display = 'block'
            userEmail.textContent = email
        } else {
            errorMessage.textContent = 'Valid email required'
            errorMessage.style.color = '#FF6155'
            emailInput.style.backgroundColor = 'rgba(255, 97, 85, 0.15)'
            emailInput.style.color = '#FF6155'
            emailInput.style.border = '1px solid #FF6155'
        }
    })

    dismissButton.addEventListener('click', () => {
        successMessage.style.display = 'none'
        formContainer.style.display = 'flex'
        emailInput.value = ''
        error.textContent = ''
        emailInput.style.backgroundColor = 'transparent'
        emailInput.style.color = 'lightgray'
        emailInput.style.border = '1px solid lightgray'
    })

    function validateEmail(email){
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return re.test(String(email).toLowerCase())
    }
})