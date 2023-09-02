import mongoose from "mongoose";

const connect = async () => {
  try {
    const mongoUrl = 'mongodb+srv://bharatsonwane:bharatsonwane@cluster0.als7yee.mongodb.net/test?retryWrites=true&w=majority'
    await mongoose.connect(mongoUrl);
    // await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;
