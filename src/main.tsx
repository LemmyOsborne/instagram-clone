/* eslint-disable linebreak-style */
import { firebase } from "firebase/firebase"
import { FirebaseAuthProvider } from "helpers/firebase-auth-provider"
import React from "react"
import ReactDOM from "react-dom"
import { GlobalStyles } from "styles/global-styles"
import App from "./app"

ReactDOM.render(
    firebase && (
        <FirebaseAuthProvider>
            <GlobalStyles />
            <App />
        </FirebaseAuthProvider>
    ),
    document.getElementById("root")
)
