const request = require("supertest");
const app = require("../app");

describe("App", () => {
  test("it renders the app", () => request(app).get("/").expect(200));
});
