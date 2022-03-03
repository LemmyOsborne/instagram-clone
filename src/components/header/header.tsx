/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
    Container,
    Avatar,
    Icons,
    Logo,
    Wrapper,
    Dropdown,
    DropdownMenu,
    Button,
} from "./header.styles"
import * as ROUTES from "constants/routes"
import { getAuth, signOut } from "firebase/auth"
import { FirebaseAuthContext } from "context/firebase"
import { checkImage } from "helpers/check-image"

export const Header = () => {
    const user = useContext(FirebaseAuthContext)
    const [isOpen, setIsOpen] = useState(false)
    const [isImageExist, setIsImageExists] = useState(false)
    const navigate = useNavigate()

    const signOutHandler = () => {
        const auth = getAuth()
        signOut(auth)
            .then(() => {
                navigate(ROUTES.LOGIN)
            })
            .catch((error: any) => {
                console.error(error)
            })
    }

    useEffect(() => {
        if (user) {
            checkImage(`/images/avatars/${user.displayName}.jpg`, setIsImageExists)
        }
    }, [user])

    return (
        <Container>
            <Wrapper>
                <Link to={ROUTES.DASHBOARD}>
                    <Logo src="/images/misc/logo.png" alt="Logo" />
                </Link>
                {user ? (
                    <Icons>
                        <Link to={ROUTES.DASHBOARD}>
                            <img src="/images/home.svg" alt="Home" />
                        </Link>
                        <Dropdown>
                            <Avatar onClick={() => setIsOpen((isOpen) => !isOpen)}>
                                {isImageExist ? (
                                    <img
                                        src={`/images/avatars/${user.displayName}.jpg`}
                                        alt="User"
                                    />
                                ) : (
                                    <img src={"/images/avatars/default.png"} alt="User" />
                                )}
                            </Avatar>
                            {isOpen && (
                                <DropdownMenu>
                                    <Link to={`/p/${user.displayName}`}>
                                        <div>
                                            <img src="/images/profile.svg" alt="Profile" />
                                            Profile
                                        </div>
                                    </Link>
                                    <div>
                                        <img src="/images/saved.svg" alt="Saved" />
                                        Saved
                                    </div>
                                    <div>
                                        <img src="/images/settings.svg" alt="Settings" />
                                        Setting
                                    </div>
                                    <div onClick={signOutHandler}>
                                        <img src="/images/logout.svg" alt="Logout" />
                                        Log Out
                                    </div>
                                </DropdownMenu>
                            )}
                        </Dropdown>
                    </Icons>
                ) : (
                    <div>
                        <Link to={ROUTES.LOGIN}>
                            <Button bg>Log In</Button>
                        </Link>
                        <Link to={ROUTES.SIGN_UP}>
                            <Button>Sign Up</Button>
                        </Link>
                    </div>
                )}
            </Wrapper>
        </Container>
    )
}
