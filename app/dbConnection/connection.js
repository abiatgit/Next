import mongoose from "mongoose";

const dbPass = "Ywru4fQ07kubUlzs"; 

export default async function dbConnection() {
  try {
    const dbConnection = await mongoose.connect(
      `mongodb+srv://infoabigeorge:${dbPass}@namastenode.koyix.mongodb.net/?retryWrites=true&w=majority&appName=NamasteNode`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB connected successfully.");
    return dbConnection;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit the application if the connection fails
  }
}
