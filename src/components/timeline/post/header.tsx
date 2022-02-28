import React from "react"
import { Link } from "react-router-dom"
import { HeaderContainer, Avatar, Username } from "./post.styles"

export const Header: React.FC<{ username: string | undefined }> = ({ username }) => {
    return (
        <HeaderContainer>
            <Link to={`/p/${username}`}>
                <Avatar
                    src={`/images/avatars/${username}.jpg`}
                    alt={`${username}'s profile photo`}
                />
            </Link>
            <Link to={`/p/${username}`}>
                <Username>{username}</Username>
            </Link>
        </HeaderContainer>
    )
}
