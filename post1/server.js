const http = require('http')
const PORT = 8080

// Create a local server to receive data from
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({
        data: 'Hello World!'
    }))
})

server.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})