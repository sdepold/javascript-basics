'use strict';

const models = require('../../models');

module.exports = function (router) {
    router.get('/', async (req, res) => {
        const tasks = await models(req).Task.findAll();

        res.render('tasks', {tasks});
    });

    router.post('/', async (req, res) => {
        await models(req).Task.create(req.body, { fields: ["title", "description"] });
        res.redirect("/tasks");
    });

    router.delete("/:id", async (req, res) => {
        await models(req).Task.destroy({ where: { id: req.params.id } });

        res.sendStatus(204);
      });

      router.patch("/:id", async (req, res) => {
        await models(req).Task.update(req.body, {
          where: { id: req.params.id },
          fields: ["status"]
        });
        res.sendStatus(204);
      });
};
