document.querySelectorAll('.services .service-items .item .btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.item-inner').forEach(item => {
            item.style.boxShadow = "";
        });
    
        const project = this.closest('.item').querySelector('.item-inner');
        project.style.boxShadow = "0 0 20px 10px rgba(0, 0, 0, 0.8)";

        const popupBox = document.querySelector('.popup-box');
        const popupHeader = popupBox.querySelector('.popup-header h3');
        const popupBody = popupBox.querySelector('.popup-body');
        
        
        
        popupHeader.textContent = project.querySelector('h3').textContent;
        popupBody.innerHTML = project.querySelector('.read-more-cont').innerHTML;

      
        popupBox.classList.add('open');
    });
});

document.querySelector('.popup-close-icon').addEventListener('click', function() {
    document.querySelector('.popup-box').classList.remove('open');
});
document.querySelector('.popup-footer .btn').addEventListener('click', function() {
    document.querySelector('.popup-box').classList.remove('open');
});


document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

   
    const nameField = document.getElementById('name');
    const nameError = nameField.closest('.field').querySelector('.error-txt');
    if (nameField.value.trim() === '') {
        nameField.closest('.field').classList.add('error');
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameField.closest('.field').classList.remove('error');
        nameError.style.display = 'none';
    }

 
const emailField = document.getElementById('email');
const emailError = emailField.closest('.field').querySelector('.error-txt');
const emailValue = emailField.value.trim();

const emailPattern = /^[^\s@]+@(gmail\.com|yahoo\.com)$/;


if (emailValue === '' || !emailPattern.test(emailValue)) {
    emailField.closest('.field').classList.add('error');
    emailError.textContent = '*Please enter a valid email address (ex: name@gmail.com or name@yahoo.com)';
    emailError.style.display = 'block'; 
    isValid = false;
} else {
    emailField.closest('.field').classList.remove('error');
    emailError.style.display = 'none'; 
}



    const messageField = document.getElementById('message');
    const messageError = messageField.closest('.field').querySelector('.error-txt');
    if (messageField.value.trim() === '') {
        messageField.closest('.field').classList.add('error');
        messageError.style.display = 'block';
        isValid = false;
    } else {
        messageField.closest('.field').classList.remove('error');
        messageError.style.display = 'none';
    }

    if (isValid) {
    
        sendEmail(nameField.value, emailField.value, messageField.value)
       
    }
 

let popup = document.getElementById("popup");

function openPopup() {
    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup");
}

function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let isValid = true;

    
    document.querySelectorAll(".error-txt").forEach(el => el.style.display = 'none');

    if (name === "") {
        document.querySelector("#name ~ .error-txt").style.display = 'block';
        isValid = false;
    }

    if (email === "") {
        document.querySelector("#email ~ .error-txt").style.display = 'block';
        isValid = false;
    } else if (!validateEmail(email)) {
        document.querySelector("#email ~ .error-txt").textContent = '*Invalid email format';
        document.querySelector("#email ~ .error-txt").style.display = 'block';
        isValid = false;
    }

    if (message === "") {
        document.querySelector("#message ~ .error-txt").style.display = 'block';
        isValid = false;
    }

    return isValid;
}

function validateEmail(email) {
   
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

function handleFormSubmission(event) {
    event.preventDefault(); 

    if (validateForm()) {
       
        openPopup();
  
        document.querySelector("form").reset();
    }
}

document.querySelector("form").addEventListener("submit", handleFormSubmission);

document.querySelector(".popup-close-btn").addEventListener("click", closePopup);
document.querySelector(".popup-close-icon").addEventListener("click", closePopup);
document.querySelector(".btn-close-popup").addEventListener("click", closePopup);

});




  