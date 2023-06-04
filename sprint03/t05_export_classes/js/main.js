import { HardWorker } from "./modules/hard-worker.js";

let worker = new HardWorker;

worker. name = 'Bruce';
console.log(worker.name);
// Bruce

worker.age = 50;
worker.salary = 1500;
console.log(worker.toObject());
// Object {age: 50, name: "Bruce", salary: 1500}

worker.name = 'Linda';
worker.age = 140;
console.log(worker.toObject());
// Object {age: 50, name: "Linda", salary: 1500}