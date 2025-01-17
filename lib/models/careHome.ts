import mongoose from "mongoose";

const careHomeSchema = new mongoose.Schema({ 
    name: { type: String, required: true },
    mangerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
})

const CareHome = mongoose.model("CareHome", careHomeSchema);
export default CareHome;