let firstName = prompt('Enter your first name');
let lastName = prompt('Enter your last name');
const firstNameRegex = /^[a-zA-Z][a-z]*(-[a-zA-Z]+)$/;
const lastNameRegex = /^[A-Za-z][a-zA-Z]$/;

if (firstNameRegex.test(firstName)
    || lastNameRegex.test(lastName)
    || firstName.match(/^[a-zA-Z]*$/)
    || lastName.match(/^[A-Za-z]*$/)) {
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

    alert(`Your name is ${firstName} ${lastName}`)
    console.log(`Your name is ${firstName} ${lastName}`)
} else {
    alert('Wrong input!');
    console.log('Wrong input!');
}
