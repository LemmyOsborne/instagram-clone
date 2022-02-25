/* eslint-disable linebreak-style */
import { firebase } from "firebase/firebase"
import React from "react"
import ReactDOM from "react-dom"
import { GlobalStyles } from "styles/global-styles"
import App from "./app"

ReactDOM.render(
    firebase && (
        <>
            <GlobalStyles />
            <App />
        </>
    ),
    document.getElementById("root")
)
