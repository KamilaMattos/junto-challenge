import "reflect-metadata"
import "express-async-errors"
import express from "express"

const cors = require('cors')

import { usersRoute } from "./routes/users"
import { sessionRoutes } from "./routes/login"
import { claimRoute } from "./routes/claim/index.ts"

import { handleErrorMiddleware } from "./middlewares/errors.middleware"

const app = express()
app.use(express.json())

app.use("/users", usersRoute)
app.use("/login", sessionRoutes)
app.use("/claim", claimRoute)

app.use(handleErrorMiddleware)
app.use(cors());
export default app
