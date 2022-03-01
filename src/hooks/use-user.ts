import { FirebaseAuthContext } from "context/firebase"
import { IUser } from "interfaces/interfaces"
import { useState, useEffect, useContext } from "react"
import { getUserById } from "services/firebase"

export const useUser = () => {
    const [activeUser, setActiveUser] = useState({} as IUser)
    const authUser = useContext(FirebaseAuthContext)

    useEffect(() => {
        const getUserObjByUserId = async () => {
            if (authUser) {
                const [user] = await getUserById(authUser.uid)
                setActiveUser(user)
            }
        }
        if (authUser?.uid) {
            getUserObjByUserId()
        }
    }, [authUser])

    return { user: activeUser, setActiveUser }
}
