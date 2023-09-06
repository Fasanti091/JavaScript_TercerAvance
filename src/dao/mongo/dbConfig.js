import mongoose from "mongoose";

const URI ="mongodb+srv://andressuarez:123@cluster0.cdu1txg.mongodb.net/redbull?retryWrites=true&w=majority";
await mongoose.connect(URI, {
  serverSelectionTimeoutMS: 5000,
});
console.log("Base de datos conectada....");
