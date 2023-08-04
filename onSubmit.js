const contacts = [];

export const onSubmit = () => {
  const form = document.querySelector('form');
  const nameInput = document.getElementById('name');
  const mobileInput = document.getElementById('mobile');
  const emailInput = document.getElementById('email');
  const errorDiv = document.getElementById('error');
  const errorUl = errorDiv.appendChild(document.createElement('ul'));
  let errorMessages = [];

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = nameInput.value.trim();
    const mobile = mobileInput.value.trim();
    const email = emailInput.value.trim();
    errorMessages = [];
    console.log(errorMessages)

    // Validation: Check if the field is required
    if (name === '') {
      showError('Name is required.');
    }

    if (mobile === '') {
      showError('Mobile is required.');
    }

    if (email === '') {
      showError('Email is required.');
    }

    // Validation: Check if the name contains only alphabets and space
    const nameRegex = /^[A-Za-z ]+$/;
    if (name && !nameRegex.test(name)) {
      showError('Name should contain only alphabets and space.');
    }

    // Validation: Check if the mobile contains only numbers
    const mobileRegex = /^[0-9]+$/;
    if (mobile && !mobileRegex.test(mobile)) {
      showError('Mobile should contain only numbers.');
    }

    // Validation: Check if the name length is less than or equal to 20 characters
    if (name.length > 20) {
      showError('Name should be less than or equal to 20 characters in length.');
    }

    // Validation: Check if the mobile length is equal to 10 characters
    if (mobile.length != 10) {
      showError('Mobile should be equal to 10 characters in length.');
    }

    // Validation: Check if the email input matches the email pattern
    const emailPattern = /^[a-zA-Z\d.]{2,10}@[a-zA-Z]{2,20}\.[a-zA-Z]{2,10}$/;
    if (!emailPattern.test(email)) {
      showError('Invalid Input! Please enter a valid email address.');
    }

    if (errorMessages.length == 0) {
      // Add to contacts to table
      addContact({name, mobile, email});
      
      // Clear forms
      form.reset();

      // If all validations pass, clear any previous error and proceed
      errorDiv.style.display = 'none';
    }

    return;
  });

  function showError(errorMessage) {
    if (!errorMessages.includes(errorMessage)) {
      errorMessages.push(errorMessage);

      errorUl.innerHTML = errorMessages.map(message => `
          <li>${message}</li>`).join('');
    }

    errorDiv.style.display = 'block';

    return;
  }

  function addContact(items) {
    const element = document.querySelector('tbody');
    contacts.push(items);
  
    element.innerHTML = contacts.map(contact => `
      <tr>
        <td>${contact.name}</td>
        <td>${contact.mobile}</td>
        <td>${contact.email}</td>
      </tr>
      `).join('')
  }
}


