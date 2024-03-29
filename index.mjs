//based on: https://github.com/mongodb-developer/mongodb-express-rest-api-example/
//reference (ECMAScript modules): https://nodejs.org/api/esm.html#modules-ecmascript-modules
import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import "express-async-errors";
import cakery from "./routes/cakery.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

// Load the /contacts routes
app.use("/api/cakery/", cakery);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.")
})

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}, try a GET Request in your browser http://localhost:${PORT}/api/cakery`);
});
