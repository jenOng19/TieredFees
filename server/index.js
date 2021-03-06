const path = require('path');
const jsonServer = require('json-server');

const dbPath = path.resolve(__dirname, '../data/db.json');
const server = jsonServer.create();
const middleware = jsonServer.defaults();
const endpoints = jsonServer.router(dbPath);

server.use(middleware);
server.use('/api', endpoints);
server.listen(3001, () => {
    console.log('JSON Server listening on port 3001\n');
});