import { User } from "firebase/auth"
import { createContext } from "react"

export const FirebaseAuthContext = createContext({} as User | null)
