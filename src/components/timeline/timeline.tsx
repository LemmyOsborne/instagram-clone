import { useUser } from "hooks/use-user"
import { IPhoto } from "interfaces/interfaces"
import React, { useEffect, useState } from "react"
import { getPhotos } from "services/firebase"
import styled, { keyframes } from "styled-components"
import { Post } from "./post/post"
import { Footer } from "components"

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

    return photos && user?.following?.length !== 0 ? (
        <>
            <Container>
                {photos.map((photo) => (
                    <Post photo={photo} key={photo.docId} />
                ))}
            </Container>
        </>
    ) : user?.following?.length === 0 ? (
        <Container>
            <p>You not following anyone.</p>
        </Container>
    ) : (
        <Container>
            {Array(9)
                .fill("")
                .map((_, index) => (
                    <React.Fragment key={index}>
                        <SkeletonHeader>
                            <SkeletonAvatar />
                            <SkeletonText />
                        </SkeletonHeader>
                        <Skeleton />
                    </React.Fragment>
                ))}
        </Container>
    )
}

const Container = styled.section`
    max-width: 614px;
    width: 100%;
    max-height: 600px;
`

const skeleton = keyframes`
    0% {
    background-color: #c7d2d8;
  }

  100% {
    background-color: hsl(200, 20%, 95%);
  }
`

const Skeleton = styled.div`
    animation: ${skeleton} 1s linear infinite alternate;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    margin-bottom: 3rem;
`
const SkeletonAvatar = styled.div`
    animation: ${skeleton} 1s linear infinite alternate;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 0 10px 20px 20px;
`

const SkeletonText = styled.div`
    animation: ${skeleton} 1s linear infinite alternate;
    width: 50px;
    height: 15px;
    border-radius: 4px;
`

const SkeletonHeader = styled.div`
    display: flex;
    align-items: center;
`
