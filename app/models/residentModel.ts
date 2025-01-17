import mongoose from 'mongoose';
import validator from 'validator';
const residentSchema = new mongoose.Schema( {       
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        minlength: [3, 'Name must be at least 3 characters long'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email',
        },
    },
    phone: {
        type: String,
        required: [true, 'Phone is required'],
        unique: true,
        validate: {
            validator: validator.isMobilePhone,
            message: '{VALUE} is not a valid phone number',
        },
    },
    address: {
        type: String,
        required: [true, 'Address is required'],
        trim: true,
    },
    managerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Manager',
        required: [true, 'Manager ID is required'],
    },
},
{
    timestamps: true, // Automatically adds createdAt and updatedAt fields
})

const Resident = mongoose.models.Resident || mongoose.model('Resident', residentSchema);

export default Resident;
