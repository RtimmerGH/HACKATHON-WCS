const models = require("../models");

const browse = (req, res) => {
  let where = "";
  if (req.query.startDate != null) {
    where = ` where vehicle.id not in (select vehicle.id from vehicle inner join reservation on vehicle.id = reservation.idVehicle where '${req.query.startDate}' between reservation.startDate and reservation.endDate or '${req.query.endDate}' between reservation.startDate and reservation.endDate or reservation.startDate > '${req.query.startDate}' and reservation.endDate < '${req.query.endDate}') and agency.id = ${req.query.agencyId} and type.id = ${req.query.typeId};`;
  }
  models.vehicle
    .findAllVehicles(where)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.vehicle
    .findVehicle(req.params.id)
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
  const vehicle = req.body;

  // TODO validations (length, format...)

  vehicle.id = parseInt(req.params.id, 10);

  models.vehicle
    .update(vehicle)
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
};

const add = (req, res) => {
  const vehicle = req.body;

  // TODO validations (length, format...)

  models.vehicle
    .insert(vehicle)
    .then(([result]) => {
      res.location(`/vehicles/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.vehicle
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
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
