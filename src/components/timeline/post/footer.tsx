import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { updateLike } from "services/firebase"
import {
    FooterContainer,
    Actions,
    ActionButton,
    LikesQuantity,
    Username,
    Caption,
} from "./post.styles"

interface IFooter {
    userLikedPhoto: boolean | undefined
    totalLikes: number
    username: string | undefined
    caption?: string
    docId: string
    userId: string
}

export const Footer: React.FC<IFooter> = ({
    caption,
    totalLikes,
    userLikedPhoto,
    username,
    docId,
    userId,
    children,
}) => {
    const [toggleLike, setToggleLike] = useState(userLikedPhoto)
    const [likesQuantity, setLikesQuantity] = useState(totalLikes)

    const handleLike = () => {
        setToggleLike(!toggleLike)
        setLikesQuantity((likesQuantity) => (toggleLike ? likesQuantity - 1 : likesQuantity + 1))
    }

    useEffect(() => {
        const updateUserLike = async () => {
            if (userId) {
                await updateLike(userId, docId, toggleLike)
            }
        }
        updateUserLike()
    }, [userId, toggleLike])

    return (
        <FooterContainer>
            <Actions>
                {toggleLike ? (
                    <ActionButton like={toggleLike} onClick={handleLike}>
                        <img src="/images/liked-icon.svg" />
                    </ActionButton>
                ) : (
                    <ActionButton like={toggleLike} onClick={handleLike}>
                        <img src="/images/unliked-icon.svg" />
                    </ActionButton>
                )}
                <ActionButton>
                    <img src="/images/comment.svg" />
                </ActionButton>
            </Actions>
            <LikesQuantity>{likesQuantity} likes</LikesQuantity>
            {caption && (
                <Caption>
                    <Link to={`/p/${username}`}>
                        <Username>{username}</Username>
                    </Link>
                    <p>{caption}</p>
                </Caption>
            )}
            {children}
        </FooterContainer>
    )
}
