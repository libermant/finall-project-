const mongoose = require("mongoose");
const express = require("express");
const appsModel = require("../models/appsModel");
const router = new express.Router();

router.post("/app", async (req, res) => {
  try {
    const { options, age, rating } = req.body;
    const app = await appsModel
      .find({ category: options })
      .where("min_age")
      .lte(age)
      .where("rating")
      .gte(rating);
    const newApps = app.sort(() => (Math.random() > 0.5 ? 1 : -1)).slice(0, 3);
    res.send(newApps);
  } catch (error) {
    res.send(error);
  }
});
module.exports = router;
