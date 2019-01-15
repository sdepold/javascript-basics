const request = require("supertest");
const app = require("../src/app");

describe("App", () => {
  it("renders the app", () => request(app).get("/").expect(200));
});
