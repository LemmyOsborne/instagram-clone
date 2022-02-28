import React from "react"
import { Header, Sidebar, Timeline } from "components"
import styled from "styled-components"
import { useWindowSize } from "hooks/useWindowSize"

const Dashboard = () => {
    const { width } = useWindowSize()

    return (
        <>
            <Header />
            <Container>
                <Timeline />
                {width > 1000 && <Sidebar />}
            </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 975px;
    width: 100%;
    margin: 6rem auto 0;
    padding: 0 20px;
`

export default Dashboard
