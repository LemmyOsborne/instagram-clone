/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { Form } from "components"
import { Link } from "react-router-dom"
import * as ROUTES from "constants/routes"
import styled from "styled-components"

const Login = () => {
    return (
        <Wrapper>
            <img
                src="images/misc/iphone-with-profile.jpg"
                style={{ width: "454px", height: "618px" }}
            />
            <Form>
                <Form.Wrapper>
                    <Form.Base>
                        <Form.Logo />
                        <Form.Input placeholder="Phone number, username or email" />
                        <Form.Input placeholder="Password" />
                        <Form.Button>Log In</Form.Button>
                    </Form.Base>
                    <Form.Divider />
                    <Form.FacebookLogin />
                    <Form.ForgetPassword />
                </Form.Wrapper>
                <Form.LoginSignupRedirect>
                    Don't have an account?
                    <Link to={ROUTES.SIGN_UP}>Sign up</Link>
                </Form.LoginSignupRedirect>
                <Form.Bottom />
            </Form>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;

    /* &:first-child {
        width: 454px;
        height: 618px;
    } */
`

export default Login
