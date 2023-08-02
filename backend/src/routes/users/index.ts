import { Router } from "express"
import { newUserSchema } from "../../schemas/newUser.schema"
import { authToken } from "../../middlewares/authToken.middleware"
import { schemaValidationMiddleware } from "../../middlewares/schemaValidation.middleware"
import { createUserController } from "../../controllers/users/createUser.controller"
import { listUsersController } from "../../controllers/users/listUsers.controller"
import { deleteUserController } from "../../controllers/users/softDeleteUser.controller"

export const usersRoute = Router()

usersRoute.post(
  "",
  schemaValidationMiddleware(newUserSchema),
  createUserController
)
usersRoute.get("", authToken, listUsersController)
usersRoute.delete("/:id", authToken, deleteUserController)
