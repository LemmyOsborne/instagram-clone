import { useUser } from "hooks/use-user"
import React, { useEffect, useState } from "react"
import { updateFollowedUserFollowing, updateLoggedUserFollowing } from "services/firebase"
import {
    HeaderContainer,
    Avatar,
    ProfileInfo,
    Top,
    Button,
    Statistics,
    FullName,
} from "./profile.styles"

interface IHeader {
    username: string
    followers: string[]
    following: string[]
    fullName: string
    photosQuantity: number
    userId: string
    docId: string
}

export const Header: React.FC<IHeader> = ({
    followers,
    following,
    fullName,
    username,
    photosQuantity,
    docId,
    userId,
}) => {
    const { user } = useUser()
    const initialIsFollowing = user?.following?.includes(userId)
    const initialIsFollowers = followers.includes(user.userId)

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    const [isFollowers, setIsFollowers] = useState(initialIsFollowers)
    const [followersQuantity, setFollowersQuantity] = useState(followers.length)
    console.log("isFollowing: ", isFollowing)
    console.log("isFollowers: ", isFollowers)

    const toggleFollowing = async () => {
        await updateLoggedUserFollowing(user.docId, userId, isFollowing)
        await updateFollowedUserFollowing(user.userId, docId, isFollowers)
        setIsFollowing(!isFollowing)
        setIsFollowers(!isFollowers)
        setFollowersQuantity((followersQuantity) =>
            isFollowing ? followersQuantity - 1 : followersQuantity + 1
        )
    }

    useEffect(() => {
        setIsFollowing(initialIsFollowing)
        setIsFollowers(initialIsFollowers)
    }, [initialIsFollowing, initialIsFollowers])

    return (
        <HeaderContainer>
            <Avatar src={`/images/avatars/${username}.jpg`} />
            <ProfileInfo>
                <Top>
                    <p>{username}</p>
                    {isFollowing ? (
                        <Button onClick={toggleFollowing}>Unfollow</Button>
                    ) : (
                        <Button onClick={toggleFollowing}>Follow</Button>
                    )}
                </Top>
                <Statistics>
                    <li>
                        <span>{photosQuantity}</span> posts
                    </li>
                    <li>
                        <span>{followersQuantity}</span> followers
                    </li>
                    <li>
                        <span>{following.length}</span> following
                    </li>
                </Statistics>
                <FullName>{fullName}</FullName>
            </ProfileInfo>
        </HeaderContainer>
    )
}
