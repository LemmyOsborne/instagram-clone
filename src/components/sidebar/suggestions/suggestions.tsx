import React, { useEffect, useState } from "react"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "firebase/firebase"
import { IUser } from "interfaces/interfaces"
import { Title, TitleWrapper, SmallText } from "./suggestions.styles"
import User from "../user/user"
import { getSuggestedUsers } from "services/firebase"

export const Suggestions: React.FC<{ username: string }> = ({ username }) => {
    const [users, setUsers] = useState<IUser[]>()

    useEffect(() => {
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
            {users?.map((user) => (
                <User
                    buttonText
                    imageSmall
                    key={user.userId}
                    fullName={user.fullName}
                    username={user.username}
                />
            ))}
        </>
    )
}
