document.getElementById('validate').addEventListener('click', () => {
    
    const FirstName = document.getElementById('FirstName').value;
    const message1 = document.getElementById('message1');

    const LastName = document.getElementById('LastName').value;
    const message2 = document.getElementById('message2');

    const email = document.getElementById('email').value;
    const message3 = document.getElementById('message3');

    const password = document.getElementById('password').value;
    const message4 = document.getElementById('message4');

    const form = document.getElementById('form');
    const inputElement1 = document.getElementById('FirstName');
    const inputElement2 = document.getElementById('LastName');
    const inputElement3 = document.getElementById('email');
    const inputElement4 = document.getElementById('password');

    const errorIcon1 =document.querySelector('.error-icon1');
    const errorIcon2 =document.querySelector('.error-icon2');
    const errorIcon3 =document.querySelector('.error-icon3');
    const errorIcon4 =document.querySelector('.error-icon4');

    form.addEventListener('submit', e => {
        e.preventDefault();
    
        validateInputs();
    });


    
    const regex = /^[a-zA-Z].{1,}$/;
    const emregex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;

    if (!regex.test(FirstName)) {
      message1.textContent = 'First Name cannot be empty!';
      message1.style.color = 'rgba(255, 121, 121, 1)';
      message1.style.margin = '0'
      inputElement1.style.border = '2px solid rgba(255, 121, 121, 1)';
      inputElement1.placeholder = ''
      errorIcon1.style.display = 'block';
      
    } 
    if (!regex.test(LastName)) {
      message2.textContent = 'Last Name cannot be empty!';
      message2.style.color = 'rgba(255, 121, 121, 1)';
      message2.style.margin = '0'
      inputElement2.style.border = '2px solid rgba(255, 121, 121, 1)';
      inputElement2.placeholder = ''
      errorIcon2.style.display = 'block';
    } 
    if (!emregex.test(email)) {
      message3.textContent = 'Looks like this is not an email!';
      message3.style.color = 'rgba(255, 121, 121, 1)';
      message3.style.margin = '0'
      inputElement3.style.border = '2px solid rgba(255, 121, 121, 1)';
      inputElement3.placeholder = 'email@example/com'
      errorIcon3.style.display = 'block';

    } 
    if (!regex.test(password)) {
      message4.textContent = 'password cannot be empty!';
      message4.style.color = 'rgba(255, 121, 121, 1)';
      message4.style.margin = '0'
      inputElement4.style.border = '2px solid rgba(255, 121, 121, 1)';
      inputElement4.placeholder = ''
      errorIcon4.style.display = 'block';
    } 



  });