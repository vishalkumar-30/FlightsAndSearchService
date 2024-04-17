const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
const ApiRoutes = require("./routes/index");

// const { Airport, City, Airplane } = require("./models/index");
// const city = require("./models/city");
const db = require("./models/index");
// const sequelize = require("sequelize");

const setupAndStartServer = async () => {
  //create the express object
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);

  app.listen(PORT, async () => {
    console.log(`Server started at ${PORT}`);
    if (process.env.SYNC_DB) {
      db.sequelize.sync({ alter: true });
    }
    // await Airplane.create({
    //   modelNumber: 'Bombardier CRJ'
    // })

    // const city = await City.findOne({
    //   where: {
    //     id: 2,
    //   },
    // });
    // const airports = await city.getAirports();
    // const newAirport = await Airport.findOne({
    //   where: { id: 5 },
    // });
    // await city.addAirport(newAirport);
    // const newAirport = await Airport.create({
    //   name: "Jindal Vijaynagar Airport",
    //   cityId: 7,
    // });
  });
};

setupAndStartServer();
