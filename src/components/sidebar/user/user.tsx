import { checkImage } from "helpers/check-image"
import React, { memo, useEffect, useState } from "react"
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
    const [isImageExist, setIsMageExist] = useState(false)
    useEffect(() => {
        checkImage(`/images/avatars/${username}.jpg`, setIsMageExist)
    }, [username])
    return username ? (
        <Container>
            <Wrapper>
                <Link to={`/p/${username}`}>
                    {isImageExist ? (
                        <Image src={`/images/avatars/${username}.jpg`} />
                    ) : (
                        <Image src={"/images/avatars/default.png"} />
                    )}
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
