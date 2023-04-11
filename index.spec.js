const {app} = require("./server");
const request = require("supertest");


  
  test("index route works", done => {
    request(app)
      .get("/")
      .expect("Content-Type", /html/)
      .expect(200, done);
  }); 
  