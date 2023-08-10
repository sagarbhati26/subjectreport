const express = require('express');
const user = express();
const userController = require('../controller/userController');
const multer = require('multer');
const path = require('path');

user.use(express.static(path.resolve(__dirname, 'public')));

const storageApti = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, 'aptiNew');
  },
});

const storageTech = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, 'NewTech');
  },
});

const storagePD = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, 'pdpNEWdata');
  },
});

const uploadsApti = multer({ storage: storageApti });
const uploadsTech = multer({ storage: storageTech });
const uploadsPD = multer({ storage: storagePD });

user.post('/importApti', uploadsApti.single('file'), (req, res) => userController.importUser(req, res, 'apti'));
user.post('/importTech', uploadsTech.single('file'), (req, res) => userController.importUser(req, res, 'tech'));
user.post('/importPD', uploadsPD.single('file'), (req, res) => userController.importUser(req, res, 'pd'));

user.get('/getAptiUsers', (req, res) => userController.getUsers(req, res, 'apti'));
user.get('/getTechUsers', (req, res) => userController.getUsers(req, res, 'tech'));
user.get('/getPDUsers', (req, res) => userController.getUsers(req, res, 'pd'));

module.exports = user;
