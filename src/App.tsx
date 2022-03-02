import { FirebaseAuthContext } from "context/firebase"
import { RequireAuth, WithRedirectAuthUser } from "helpers/routes"
import { NotFound } from "pages/not-found"
import React, { lazy, Suspense, useContext } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import * as ROUTES from "./constants/routes"

const Login = lazy(() => import("pages/login"))
const Signup = lazy(() => import("pages/signup"))
const Dashboard = lazy(() => import("pages/dashboard"))
const Profile = lazy(() => import("pages/profile"))

const App = () => {
    const user = useContext(FirebaseAuthContext)

    return (
        <Router>
            <Suspense
                fallback={
                    <Loading>
                        <img src="/images/icons/instagram-icon.png" />
                    </Loading>
                }
            >
                <Routes>
                    <Route
                        path={ROUTES.LOGIN}
                        element={
                            <WithRedirectAuthUser user={user}>
                                <Login />
                            </WithRedirectAuthUser>
                        }
                    />
                    <Route
                        path={ROUTES.SIGN_UP}
                        element={
                            <WithRedirectAuthUser user={user}>
                                <Signup />
                            </WithRedirectAuthUser>
                        }
                    />
                    <Route
                        path={ROUTES.DASHBOARD}
                        element={
                            <RequireAuth user={user}>
                                <Dashboard />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path={ROUTES.PROFILE}
                        element={
                            <RequireAuth user={user}>
                                <Profile />
                            </RequireAuth>
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </Router>
    )
}

const Loading = styled.div`
    background: #f8f4f4f0;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default App
