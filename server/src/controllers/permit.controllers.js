import { ApiError } from "../utils/ApiError.js";
import { Permit } from "../models/permit.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const registerPermit = async (req, res, next) => {
  try {
    const { firstName, middleName, surname, company, postHeld, passwortNumber, birthDate, gender, validityStart, validityEnd, permitNumber } = req.body;

    if (
      [firstName, surname, company, postHeld, passwortNumber, birthDate, gender, validityStart, validityEnd, permitNumber]
        .some((field) => !field || field.toString().trim() === "")
    ) {
      throw new ApiError(400, "All required fields are required");
    }

   const profileImagepath = req.files?.profileImage?.[0]?.path;

   if (!profileImagepath) {
      throw new ApiError(400, "cover image file is required");
    }

    const profileImage = await uploadOnCloudinary(profileImagepath);

    // create user
    const permit = await Permit.create({
      firstName,
      middleName: middleName?.trim() ? middleName.trim() : null,
      surname, 
      company, 
      postHeld, 
      passwortNumber, 
      birthDate, 
      gender, 
      validityStart, 
      validityEnd, 
      permitNumber,
      profileImage: {
        url: profileImage.url,
        public_id: profileImage.public_id,
      }

    });

    return res
      .status(201)
      .json({ permit, message: "permit created Successfully " });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

const searchPermit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const permit = await Permit.findById(id);

    if (!permit) {
      throw new ApiError(404, "Permit not found");
    }
    return res
      .status(200)
      .json({ permit, message: "permit searched Successfully " });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};


export { registerPermit, searchPermit }