document.addEventListener('DOMContentLoaded', function () {
    const inputString = document.getElementById('inputString');
    const charsetsSelect = document.getElementById('charsets');
    const changeCharsetButton = document.getElementById('change-charset-button');
    const clearButton = document.getElementById('clear-button');
    const utf8Output = document.getElementById('utf8-output');
    const latin1Output = document.getElementById('latin1-output');
    const utf16Output = document.getElementById('utf16-output');
    const utf8String = document.getElementById('utf8-string');
    const latin1String = document.getElementById('latin1-string');
    const utf16String = document.getElementById('utf16-string');

    changeCharsetButton.addEventListener('click', () => {
        const selectedCharset = charsetsSelect.value;
        const inputText = inputString.value;

        if (inputText) {
            convertString(inputText, selectedCharset);
        }
    });

    clearButton.addEventListener('click', () => {
        inputString.value = '';
        utf8Output.style.display = 'none';
        latin1Output.style.display = 'none';
        utf16Output.style.display = 'none';
    });

    function convertString(inputText, charset) {
        const convertedString = new TextEncoder(charset).encode(inputText).toString();

        if (charset === 'utf8') {
            utf8String.textContent = convertedString;
            utf8Output.style.display = 'block';
        } else if (charset === 'latin1') {
            latin1String.textContent = convertedString;
            latin1Output.style.display = 'block';
        } else if (charset === 'utf16') {
            utf16String.textContent = convertedString;
            utf16Output.style.display = 'block';
        }
    }
});
