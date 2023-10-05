const fs = require('fs');
const path = require('path');

class File {
    constructor(name) {
        this.name = name;
        this.filePath = path.join(__dirname, 'tmp', name);
    }

    write(content) {
        if (!fs.existsSync(path.dirname(this.filePath))) {
            fs.mkdirSync(path.dirname(this.filePath));
        }
        fs.writeFileSync(this.filePath, content);
    }

    read() {
        if (fs.existsSync(this.filePath)) {
            return fs.readFileSync(this.filePath, 'utf-8');
        }
        return '';
    }

    delete() {
        if (fs.existsSync(this.filePath)) {
            fs.unlinkSync(this.filePath);
        }
    }
}

module.exports = File;
