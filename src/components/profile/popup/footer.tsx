import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { updateLike } from "services/firebase"
import {
    FooterContainer,
    Actions,
    ActionButton,
    LikesQuantity,
    Username,
    Caption,
} from "../../timeline/post/post.styles"

interface IFooter {
    userLikedPhoto: boolean | undefined
    totalLikes: number
    username: string | undefined
    caption?: string
    docId: string
    userId: string
    handleLike: () => void
    toggleLike: boolean | undefined
}

export const Footer: React.FC<IFooter> = ({
    caption,
    totalLikes,
    userLikedPhoto,
    username,
    docId,
    userId,
    children,
    handleLike,
    toggleLike,
}) => {
    useEffect(() => {
        const updateUserLike = async () => {
            if (userId) {
                await updateLike(userId, docId, toggleLike)
            }
        }
        updateUserLike()
    }, [userId, toggleLike, userLikedPhoto])

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
            <LikesQuantity>{totalLikes} likes</LikesQuantity>
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
