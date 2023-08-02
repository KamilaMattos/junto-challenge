import { Router } from "express"
import { schemaValidationMiddleware } from "../../middlewares/schemaValidation.middleware"
import { loginUserSchema } from "../../schemas/login.schema"
import { loginController } from "../../controllers/login/login.controller"

export const sessionRoutes = Router()

sessionRoutes.post(
  "",
  schemaValidationMiddleware(loginUserSchema),
  loginController
)
