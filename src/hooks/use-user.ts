import { FirebaseAuthContext } from "context/firebase"
import { IUser } from "interfaces/interfaces"
import { useState, useEffect, useContext } from "react"
import { getUserById } from "services/firebase"

export const useUser = () => {
    const [activeUser, setActiveUser] = useState<IUser>()
    const authUser = useContext(FirebaseAuthContext)

    useEffect(() => {
        const getUserObjByUserId = async () => {
            const [user] = await getUserById(authUser?.uid)
            setActiveUser(user)
        }

        if (authUser?.uid) {
            getUserObjByUserId()
        }
    }, [authUser?.uid])

    return { user: activeUser, setActiveUser }
}
