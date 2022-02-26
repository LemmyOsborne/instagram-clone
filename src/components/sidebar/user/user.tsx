import React, { memo } from "react"
import { Link } from "react-router-dom"
import { Button, Container, Image, Text, Wrapper } from "./user.styles"

interface IUserComponent {
    username?: string
    fullName?: string
    imageSmall?: boolean
    buttonText?: boolean
}

const User: React.FC<IUserComponent> = ({ fullName, username, imageSmall, buttonText }) => {
    return (
        <Container>
            <Wrapper>
                <Link to={`/p/${username}`}>
                    <Image imageSmall={imageSmall} src={`/images/avatars/${username}.jpg`} />
                </Link>
                <Link to={`/p/${username}`}>
                    <Text>{username}</Text>
                    <Text>{fullName}</Text>
                </Link>
            </Wrapper>
            {buttonText ? <Button>Follow</Button> : <Button>Switch</Button>}
        </Container>
    )
}

export default memo(User)
