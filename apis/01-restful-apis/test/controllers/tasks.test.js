const { expect } = require("chai");
const request = require("supertest");
const app = require("../../src/app")({
  storage: "database.test.sqlite"
});
const { TaskList, Task } = require("../../src/models");

describe("TaskController", () => {
  let taskList;

  beforeEach(async () => {
    await global.sequelize.sync({ force: true });
    taskList = await TaskList.create({ title: "parent" });
  });

  describe("GET /task-lists/:taskId/tasks", () => {
    it("should return all tasks of that list", async () => {
      await request(app)
        .get(`/task-lists/${taskList.id}/tasks`)
        .expect(200)
        .expect([]);

      await taskList.addTask(await Task.create({ title: "some task" }));

      await request(app)
        .get(`/task-lists/${taskList.id}/tasks`)
        .expect(200)
        .then(res => {
          expect(res.body[0].title).to.equal("some task");
        });
    });
  });

  describe("POST /task-lists/:taskId/tasks", () => {
    it("returns a task", async () => {
      await request(app)
        .post(`/task-lists/${taskList.id}/tasks`)
        .send({ title: "some other task" })
        .expect(201)
        .then(res => {
          expect(res.body.title).to.equal("some other task");
        });

        const tasks = await Task.findAll();

        expect(tasks[0].title).to.equal("some other task");
        expect(tasks[0].taskListId).to.equal(taskList.id);
    });
  });
});
