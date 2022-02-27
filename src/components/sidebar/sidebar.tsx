/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react"
import { Suggestions } from "./suggestions/suggestions"
import User from "./user/user"
import styled, { keyframes } from "styled-components"
import { useUser } from "hooks/use-user"

export const Sidebar = () => {
    const { user } = useUser()
    console.table(user)

    return user ? (
        <Container>
            <User username={user.username} fullName={user.fullName} />
            <Suggestions
                loggedUserDocId={user.docId}
                loggedUserId={user.userId}
                following={user.following}
            />
        </Container>
    ) : (
        <div>Loading...</div>
    )
}

const Container = styled.div`
    justify-self: end;
    width: 300px;
    margin-top: 1rem;
`
