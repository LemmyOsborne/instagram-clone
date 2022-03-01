import { useUser } from "hooks/use-user"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import {
    getUserById,
    updateFollowedUserFollowing,
    updateLoggedUserFollowing,
} from "services/firebase"
import { Container, Wrapper, Button, Image, Text } from "./suggestions.styles"

interface ISuggestedProfiles {
    username: string
    fullName: string
    loggedUserDocId: string
    loggedUserId: string
    profileDocId: string
    profileId: string
    profileFollowers: string[]
    loggedUserFollowing: string[]
}

export const SuggestedProfiles: React.FC<ISuggestedProfiles> = ({
    fullName,
    loggedUserDocId,
    loggedUserId,
    username,
    profileDocId,
    profileId,
    profileFollowers,
    loggedUserFollowing,
}) => {
    const { setActiveUser } = useUser()
    const [isFollowing, setIsFollowing] = useState<boolean>(loggedUserFollowing.includes(profileId))
    const [isFollowers, setIsFollowers] = useState<boolean>(profileFollowers.includes(loggedUserId))

    const handleFollowing = async () => {
        await updateLoggedUserFollowing(loggedUserDocId, profileId, isFollowing)
        await updateFollowedUserFollowing(loggedUserId, profileDocId, isFollowers)
        const [user] = await getUserById(loggedUserDocId)
        setActiveUser(user)
        setIsFollowing((isFollowing) => !isFollowing)
        setIsFollowers((isFollowers) => !isFollowers)
    }

    return !isFollowing ? (
        <Container>
            <Wrapper>
                <Link to={`/p/${username}`}>
                    <Image src={`/images/avatars/${username}.jpg`} />
                </Link>
                <Link to={`/p/${username}`}>
                    <Text>{username}</Text>
                    <Text>{fullName}</Text>
                </Link>
            </Wrapper>
            <Button onClick={handleFollowing}>Follow</Button>
        </Container>
    ) : null
}
