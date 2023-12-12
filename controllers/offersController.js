import { readFile } from '../fake-db.js';
import * as fs from 'fs';
const path = "../fake.txt";

export function getAllOffers(req, res) {
    const data = readFile;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(data));
    res.end();
}

export function addOffer(req, res){
    let obj = {
        author: {
          avatar: req.body.avatar,
        },
        offer: {
          title: req.body.title,
          address: req.body.address,
          price: req.body.price,
          type: req.body.type,
          rooms: req.body.rooms,
          guests: req.body.guests,
          checkin: req.body.checkin,
          checkout: req.body.checkout,
          features: req.body.features,
          description: req.body.description,
          photos: req.body.photos,
        }
    }
    let txt_file = readFile;
    txt_file.push(obj);
    fs.writeFileSync(path, JSON.stringify(txt_file), "utf8");
    const data = readFile;
    res.write(JSON.stringify(data));
    res.end();
}