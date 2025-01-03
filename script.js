const form = document.getElementById('form');
const firstname_input = document.getElementById('firstname-input');
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password-input');
const repeat_password_input = document.getElementById('repeat-password-input');
const error_message = document.getElementById('error-message');

/* E inneholder flere funksjoner som man kan bruke*/
form.addEventListener('submit', (e) => {
   // e.preventDefault() Prevent Submit
    
    let errors = []

    if (firstname_input){
        //Hvis vi har et fornavn, så erv vi  i sign up
        errors = getSignupFormErrors(firstname_input.value, email_input.value, password_input.value, repeat_password_input.value)
    }
    else {
        //Hvis vi ikke har et fornavn, så sjekker den om vi er i  login
        errors = GetLoginFormErrors(email_input.value, password_input.value,)
    }
    if (errors.length > 0){
        //Hvis det er noen feil så viser den det
        e.preventDefault()
        error_message.innerText = errors.join(". ") //Join kombinerer flere strenger sammen fra forskjellige variabler
    }
})

function getSignupFormErrors(firstname, email, password, repeatPassword){
    let errors = []
  
    if(firstname === '' || firstname == null){
      errors.push('Firstname is required')
      firstname_input.parentElement.classList.add('incorrect')
    }

    if(email === '' || email == null){
      errors.push('Email is required')
      email_input.parentElement.classList.add('incorrect')
    }

    if(password === '' || password == null){
      errors.push('Password is required')
      password_input.parentElement.classList.add('incorrect')
    }

    //Skjekker om passordet har 8+ tegn
    if(password.length < 8){
      errors.push('Password must have at least 8 characters')
      password_input.parentElement.classList.add('incorrect')
    }

    if(password !== repeatPassword){
        errors.push('Passwords do not match')
      password_input.parentElement.classList.add('incorrect')
      repeat_password_input.parentElement.classList.add('incorrect')
    }
  
  
    return errors;
  }

  function GetLoginFormErrors(email, password){
    let errors = []
  
    if(email === '' || email == null){
      errors.push('Email is required')
      email_input.parentElement.classList.add('incorrect')
    }

    if(password === '' || password == null){
      errors.push('Password is required')
      password_input.parentElement.classList.add('incorrect')
    }
  
    return errors;
  }

const allInputs =  [firstname_input, email_input, password_input, repeat_password_input].filter(input => input != null) //Gjør slik at man ikke får error meldinger i login siden. Den filtrerer aka skjekker hvis eks repeat password ikke eksiterer inne på login så filtrerer den det ut
//Fjerner den røde fargen hvis noen har fylt inn feltet som er skrevet
allInputs.forEach(input => {
    input.addEventListener('input', () => {
        if(input.parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect');
            error_message.innerText = ''
        }
    });
});