import { User } from "firebase/auth"
import React from "react"
import { Navigate, useLocation } from "react-router-dom"
import * as ROUTES from "../constants/routes"

interface IRequireAuth {
    children: JSX.Element
    user: User | null
}

export const WithRedirectAuthUser: React.FC<IRequireAuth> = ({ user, children }): JSX.Element => {
    return !user ? children : <Navigate to={ROUTES.DASHBOARD} />
}

export const RequireAuth: React.FC<IRequireAuth> = ({ user, children }): JSX.Element => {
    const location = useLocation()

    return user ? children : <Navigate to={ROUTES.LOGIN} state={{ from: location }} />
}
