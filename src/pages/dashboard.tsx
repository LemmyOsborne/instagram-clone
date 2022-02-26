import React from "react"
import { Header, Sidebar } from "components"
import styled from "styled-components"
import { Timeline } from "components"

const Dashboard = () => {
    return (
        <>
            <Header />
            <Container>
                <Timeline />
                <Sidebar />
            </Container>
        </>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 975px;
    width: 100%;
    margin: 6rem auto 0;
    padding: 0 20px;
`

export default Dashboard
