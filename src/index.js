const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const Attende = require("./models/Attende");
const Wedding = require("./models/Wedding");
const Media = require("./models/Media");

const {
  getWeddingById,
  getAttendesByWeddingId,
  getMediaByWeddingId,
  weddingRouter,
} = require("./routes/weddingRouter");
const ifEquality = require("./views/helpers/ifEquality");
const expressHbs = require("express-handlebars");
const path = require("path");

const app = express();
console.log(__dirname)
app.use("/static", express.static(path.join(__dirname, "./public")));
// Creating HandleBars Engine
const hbs = expressHbs.create({
  extname: ".hbs",
  layoutsDir: path.join(__dirname, "./views/layout"),
  partialsDir: path.join(__dirname, "./views/partials"),
  helpers: {
    ifEquality,
  },
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "./views"));

app.use(bodyParser.json());
app.use("/api/wedding", weddingRouter);
// app.get("/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     // const weddingData = await getWeddingById(id);
//     // const mediaData = await getMediaByWeddingId(id);
//     // const attendeData = await getAttendesByWeddingId(id);
//     res.status(200).render("hero.hbs", {
//       layout: "hero",
//       wedding: weddingData,
//       media: mediaData,
//       attende: attendeData,
//       method: "GET",
//     });
//   } catch (e) {
//     res.status(404).send("");
//   }
// });
app.get("/about", (request, response) => {
  response.status(200).render("home.hbs", {
    message: "About this Page ",
  });
});

app.get("*", (request, response) => {
  response.status(200).send("404, Page Not Found");
});

app.listen(8087, () => {
  console.log("Server Up");
});
