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
            if (user?.userId) {
                setUser(user)
            } else {
                setError(true)
            }
        }
        CheckIsUserExists()
    }, [username, error])

    useEffect(() => {
        if (username) {
            document.title = username
        }
    }, [username])

    return (
        <div>
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
                user && <UserProfile user={user} />
            )}
        </div>
    )
}

const Error = styled.div`
    margin-top: 6rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ErrorTitle = styled.h1`
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 3rem;
`

const ErrorText = styled.p`
    font-size: 16px;

    a {
        color: #00376b;
    }
`

export default Profile
