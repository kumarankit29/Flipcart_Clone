import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true, trim: true, min: 5, max: 25 },
  lastname: { type: String, required: true, trim: true, min: 5, max: 25 },
  username: {
    type: String,
    required: true,
    unique: true,
    index: true,
    lowercase: true,
    trim: true,
    min: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const UserList = mongoose.model("user", userSchema);
export default UserList;
