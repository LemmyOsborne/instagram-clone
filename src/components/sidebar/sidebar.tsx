/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react"
import { Suggestions } from "./suggestions/suggestions"
import User from "./user/user"
import styled from "styled-components"
import { useUser } from "hooks/use-user"
import { useWindowSize } from "hooks/useWindowSize"

export const Sidebar = () => {
    const { user } = useUser()
    const { width } = useWindowSize()

    return user ? (
        <Container width={width}>
            <User username={user.username} fullName={user.fullName} />
            <Suggestions
                loggedUserDocId={user.docId}
                loggedUserId={user.userId}
                following={user.following}
            />
        </Container>
    ) : null
}

const Container = styled.nav<{ width: number }>`
    justify-self: flex-end;
    max-width: 293px;
    margin-top: 1rem;
    position: fixed;
    left: ${({ width }) => `${width / 2 + 167}px`};
`
