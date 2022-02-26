import React, { memo } from "react"
import { Link } from "react-router-dom"
import { Button, Container, Image, Text, Wrapper } from "./user.styles"

interface IUserComponent {
    username?: string
    fullName?: string
}

const User: React.FC<IUserComponent> = ({ fullName, username }) => {
    return (
        <Container>
            <Wrapper>
                <Link to={`/p/${username}`}>
                    <Image src={`/images/avatars/${username}.jpg`} />
                </Link>
                <Link to={`/p/${username}`}>
                    <Text>{username}</Text>
                    <Text>{fullName}</Text>
                </Link>
            </Wrapper>
            <Button>Switch</Button>
        </Container>
    )
}

export default memo(User)
