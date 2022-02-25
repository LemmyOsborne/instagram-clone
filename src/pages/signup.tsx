/* eslint-disable react/no-unescaped-entities */
import React, { FormEvent, useCallback, useState } from "react"
import { Form } from "components"
import { Link, useNavigate } from "react-router-dom"
import * as ROUTES from "constants/routes"
import styled from "styled-components"
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"

const Login = () => {
    const [fullname, setFullname] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [isSubmiting, setIsSubmiting] = useState(false)
    const isInvalid = email === "" || password === "" || fullname === "" || username === ""

    const navigate = useNavigate()

    const handleSubmit = useCallback(
        async (e: FormEvent) => {
            e.preventDefault()
            const auth = getAuth()
            try {
                setIsSubmiting(true)
                await createUserWithEmailAndPassword(auth, email, password)
                navigate(ROUTES.DASHBOARD)
            } catch (e: any) {
                setEmail("")
                setPassword("")
                setUsername("")
                setFullname("")
                setIsSubmiting(false)
                setError(e.message)
            }
        },
        [email, password]
    )
    return (
        <Wrapper>
            <Form>
                <Form.Wrapper>
                    <Form.Base onSubmit={handleSubmit}>
                        <Form.Logo />
                        <Form.Text>Sign up to see photos and videos from your friends.</Form.Text>
                        <Form.Button>Log in with Facebook</Form.Button>
                        <Form.Divider />
                        <Form.Input
                            type="email"
                            placeholder="Email address"
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                        />
                        <Form.Input
                            type="text"
                            placeholder="Full name"
                            value={fullname}
                            onChange={({ target }) => setFullname(target.value)}
                        />
                        <Form.Input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={({ target }) => setUsername(target.value)}
                        />
                        <Form.Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        {error && <Form.Error>{error}</Form.Error>}
                        <Form.Button disabled={isInvalid} type="submit">
                            {isSubmiting ? "Submiting..." : "Sign Up"}
                        </Form.Button>
                        <Form.SmallText>
                            By signing up, you agree to our{" "}
                            <span>Terms, Data Policy and Cookie Policy.</span>
                        </Form.SmallText>
                    </Form.Base>
                </Form.Wrapper>
                <Form.LoginSignupRedirect>
                    Have an account?
                    <Link to={ROUTES.LOGIN}>Log in</Link>
                </Form.LoginSignupRedirect>
                <Form.Bottom />
            </Form>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    margin-top: 2.5rem;
`

export default Login
