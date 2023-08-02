import { Router } from "express"
import { authToken } from "../../middlewares/authToken.middleware"
import { schemaValidationMiddleware } from "../../middlewares/schemaValidation.middleware"
import { claimSchema } from "../../schemas/claim.schema"
import { createClaimController } from "../../controllers/claim/createClaim.controller"
import { listClaimsController } from "../../controllers/claim/listClaims.controller"
import { listClaimByIdController } from "../../controllers/claim/listClaimByID.controller"
import { updateClaimController } from "../../controllers/claim/updateClaim.controller"
import { deleteClaimController } from "../../controllers/claim/deleteClaim.controller"

export const claimRoute = Router()

claimRoute.post(
  "",
  authToken,
  schemaValidationMiddleware(claimSchema),
  createClaimController
)
claimRoute.get("", authToken, listClaimsController)
claimRoute.get("/:id", authToken, listClaimByIdController)
claimRoute.patch("/:id", authToken, updateClaimController)
claimRoute.delete("/:id", authToken, deleteClaimController)
