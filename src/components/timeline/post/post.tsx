import { IPhoto } from "interfaces/interfaces"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import * as ROUTES from "constants/routes"
import {
    Avatar,
    Container,
    Header,
    Image,
    Actions,
    ActionButton,
    Username,
    Caption,
    Bottom,
    LikesQuantity,
    Input,
    Button,
    Form,
    Comment,
    CommentSection,
    ToggleComments,
} from "./post.styles"
import { useUser } from "hooks/use-user"
import { updateLike } from "services/firebase"

export const Post: React.FC<{ photo: IPhoto }> = ({
    photo: {
        imageSrc,
        caption,
        comments,
        dateCreated,
        photoId,
        username,
        likes,
        userLikedPhoto,
        docId,
    },
}) => {
    const [toggleLike, setToggleLike] = useState(userLikedPhoto)
    const [showComments, setShowComments] = useState(false)
    const [likesQuantity, setLikesQuantity] = useState(likes.length)
    const { user } = useUser()
    const handleLike = () => {
        setToggleLike(!toggleLike)
        setLikesQuantity((likesQuantity) => (toggleLike ? likesQuantity - 1 : likesQuantity + 1))
    }

    useEffect(() => {
        const updateUserLike = async () => {
            if (user) {
                await updateLike(user.userId, docId, toggleLike)
            }
        }
        updateUserLike()
    }, [user, toggleLike])

    return (
        <Container>
            <Header>
                <Link to={`/p/${username}`}>
                    <Avatar
                        src={`/images/avatars/${username}.jpg`}
                        alt={`${username}'s profile photo`}
                    />
                </Link>
                <Link to={`/p/${username}`}>
                    <Username>{username}</Username>
                </Link>
            </Header>
            <Image src={imageSrc} alt={`${username}'s post content`} />
            <Bottom>
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
                <Caption>
                    <Link to={`/p/${username}`}>
                        <Username>{username}</Username>
                    </Link>
                    <p>{caption}</p>
                </Caption>
                <ToggleComments onClick={() => setShowComments(!showComments)}>
                    View all comments
                </ToggleComments>
                <CommentSection showComments={showComments}>
                    {comments.map((comment, index) => (
                        <Comment key={index}>
                            <Username>{comment.displayName}</Username>
                            <p>{comment.comment}</p>
                        </Comment>
                    ))}
                </CommentSection>
                <Form>
                    <Input placeholder="Add a comment..." />
                    <Button>Post</Button>
                </Form>
            </Bottom>
        </Container>
    )
}
