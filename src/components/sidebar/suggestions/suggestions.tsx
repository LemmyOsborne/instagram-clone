import React, { useEffect, useState } from "react"
import { IUser } from "interfaces/interfaces"
import {
    Title,
    TitleWrapper,
    SmallText,
    Button,
    Container,
    Image,
    Text,
    Wrapper,
} from "./suggestions.styles"
import { getSuggestedUsers } from "services/firebase"
import { Link } from "react-router-dom"

interface ISuggestionsComponent {
    username: string
    authFollowing: string[]
}

export const Suggestions: React.FC<ISuggestionsComponent> = ({ username, authFollowing }) => {
    const [users, setUsers] = useState<IUser[]>()

    useEffect(() => {
        console.log(username)
        async function suggestedUsers() {
            const users = await getSuggestedUsers(username)
            setUsers(users)
        }

        if (username) {
            suggestedUsers()
        }
    }, [username])

    return (
        <>
            <TitleWrapper>
                <Title>Suggestions for you</Title>
                <SmallText>See All</SmallText>
            </TitleWrapper>
            {users?.map(({ userId, username, fullName }) => (
                <Container key={userId}>
                    <Wrapper>
                        <Link to={`/p/${username}`}>
                            <Image src={`/images/avatars/${username}.jpg`} />
                        </Link>
                        <Link to={`/p/${username}`}>
                            <Text>{username}</Text>
                            <Text>{fullName}</Text>
                        </Link>
                    </Wrapper>
                    {authFollowing.includes(userId) ? (
                        <Button>Unfollow</Button>
                    ) : (
                        <Button>Follow</Button>
                    )}
                </Container>
            ))}
        </>
    )
}
