import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({
    patientName : {
        patient : mongoose.Schema.Types.ObjectId,
        ref : 'Patient'
    }

} , {timestamps : true});

export const MedicalRecord = mongoose.model(
    'MedicalRecord',
    medicalRecordSchema
);