const models = require("../models");

const browse = (req, res) => {
  let where = "";
  if (req.query.user != null) {
    where = ` where idUser = '${req.query.user}'`;
  }
  if (
    parseInt(req.query.user, 10) !== parseInt(req.payload.sub, 10) &&
    req.body.admin < 2
  ) {
    res.sendStatus(403);
  } else {
    models.reservation
      .findAllReservations(where)
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  }
};

const read = (req, res) => {
  models.reservation
    .findReservation(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else if (
        parseInt(rows[0].idUser, 10) !== parseInt(req.payload.sub, 10) &&
        req.body.admin < 2
      ) {
        res.sendStatus(403);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const reservation = req.body;

  // TODO validations (length, format...)

  models.reservation
    .insert(reservation)
    .then(([result]) => {
      res.location(`/reservations/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  if (req.body.idUserInRes !== req.payload.sub && req.body.admin < 2) {
    res.sendStatus(403);
  } else {
    models.reservation
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
  add,
  destroy,
};
