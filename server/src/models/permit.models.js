import mongoose, { Schema } from "mongoose";

const permitSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    middleName: {
      type: String,
      lowercase: true,
    },
    surname: {
      type: String,
      required: true
    },
    company: {
      type: String,
    },
    postHeld: {
      type: String,
    },
    passwortNumber: {
      type: String,
      unique: true
    },
    birthDate: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    }, 
    validityStart: {
      type: Date,
      required: true,
    },
    validityEnd: {
      type: Date,
      required: true,
    },
    profileImage: {
      url: {
        type: String,
        required: true,
      },
    },
    permitNumber: {
      type: String,
      required: true,
      unique: true
    }
  },
  { timestamps: true }
);

export const Permit = mongoose.model("Permit", permitSchema);