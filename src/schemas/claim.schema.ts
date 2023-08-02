import * as yup from "yup"
import { SchemaOf } from "yup"
import { IClaim, claimTypes } from "../interfaces/claim"

const claimSchema: SchemaOf<IClaim> = yup.object().shape({
  userId: yup.string(),
  date: yup.string().required(),
  type: yup.mixed<claimTypes>().oneOf(Object.values(claimTypes)).required(),
  street: yup.string().required(),
  number: yup.number().required(),
  neighborhood: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  country: yup.string().required(),
})

export { claimSchema }
