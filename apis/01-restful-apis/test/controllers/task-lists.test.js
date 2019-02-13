const { expect } = require("chai");
const request = require("supertest");
const app = require("../../src/app")({
  storage: "database.test.sqlite"
});
const { TaskList } = require("../../src/models");

describe("TaskListsController", () => {
  beforeEach(async () => {
      await global.sequelize.sync({ force: true });
  });

  describe("GET /task-lists", () => {
    it("returns an empty array initially", async () => {
      await request(app).get("/task-lists").expect(200).then(res => {
        expect(res.body).to.deep.equal([]);
      });
    });

    it("returns the registered task lists", async () => {
      await TaskList.create({ title: "some list" });
      await request(app).get("/task-lists").expect(200).then(res => {
        expect(res.body).to.have.lengthOf(1);
        expect(res.body[0]).to.have.keys([
          "title",
          "id",
          "updatedAt",
          "createdAt"
        ]);
        expect(res.body[0].title).to.equal("some list");
      });
    });
  });

  describe("POST /task-lists", () => {
    it("creates an object", async () => {
      await request(app)
        .post("/task-lists")
        .send({ title: "something" })
        .expect(201)
        .then(res => {
          expect(res.body).to.have.keys([
            "title",
            "id",
            "updatedAt",
            "createdAt"
          ]);
          expect(res.body.title).to.equal("something");
        });

      const taskLists = await TaskList.findAll();

      expect(taskLists).to.have.lengthOf(1);
      expect(taskLists[0].title).to.equal("something");
    });
  });
});
