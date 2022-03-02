/* eslint-disable indent */
import { IPhoto } from "interfaces/interfaces"
import React from "react"
import ReactDOM from "react-dom"
import { useParams } from "react-router-dom"
import {
    Overlay,
    Inner,
    Avatar,
    Caption,
    Comment,
    CommentsSection,
    Header,
    PostInfo,
    Username,
    Posted,
    Text,
    CloseButton,
    FooterSection,
} from "./popup.styles"
import { formatDistance } from "date-fns"
import { Footer } from "components/timeline/post/footer"
import { Comment as CommentComponent } from "components/timeline/post/comment"
import { useUser } from "hooks/use-user"

interface IPopup {
    photo: IPhoto
    setPopup: React.Dispatch<React.SetStateAction<IPhoto | null>>
}

export const Popup: React.FC<IPopup> = ({
    photo: { caption, comments, dateCreated, likes, userLikedPhoto, imageSrc, docId },
    setPopup,
}) => {
    const { username } = useParams()
    const { user } = useUser()
    return ReactDOM.createPortal(
        <Overlay>
            <CloseButton onClick={() => setPopup(null)}>
                <img src="/images/close.svg" />
            </CloseButton>
            <Inner>
                <img src={imageSrc} />
                <PostInfo>
                    <Header>
                        <Avatar>
                            <img src={`/images/avatars/${username}.jpg`} />
                        </Avatar>
                        <Username>{username}</Username>
                    </Header>
                    <CommentsSection>
                        <Caption>
                            <Avatar>
                                <img src={`/images/avatars/${username}.jpg`} />
                            </Avatar>
                            <Text>
                                <Username>{username}</Username>
                                <p>{caption}</p>
                            </Text>
                        </Caption>
                        <Posted>{formatDistance(dateCreated, new Date())}</Posted>
                        {comments.map(({ comment, displayName }, index) => (
                            <Comment key={index}>
                                <Avatar>
                                    <img src={`/images/avatars/${displayName}.jpg`} />
                                </Avatar>
                                <Text>
                                    <Username>{displayName}</Username>
                                    <p>{comment}</p>
                                </Text>
                            </Comment>
                        ))}
                    </CommentsSection>
                    <FooterSection>
                        <Footer
                            totalLikes={likes.length}
                            userLikedPhoto={userLikedPhoto}
                            username={username}
                            docId={docId}
                            userId={user.userId}
                        />
                        <CommentComponent
                            comments={comments}
                            dateCreated={dateCreated}
                            docId={docId}
                            username={username}
                            popup
                        />
                    </FooterSection>
                </PostInfo>
            </Inner>
        </Overlay>,
        document.getElementById("root") as Element
    )
}
