const xlsx = require('xlsx');
const AptiUser = require('../models/AptiUser');
const TechUser = require('../models/TechUser');
const PDUser = require('../models/PDUser');

const importUser = async (req, res, category) => {
  try {
    const filePath = req.file.path;
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const jsonData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

    let User;

    switch (category) {
      case 'apti':
        User = AptiUser;
        break;
      case 'tech':
        User = TechUser;
        break;
      case 'pd':
        User = PDUser;
        break;
      default:
        throw new Error('Invalid category');
    }

    await User.insertMany(jsonData);
    res.send({ status: 200, success: true, msg: `${category.toUpperCase()} data imported` });
  } catch (error) {
    console.error(error);
    res.status(400).send({ success: false, msg: error.message });
  }
};

const getUsers = async (req, res, category) => {
  try {
    let User;

    switch (category) {
      case 'apti':
        User = AptiUser;
        break;
      case 'tech':
        User = TechUser;
        break;
      case 'pd':
        User = PDUser;
        break;
      default:
        throw new Error('Invalid category');
    }

    const users = await User.find();
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(400).send({ success: false, msg: error.message });
  }
};

module.exports = {
  importUser,
  getUsers,
};
