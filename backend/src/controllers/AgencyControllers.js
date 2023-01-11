const models = require("../models");

const browse = (req, res) => {
  models.agency
    .findAllAgencies()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.agency
    .findAgency(req.params.id)
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
  const agency = req.body;
  // TODO validations (length, format...)
  agency.id = parseInt(req.params.id, 10);
  if (agency.id !== parseInt(req.payload.sub, 10) && agency.admin !== 1) {
    res.sendStatus(403);
  } else {
    models.agency
      .update(agency)
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
  const agency = req.body;

  // TODO validations (length, format...)

  models.agency
    .insert(agency)
    .then(([result]) => {
      res.location(`/agencys/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  const user = req.body;
  user.id = parseInt(req.params.id, 10);
  if (user.admin !== 3) {
    res.sendStatus(403);
  } else {
    models.agency
      .delete(req.params.id)
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
