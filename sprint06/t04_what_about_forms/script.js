document.addEventListener('DOMContentLoaded', function () {
    const quizForm = document.getElementById("quiz-form")
    const resultText = document.getElementById("result")

    quizForm.addEventListener("submit", (e) => {
        e.preventDefault()

        const selectedRadioButton = document.querySelector(
            'input[name="q1"]:checked'
        );

        if (!selectedRadioButton) {
            resultText.textContent = "You must choose something!"
            return
        }

        const selectedValue = selectedRadioButton.value

        const correctAnswer = "pushed"

        if (selectedValue === correctAnswer) {
            resultText.innerText = "Оце трушно, источник: верь мне, брат"
        } else {
            resultText.innerText = "Shame on you! Go and watch Avengers!"
        }
    })
})