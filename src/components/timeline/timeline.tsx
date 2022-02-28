import { useUser } from "hooks/use-user"
import { IPhoto } from "interfaces/interfaces"
import React, { useEffect, useState } from "react"
import { getPhotos } from "services/firebase"

export const Timeline = () => {
    const { user } = useUser()
    const [photos, setPhotos] = useState<IPhoto[]>()

    useEffect(() => {
        if (user) {
            const getFollowedPhotos = async () => {
                const followedPhotos = await getPhotos(user.docId, user.following)
                if (user.following.length > 0) {
                    setPhotos(followedPhotos)
                }
            }
            getFollowedPhotos()
        }
    }, [user])

    return <div>Timeline</div>
}
