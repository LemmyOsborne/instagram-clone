import { IUser } from "interfaces/interfaces"
import { useState, useEffect } from "react"
import { getUserById } from "services/firebase"

export const useUser = (userId?: string) => {
    const [activeUser, setActiveUser] = useState<IUser>()

    useEffect(() => {
        const getUserObjByUserId = async (userId?: string) => {
            const [user] = await getUserById(userId)
            setActiveUser(user || {})
        }

        if (userId) {
            getUserObjByUserId(userId)
        }
    }, [userId])

    return { user: activeUser, setActiveUser }
}
