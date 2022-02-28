import { IComment } from "interfaces/interfaces"
import React, { FormEvent, useState } from "react"
import { updateComments } from "services/firebase"
import {
    ToggleComments,
    CommentSection,
    CommentItem,
    Form,
    Username,
    Input,
    Button,
} from "./post.styles"

interface ICommentComponent {
    username: string | undefined
    docId: string
    comments: IComment[]
}

export const Comment: React.FC<ICommentComponent> = ({ comments, docId, username }) => {
    const [showComments, setShowComments] = useState(false)
    const [commentText, setCommentText] = useState("")
    const [newComment, setNewComment] = useState(false)
    const isDisabled = commentText === ""

    const handleComments = async (e: FormEvent) => {
        e.preventDefault()
        if (username) {
            await updateComments(username, commentText, docId)
            setCommentText("")
        }
    }

    return (
        <>
            <ToggleComments onClick={() => setShowComments(!showComments)}>
                View all comments
            </ToggleComments>
            <CommentSection showComments={showComments}>
                {comments.map((comment, index) => (
                    <CommentItem key={index}>
                        <Username>{comment.displayName}</Username>
                        <p>{comment.comment}</p>
                    </CommentItem>
                ))}
                {newComment ? (
                    <CommentItem>
                        <Username>{username}</Username>
                        <p>{commentText}</p>
                    </CommentItem>
                ) : null}
            </CommentSection>
            <Form onSubmit={handleComments}>
                <Input
                    value={commentText}
                    onChange={({ target }) => setCommentText(target.value)}
                    placeholder="Add a comment..."
                />
                <Button onClick={() => setNewComment(true)} disabled={isDisabled} type="submit">
                    Post
                </Button>
            </Form>
        </>
    )
}
