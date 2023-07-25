import mongoose from "mongoose";

export const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@flipkart-clone-shard-00-00.o9jgg.mongodb.net:27017,flipkart-clone-shard-00-01.o9jgg.mongodb.net:27017,flipkart-clone-shard-00-02.o9jgg.mongodb.net:27017/?ssl=true&replicaSet=atlas-cd9rie-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("error while connecting database", error.message);
  }
};
export default Connection;
