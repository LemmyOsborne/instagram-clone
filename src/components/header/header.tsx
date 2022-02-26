/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"
import { Link } from "react-router-dom"
import { Container, Avatar, Icons, Logo, Wrapper, Dropdown, DropdownMenu } from "./header.styles"
import * as ROUTES from "constants/routes"
import { getAuth, signOut } from "firebase/auth"

export const Header = () => {
    const signOutHandler = () => {
        const auth = getAuth()
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            })
            .catch((error: any) => {
                console.error(error)
            })
    }

    return (
        <Container>
            <Wrapper>
                <Link to={ROUTES.DASHBOARD}>
                    <Logo src="/images/misc/logo.png" />
                </Link>
                <Icons>
                    <Link to={ROUTES.DASHBOARD}>
                        <img src="/images/home.svg" />
                    </Link>
                    <Dropdown>
                        <Avatar>
                            <img src="/images/avatars/rodion.jpg" />
                        </Avatar>
                        <DropdownMenu>
                            <div>
                                <img src="/images/profile.svg" />
                                Profile
                            </div>
                            <div>
                                <img src="/images/saved.svg" />
                                Saved
                            </div>
                            <div>
                                <img src="/images/settings.svg" />
                                Setting
                            </div>
                            <div onClick={signOutHandler}>
                                <img src="/images/logout.svg" />
                                Log Out
                            </div>
                        </DropdownMenu>
                    </Dropdown>
                </Icons>
            </Wrapper>
        </Container>
    )
}
