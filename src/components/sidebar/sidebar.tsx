/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext } from "react"
import { Suggestions } from "./suggestions/suggestions"
import User from "./user/user"
import { FirebaseAuthContext } from "context/firebase"
import styled from "styled-components"
import { useUser } from "hooks/use-user"

export const Sidebar = () => {
    const userFromContext = useContext(FirebaseAuthContext)
    const { user } = useUser(userFromContext?.uid)
    console.table(user)

    return user ? (
        <Container>
            <User username={user.username} fullName={user.fullName} />
            <Suggestions username={user.username} authFollowing={user.following} />
        </Container>
    ) : null
}

const Container = styled.div`
    justify-self: end;
    width: 300px;
    margin-top: 1rem;
`
