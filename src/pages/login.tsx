/* eslint-disable react/no-unescaped-entities */
import React, { FormEvent, useCallback, useState } from "react"
import { Form } from "components"
import { Link, useNavigate } from "react-router-dom"
import * as ROUTES from "constants/routes"
import styled from "styled-components"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [isSubmiting, setIsSubmiting] = useState(false)
    const isInvalid = email === "" || password === ""

    const navigate = useNavigate()

    const handleSubmit = useCallback(
        async (e: FormEvent) => {
            e.preventDefault()
            const auth = getAuth()
            try {
                setIsSubmiting(true)
                await signInWithEmailAndPassword(auth, email, password)
                navigate(ROUTES.DASHBOARD)
            } catch (e: any) {
                setEmail("")
                setPassword("")
                setIsSubmiting(false)
                setError(e.message)
            }
        },
        [email, password]
    )
    return (
        <Wrapper>
            <img
                src="images/misc/iphone-with-profile.jpg"
                alt="Iphone profile"
                style={{ width: "454px", height: "618px" }}
            />
            <Form>
                <Form.Wrapper>
                    <Form.Base onSubmit={handleSubmit}>
                        <Form.Logo />
                        <Form.Input
                            type="email"
                            placeholder="Phone number, username or email"
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                        />
                        <Form.Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        {error && <Form.Error>{error}</Form.Error>}
                        <Form.Button disabled={isInvalid} type="submit">
                            {isSubmiting ? "Submiting..." : "Log In"}
                        </Form.Button>
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
