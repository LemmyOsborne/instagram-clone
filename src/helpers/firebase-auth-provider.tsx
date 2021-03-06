import { getAuth, onAuthStateChanged, User } from "firebase/auth"
import React, { useEffect, useState } from "react"
import { FirebaseAuthContext } from "context/firebase"

const FirebaseAuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(JSON.parse(`${localStorage.getItem("authUser")}`))

    const auth = getAuth()

    useEffect(() => {
        const listener = onAuthStateChanged(auth, (authUser) => {
            if (authUser) {
                localStorage.setItem("authUser", JSON.stringify(authUser))
                setUser(authUser)
            } else {
                localStorage.removeItem("authUser")
                setUser(null)
            }
        })
        return () => listener()
    }, [auth])

    return <FirebaseAuthContext.Provider value={user}>{children}</FirebaseAuthContext.Provider>
}

export { FirebaseAuthProvider }
