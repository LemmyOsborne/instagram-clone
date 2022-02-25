/* eslint-disable linebreak-style */
import React from "react"
import ReactDOM from "react-dom"
import { GlobalStyles } from "styles/global-styles"
import App from "./app"

ReactDOM.render(
    <>
        <GlobalStyles />
        <App />
    </>,
    document.getElementById("root")
)
