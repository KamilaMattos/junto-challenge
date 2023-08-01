import { Router } from "express"
import { createClaimController } from "../../controllers/claim/createClaim.controller"
import { authToken } from "../../middlewares/authToken.middleware"
import { listClaimsController } from "../../controllers/claim/listClaims.controller"
import { schemaValidationMiddleware } from "../../middlewares/schemaValidation.middleware"
import { claimSchema } from "../../schemas/claim.schema"
import { listClaimByIdController } from "../../controllers/claim/listClaimByID.controller"

export const claimRoute = Router()

claimRoute.post(
  "",
  authToken,
  schemaValidationMiddleware(claimSchema),
  createClaimController
)
claimRoute.get("", authToken, listClaimsController)
claimRoute.get("/:id", authToken, listClaimByIdController)
