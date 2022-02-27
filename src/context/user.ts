import { IUser } from "interfaces/interfaces"
import { createContext } from "react"

export const LoggedUserContext = createContext({} as IUser)
