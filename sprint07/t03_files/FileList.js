const fs = require('fs');
const path = require('path');

class FileList {
    constructor() {
        this.directoryPath = path.join(__dirname, 'tmp');
    }

    getList() {
        if (fs.existsSync(this.directoryPath)) {
            return fs.readdirSync(this.directoryPath);
        }
        return [];
    }

    hasFiles() {
        return this.getList().length > 0;
    }

    addFile(name) {
        if (!fs.existsSync(this.directoryPath)) {
            fs.mkdirSync(this.directoryPath);
        }
    }

    removeFile(name) {
        const filePath = path.join(this.directoryPath, name);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
    }

    getHTMLList() {
        const files = this.getList();
        return '<ul>' + files.map(file => `<li><a href="/select-file?file=${file}">${file}</a></li>`).join('') + '</ul>';
    }
}

module.exports = FileList;
