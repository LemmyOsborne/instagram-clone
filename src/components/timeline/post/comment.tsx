import { formatDistance } from "date-fns"
import { IComment } from "interfaces/interfaces"
import React, { FormEvent, useState } from "react"
import { Link } from "react-router-dom"
import { updateComments } from "services/firebase"
import {
    ToggleComments,
    CommentSection,
    CommentItem,
    Form,
    Username,
    Input,
    Button,
    Posted,
} from "./post.styles"

interface ICommentComponent {
    username: string | undefined
    docId: string
    comments: IComment[]
    dateCreated: number
}

export const Comment: React.FC<ICommentComponent> = ({
    comments: allComments,
    docId,
    username,
    dateCreated,
}) => {
    const [showComments, setShowComments] = useState(false)
    const [comment, setComment] = useState("")
    const [comments, setComments] = useState(allComments)
    const isDisabled = comment === ""

    const handleComments = async (e: FormEvent) => {
        e.preventDefault()
        if (username) {
            await updateComments(username, comment, docId)
            setComments([...comments, { comment, displayName: username } as IComment])
            setComment("")
        }
    }

    return (
        <>
            <ToggleComments onClick={() => setShowComments(!showComments)}>
                View all {comments.length} comments
            </ToggleComments>
            <Posted>{formatDistance(dateCreated, new Date())} ago</Posted>
            <CommentSection showComments={showComments}>
                {comments.map((comment, index) => (
                    <CommentItem key={index}>
                        <Link to={`/p/${comment.displayName}`}>
                            <Username>{comment.displayName}</Username>
                        </Link>
                        <p>{comment.comment}</p>
                    </CommentItem>
                ))}
            </CommentSection>
            <Form onSubmit={handleComments}>
                <Input
                    value={comment}
                    onChange={({ target }) => setComment(target.value)}
                    placeholder="Add a comment..."
                />
                <Button disabled={isDisabled} type="submit">
                    Post
                </Button>
            </Form>
        </>
    )
}
