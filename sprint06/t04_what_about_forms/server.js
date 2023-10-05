const http = require("http")
const fs = require("fs")

const host = "localhost"
const port = 8080

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" })
        fs.createReadStream(__dirname + "/index.html").pipe(res)
    } else if (req.url === "/script.js") {
        res.writeHead(200, { "Content-Type": "text/javascript" })
        fs.createReadStream(__dirname + "/script.js").pipe(res)
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" })
        res.end("404 Not Found")
    }
})

server.listen(port, host, () => {
    console.log(`Server listens http://${host}:${port}`)
})
