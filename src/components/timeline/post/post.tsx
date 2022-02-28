import { IPhoto } from "interfaces/interfaces"
import React from "react"
import { Container, Image } from "./post.styles"
import { useUser } from "hooks/use-user"
import { Header } from "./header"
import { Footer } from "./footer"
import { Comment } from "./comment"

export const Post: React.FC<{ photo: IPhoto }> = ({
    photo: { imageSrc, caption, comments, username, likes, userLikedPhoto, docId, dateCreated },
}) => {
    const { user } = useUser()

    return user ? (
        <Container>
            <Header username={username} />
            <Image src={imageSrc} alt={`${username}'s post content`} />
            <Footer
                userId={user.userId}
                docId={docId}
                caption={caption}
                totalLikes={likes.length}
                userLikedPhoto={userLikedPhoto}
                username={username}
            >
                <Comment
                    dateCreated={dateCreated}
                    comments={comments}
                    docId={docId}
                    username={user.username}
                />
            </Footer>
        </Container>
    ) : null
}
