import { Router } from "express";
import { registerPermit, searchPermit } from "../controllers/permit.controllers.js";
import { upload } from "../middlewares/multer.middlewares.js";

const permitRouter = Router();

permitRouter
  .route("/register-permit")
  .post(
    upload.fields([{ name: "profileImage", maxCount: 1 }]),
    registerPermit
  );
permitRouter.route("/search-permit/:id").get(searchPermit)
export { permitRouter };