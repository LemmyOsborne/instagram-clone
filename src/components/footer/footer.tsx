import React from "react"
import styled from "styled-components"

export const Footer = () => {
    return (
        <Container>
            <Links>
                <span>Meta</span>
                <span>About</span>
                <span>Blog</span>
                <span>Jobs</span>
                <span>Help</span>
                <span>API</span>
                <span>Privacy</span>
                <span>Terms</span>
                <span>Top accounts</span>
                <span>Hashtags</span>
                <span>Locations</span>
                <span>Instagram Lite</span>
            </Links>
            <div>
                <span>English (UK)</span>
                <span>© 2022 Instagram Clone from Rodion Bozhenko</span>
            </div>
        </Container>
    )
}

const Container = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #8e8e8e;
    font-size: 12px;
    line-height: 16px;
    padding: 40px 20px;
    width: 100%;

    div:first-of-type {
        margin-bottom: 20px;
    }

    span {
        margin: 0 10px 5px 0;
        cursor: pointer;
    }
`

const Links = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
