document.addEventListener('DOMContentLoaded', function () {
    const passwordBlock = document.getElementById('password-block');
    const saltBlock = document.getElementById('salt-block');
    const saveButton = document.getElementById('save-button');
    const resultBlock = document.getElementById('result-block');
    const hashedPassword = document.getElementById('hashed-password');
    const guessInput = document.getElementById('guess');
    const checkButton = document.getElementById('check-button');
    const clearButton = document.getElementById('clear-button');

    fetch('/check-session')
        .then(response => response.json())
        .then(data => {
            if (data.saved) {
                // Data is saved, show hashed password block
                passwordBlock.style.display = 'none';
                saltBlock.style.display = 'none';
                saveButton.style.display = 'none';
                resultBlock.style.display = 'block';
                hashedPassword.textContent = data.hashedPassword;
            } else {
                // Data is not saved, show input fields and Save button
                passwordBlock.style.display = 'block';
                saltBlock.style.display = 'block';
                saveButton.style.display = 'block';
            }
        })
        .catch(error => console.error('Error:', error));

    saveButton.addEventListener('click', () => {
        const password = document.getElementById('password').value;
        const salt = document.getElementById('salt').value;
        const data = { password, salt };

        fetch('/save-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                if (data.saved) {
                    // Data saved successfully, hide input fields, show hashed password block
                    passwordBlock.style.display = 'none';
                    saltBlock.style.display = 'none';
                    saveButton.style.display = 'none';
                    resultBlock.style.display = 'block';
                    hashedPassword.textContent = data.hashedPassword;
                }
            })
            .catch(error => console.error('Error:', error));
    });

    checkButton.addEventListener('click', () => {
        const guess = guessInput.value;

        fetch(`/check-password?guess=${guess}`)
            .then(response => response.json())
            .then(data => {
                if (data.correct) {
                    // Correct password, show success message and clear session
                    alert('Hacked!');
                    clearSession();
                } else {
                    // Incorrect password, show error message
                    alert('Access denied!');
                }
            })
            .catch(error => console.error('Error:', error));
    });

    clearButton.addEventListener('click', () => {
        clearSession();
    });

    function clearSession() {
        fetch('/clear-session', {
            method: 'POST',
        })
            .then(() => {
                // Reload the page to start a new session
                location.reload();
            })
            .catch(error => console.error('Error:', error));
    }
});
