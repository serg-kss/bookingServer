import { createFile } from './fake-db.js';
import { getAllOffers, addOffer } from './controllers/offersController.js'
import * as http from 'http';


const hostname = '127.0.0.1';
const port = 4000;
const routes = {
    getOffers: '/api/offers',
    addOffer: '/api/offer'
};

const server = http.createServer((req, res) => {
  createFile;
  if (req.url === routes.getOffers && req.method === 'GET') {
    getAllOffers(req, res);
  } else if (req.url === routes.addOffer && req.method === 'POST'){
    addOffer(req, res);
  }
  else {
    console.log('error');
  }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});