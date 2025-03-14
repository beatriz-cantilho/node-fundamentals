import http from 'node:http'

const users = [];

const serve = http.createServer((request, response) => {
    if(request.method === 'GET' && request.url === '/users') {
        return response.writeHead(200, {'Content-type': 'application/json'}).end(JSON.stringify(users))
    }

    if(request.method === 'POST' && request.url === '/users') {
        users.push({name: 'Bia', email: 'example@email.com'})
        return response.writeHead(201).end(JSON.stringify(users))
    }

    return response.writeHead(404).end()
})

serve.listen(3333)
