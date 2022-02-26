import { useState, useEffect } from "react"
import { getUserById } from "services/firebase"

export const useUser = (userId: number) => {
    const [activeUser, setActiveUser] = useState({})

    useEffect(() => {
        const getUserObjByUserId = async (userId: number) => {
            const [user] = await getUserById(userId)
            setActiveUser(user)
        }

        if (userId) {
            getUserObjByUserId(userId)
        }
    }, [userId])

    return { user: activeUser, setActiveUser }
}
