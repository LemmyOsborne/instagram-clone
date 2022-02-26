/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from "react"
import { Link } from "react-router-dom"
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

export const Header = () => {
    const user = useContext(FirebaseAuthContext)

    const signOutHandler = () => {
        const auth = getAuth()
        signOut(auth).catch((error: any) => {
            console.error(error)
        })
    }

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
                            <Avatar>
                                <img src="/images/avatars/rodion.jpg" alt="User" />
                            </Avatar>
                            <DropdownMenu>
                                <div>
                                    <img src="/images/profile.svg" alt="Profile" />
                                    Profile
                                </div>
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
