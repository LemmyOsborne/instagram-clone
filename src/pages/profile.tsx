import { UserProfile, Header } from "components"
import { IUser } from "interfaces/interfaces"
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getUserByUsername } from "services/firebase"
import * as ROUTES from "constants/routes"
import styled from "styled-components"

const Profile = () => {
    const { username } = useParams()
    const [user, setUser] = useState<IUser>()
    const [error, setError] = useState(false)

    useEffect(() => {
        const CheckIsUserExists = async () => {
            const user = await getUserByUsername(username)
            if (user) {
                setUser(user)
            } else {
                setError(true)
            }
        }
        CheckIsUserExists()
    }, [username])

    useEffect(() => {
        if (username) {
            document.title = username
        }
    }, [username])

    return user ? (
        <>
            <Header />
            {error ? (
                <Error>
                    <ErrorTitle>Sorry, this page isn&apos;t available.</ErrorTitle>
                    <ErrorText>
                        The link you followed may be broken, or the page may have been removed.
                        <Link to={ROUTES.DASHBOARD}> Go back to Instagram.</Link>
                    </ErrorText>
                </Error>
            ) : (
                <UserProfile user={user} />
            )}
        </>
    ) : (
        <p>Loading...</p>
    )
}

const Error = styled.div``

const ErrorTitle = styled.h1``

const ErrorText = styled.p``

export default Profile
