import { useUser } from "hooks/use-user"
import { IPhoto } from "interfaces/interfaces"
import React, { useEffect, useState } from "react"
import { getPhotos } from "services/firebase"
import styled from "styled-components"
import { Post } from "./post/post"

export const Timeline = () => {
    const { user } = useUser()
    const [photos, setPhotos] = useState<IPhoto[]>()

    useEffect(() => {
        if (user) {
            const getFollowedPhotos = async () => {
                const followedPhotos = await getPhotos(user.following)
                if (user.following.length > 0) {
                    setPhotos(followedPhotos)
                }
            }
            getFollowedPhotos()
        }
    }, [user])

    return photos ? (
        <Container>
            {photos.map((photo) => (
                <Post photo={photo} key={photo.docId} />
            ))}
        </Container>
    ) : null
}

const Container = styled.section`
    max-width: 614px;
    width: 100%;
`
