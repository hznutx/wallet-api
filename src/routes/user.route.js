
const express = require("express");
const {
  getAllData,
  
} = require("../controllers/user.control");
const router = express();

// router.post()
//router.post("", addNewData);
router.get("", getAllData);
//router.patch("", editData);
//router.delete("", removeData);

module.exports = router;