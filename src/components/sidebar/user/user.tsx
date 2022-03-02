import React, { memo } from "react"
import { Link } from "react-router-dom"
import {
    Button,
    Container,
    Image,
    Text,
    Wrapper,
    SkeletonAvatar,
    SkeletonText,
} from "./user.styles"

interface IUserComponent {
    username?: string
    fullName?: string
}

const User: React.FC<IUserComponent> = ({ fullName, username }) => {
    return username ? (
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
    ) : (
        <Container>
            <Wrapper>
                <SkeletonAvatar />
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <SkeletonText />
                    <SkeletonText />
                </div>
            </Wrapper>
        </Container>
    )
}

export default memo(User)
