import mongoose   from "mongoose";

const residentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    careHomeId: { type: mongoose.Schema.Types.ObjectId, ref: "CareHome" },
    roomNumber: { type: Number, required: true },
    dateOfBirth: { type: Date, required: true },   

});
const Resident = mongoose.model("Resident", residentSchema);
export default Resident;
