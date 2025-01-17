import mongoose from "mongoose";

const careHomeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    residents: [{ type: mongoose.Schema.Types.ObjectId, ref: "Resident" }],
});
const CareHome = mongoose.model("CareHome", careHomeSchema);
export default CareHome;
