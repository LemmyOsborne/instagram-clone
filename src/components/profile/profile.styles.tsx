import styled from "styled-components"

export const Container = styled.div`
    margin: 6rem auto 30px;
    max-width: 975px;
`

export const HeaderContainer = styled.header`
    display: flex;
    width: 935px;
    padding: 0 50px;
    margin-bottom: 3rem;
    justify-content: center;
`

export const Avatar = styled.img`
    border-radius: 50%;
    width: 150px;
    margin-right: 6rem;
`

export const ProfileInfo = styled.section`
    width: 100%;
`

export const Top = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 25px;

    p {
        font-size: 30px;
        font-weight: 300;
        margin-right: 25px;
    }
`

export const Button = styled.button`
    background: #0095f6;
    color: white;
    padding: 6px 25px;
`

export const Statistics = styled.ul`
    display: flex;
    margin-bottom: 20px;

    li {
        list-style: none;
        font-size: 16px;
        margin-right: 40px;

        span {
            font-weight: 600;
        }
    }
`

export const FullName = styled.h2`
    font-size: 20px;
    font-weight: 500;
`

export const PhotosContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 30px;
    max-width: 100%;
    border-top: 1px solid lightgray;
    padding: 3rem 0 20px;
`

export const Photo = styled.img`
    width: 293px;
    height: 293px;
    object-fit: cover;
`
