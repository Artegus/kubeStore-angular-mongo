require('../models/cubes');

const mongoose = require('mongoose');
const cubes = mongoose.model('Cubes');

async function getAll(req, res) {
  try {
    const cubesRead = await cubes.find({});
    return res.send(cubesRead && cubesRead.length ? cubesRead : []);
  } catch (error) {
    return res.status(400).send({
      status: 'failure'
    });
  }
}
async function getOne(req, res) {
  try {
    const cubeRead = await cubes.findOne({ '_id': req.params.id });

    return res.send(cubeRead ? cubeRead : {});
  } catch (error) {
    return res.status(400).send({
      status: 'failure'
    });
  }
}
async function addNew(req, res) {
  try {
    const cube = req.body;
    if (cube._id == 0) {
      delete cube._id;
    }
    await new cubes(cube).save();
    return res.send({
      status: 'success'
    });
  } catch (error) {
    return res.status(400).send({
      status: 'failure' + error
    });
  }
}

async function modify(req, res) {
  try {
    const cube = req.body;
    await cubes.updateOne({ '_id': cube._id }, cube);
    return res.send({
      status: 'success'
    });
  } catch (error) {
    return res.status(400).send({
      status: 'failure'
    });
  }
}

async function removeOne(req, res) {
  try {
    await cubes.deleteOne({ '_id': req.params.id });
    return res.send({
      status: 'success'
    });
  } catch (error) {
    return res.status(400).send({
      status: 'failure'
    });
  }
}

module.exports = { getAll, getOne, addNew, modify, removeOne };
