import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { ApiError } from "./ApiError.js";

dotenv.config({
  path: "./.env",
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath, folder = "orginization") => {
  try {
    if (!localFilePath) {
      console.log("No file path provided for Cloudinary upload");
      return null;
    }
    //upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
      folder: folder,
    });
    // file has been uploaded successfull
    console.log("File uploaded to Cloudinary successfully");
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    console.log("Cloudinary upload failed", { error: error.message });
    fs.unlinkSync(localFilePath);
    throw new ApiError(error);
  }
};

export { uploadOnCloudinary};