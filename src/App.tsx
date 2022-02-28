import { FirebaseAuthContext } from "context/firebase"
import { RequireAuth, WithRedirectAuthUser } from "helpers/routes"
import React, { lazy, Suspense, useContext } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import * as ROUTES from "./constants/routes"

const Login = lazy(() => import("pages/login"))
const Signup = lazy(() => import("pages/signup"))
const Dashboard = lazy(() => import("pages/dashboard"))

const App = () => {
    const user = useContext(FirebaseAuthContext)
    console.log("user: ", user)

    return (
        <Router>
            <Suspense fallback={<p>Loading...</p>}>
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
                </Routes>
            </Suspense>
        </Router>
    )
}

export default App
