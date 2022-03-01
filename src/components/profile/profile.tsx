import { IPhoto, IUser } from "interfaces/interfaces"
import React, { useEffect, useState } from "react"
import { getPhotosByUserId } from "services/firebase"
import { Header } from "./header"
import { Photos } from "./photos"
import { Container } from "./profile.styles"

export const UserProfile: React.FC<{ user: IUser }> = ({
    user: { followers, following, fullName, username, userId, docId },
}) => {
    const [photosCollection, setPhotosCollection] = useState<IPhoto[]>()

    useEffect(() => {
        getPhotosByUserId(userId)
            .then((photos) => {
                setPhotosCollection(photos)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }, [username])

    return username && photosCollection ? (
        <Container>
            <Header
                photosQuantity={photosCollection.length}
                followers={followers}
                following={following}
                fullName={fullName}
                username={username}
                userId={userId}
                docId={docId}
            />
            <Photos photosCollection={photosCollection} />
        </Container>
    ) : (
        <p style={{ marginTop: "6rem" }}>Loading...</p>
    )
}
