
const {selectAllData} = require("../models/user.model");
const { dbQuery } = require("../utils/util");

const getAllData = async (req, res) => {
  try {
    const result = await dbQuery(selectAllData());
    res.send({ status: true, result });
  } catch (error) {
    res.send({ status: false, msg: error.message });
  }
};

module.exports = { getAllData };