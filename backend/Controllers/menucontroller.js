const Menu =
require("../models/Menu");

const addMenuItem =
async (req, res) => {

  try {

    const menu =
    await Menu.create(
      req.body
    );

    res.status(201).json(
      menu
    );

  } catch (error) {

    res.status(500).json({
      message:
      error.message
    });

  }

};


const getMenuItems =
async (req, res) => {

  try {

    const menu =
    await Menu.find({
      restaurant:
      req.params.restaurantId
    });

    res.json(menu);

  } catch (error) {

    res.status(500).json({
      message:
      error.message
    });

  }

};


module.exports = {
  addMenuItem,
  getMenuItems
};