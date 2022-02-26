import React, { useEffect, useState } from "react"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "firebase/firebase"
import { IUser } from "interfaces/interfaces"
import { Title, TitleWrapper, SmallText } from "./suggestions.styles"
import User from "../user/user"

export const Suggestions: React.FC<{ username?: string }> = ({ username }) => {
    const [users, setUsers] = useState<IUser[]>()

    useEffect(() => {
        const getAllUsers = async () => {
            const q = query(collection(db, "users"), where("username", "!=", username))
            const querySnapshot = await getDocs(q)
            return querySnapshot.docs.map((doc) => ({
                ...(doc.data() as IUser),
            }))
        }

        getAllUsers().then((users) => {
            setUsers(users)
        })
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
