import React from "react"
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
}

export const Header: React.FC<IHeader> = ({
    followers,
    following,
    fullName,
    username,
    photosQuantity,
}) => {
    return (
        <HeaderContainer>
            <Avatar src={`/images/avatars/${username}.jpg`} />
            <ProfileInfo>
                <Top>
                    <p>{username}</p>
                    <Button>Follow</Button>
                </Top>
                <Statistics>
                    <li>
                        <span>{photosQuantity}</span> posts
                    </li>
                    <li>
                        <span>{followers.length}</span> followers
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
