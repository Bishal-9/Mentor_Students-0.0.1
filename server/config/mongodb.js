const mongoose = require("mongoose")

mongoose
  .connect(process.env.MONGODB_URI, {
    ssl: true,
    sslValidate: true,
    noDelay: true,
  })
  .then(() => {
    console.log("MongoDB Connected!")
  })
  .catch((error) => {
    console.error("MongoDB connection error: ", error.message)
  })

mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to database.")
})

mongoose.connection.on("error", (error) => {
  console.error("Mongoose connection error: ", error.message0)
})

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose connection is disconnected.")
})

process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log(
      "Mongoose connection is disconnected due to application termination."
    )
    process.exit(0)
  })
})
