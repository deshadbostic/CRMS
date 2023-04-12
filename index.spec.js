const { DESCRIBE } = require("sequelize/types/query-types");
const {app} = require("./server");
const request = require("supertest");


  
  test("index route works", done => {
    request(app)
      .get("/")
      .expect("Content-Type", /html/)
      .expect(200, done);
  }); 
  
  test("customer route works", done => {
    request(app)
      .get("/customer")
      .expect("Content-Type", /html/)
      .expect(200, done);
  }); 
  test("rentals route works", done => {
    request(app)
      .get("/rental")
      .expect("Content-Type", /html/)
      .expect(200, done);
  }); 
  test("vehicle route works", done => {
    request(app)
      .get("/vehicle")
      .expect("Content-Type", /html/)
      .expect(200, done);
  }); 
  