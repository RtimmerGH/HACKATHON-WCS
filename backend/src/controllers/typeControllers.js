const models = require("../models");

const browse = (req, res) => {
  models.category
    .findAllCategories()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.category
    .findCategory(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const category = req.body;
  // TODO validations (length, format...)
  category.id = parseInt(req.params.id, 10);
  if (req.body.admin < 2) {
    res.sendStatus(403);
  } else {
    models.category
      .update(category)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  }
};

const add = (req, res) => {
  // TODO validations (length, format...)
  if (req.body.admin < 2) {
    res.sendStatus(403);
  } else {
    models.category
      .insert(req.body)
      .then(([result]) => {
        res.location(`/categories/${result.insertId}`).sendStatus(201);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  }
};

const destroy = (req, res) => {
  if (req.body.admin < 2) {
    res.sendStatus(403);
  } else {
    models.category
      .delete(parseInt(req.params.id, 10))
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  }
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
