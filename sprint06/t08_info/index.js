const http = require("http");

const host = "localhost";
const port = 8080;

const server = http.createServer((req, res) => {
    const remoteAddress = req.connection.remoteAddress;
    const host = req.headers.host;
    const protocol = req.connection.encrypted ? "https" : "http";
    const method = req.method;
    const header = req.headers["user-agent"];
    const url = req.url.split("?");
    const query = url.length > 1 ? url[1] : "";
    const serverAddress = server.address();

    console.log("\nName of the executed script:", __filename);
    console.log("Arguments passed to the script:", process.argv.slice(2));
    console.log("IP address of the server:", serverAddress.address);
    console.log("Name of host that invokes the current script:", host);
    console.log("Name and version of the information protocol:", `${protocol}/${req.httpVersion}`);
    console.log("Query method:", method);
    console.log("User-Agent information:", header);
    console.log("IP address of the client:", remoteAddress);
    console.log("List of parameters passed by URL:", query);
});

server.listen(port, host, () => {
    console.log(`Server is listening on http://${host}:${port}`);
});
