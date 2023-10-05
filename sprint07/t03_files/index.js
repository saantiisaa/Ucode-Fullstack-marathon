import path from "path";

document.addEventListener('DOMContentLoaded', function () {
    const fileForm = document.getElementById('file-form');
    const fileNameInput = document.getElementById('file-name');
    const fileContentInput = document.getElementById('file-content');
    const filesList = document.getElementById('files');
    const currentFileName = document.getElementById('current-file-name');
    const currentFileContent = document.getElementById('current-file-content');
    const deleteFileButton = document.getElementById('delete-file');

    const fileList = new FileList();

    function displayFiles() {
        filesList.innerHTML = '';
        const files = fileList.getList();
        files.forEach(file => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = `/select-file?file=${file}`;
            link.textContent = file;
            listItem.appendChild(link);
            filesList.appendChild(listItem);
        });
    }

    fileForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = fileNameInput.value;
        const content = fileContentInput.value;
        const file = new File(name);
        file.write(content);
        fileList.addFile(name);
        displayFiles();
        fileForm.reset();
    });

    filesList.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            const fileName = e.target.textContent;
            const file = new File(fileName);
            const content = file.read();
            currentFileName.textContent = fileName;
            currentFileContent.textContent = content;
            deleteFileButton.disabled = false;
        }
    });

    deleteFileButton.addEventListener('click', function () {
        const fileName = currentFileName.textContent;
        const file = new File(fileName);
        file.delete();
        fileList.removeFile(fileName);
        displayFiles();
        currentFileName.textContent = '';
        currentFileContent.textContent = '';
        deleteFileButton.disabled = true;
    });

    displayFiles();
});
