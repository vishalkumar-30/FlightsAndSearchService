const { CityService } = require("../services/index");

const cityServices = new CityService();
/**
 * POST
 * data -> req.body
 */
const create = async (req, res) => {
  try {
    const city = await cityServices.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Succefully created a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a city",
      err: error,
    });
  }
};
// DELETE. -> /city/:id
const destroy = async (req, res) => {
  try {
    const response = await cityServices.deleteCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Succefully deleted a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete the city",
      err: error,
    });
  }
};

// GET -> /city/:id
const get = async (req, res) => {
  try {
    const response = await cityServices.getCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Succefully fetched a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get a city",
      err: error,
    });
  }
};

// Patch -> /city/:id -> req.body
const update = async (req, res) => {
  try {
    const response = await cityServices.updateCity(req.params.id, req.body);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Succefully fetched a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get a city",
      err: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  get,
  update,
};
