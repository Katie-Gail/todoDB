const express = require("express");
const routes = express.Router();
const pool = require("./connection");

routes.get("/todo-list", (req, res) => {
  pool.query("select * from todo").then((result) => {
    // console.log(result);
    res.json(result.rows);
  });
});

routes.post("/todo-list", (req, res) => {
  pool
    .query("insert into todo(task,completed) values($1::varchar,$2::boolean)", [
      req.body.task,
      req.body.completed,
    ])
    .then(() => {
      res.json(req.body);
    });
});

routes.put("/todo-list/:id", (req, res) => {});

routes.delete("/todo-list/:id", (req, res) => {
  pool.query("delete from todo where id=$1::int", [req.params.id]).then(() => {
    res.sendStatus(204);
  });
});

module.exports = { routes };
