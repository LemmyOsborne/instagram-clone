import styled from "styled-components"

export const Container = styled.div`
    margin: 5.5rem auto 30px;
    max-width: 935px;
    position: relative;
`

export const HeaderContainer = styled.header`
    display: flex;
    max-width: 935px;
    padding: 0 70px;
    margin-bottom: 3rem;
    justify-content: center;
`

export const Avatar = styled.img`
    border-radius: 50%;
    max-width: 150px;
    margin-right: 6rem;

    @media (max-width: 1000px) {
        margin-right: 2.5rem;
        width: 100px;
        height: 100px;
    }
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

export const EditButton = styled.button`
    padding: 6px 10px;
    background: transparent;
    border: 1px solid lightgrey;
    border-radius: 4px;
    font-weight: 600;
    font-size: 12px;
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
    font-size: 18px;
    font-weight: 500;
`

export const PhotosContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(3, minmax(100px, 290px));
    gap: 20px;
    max-width: 100%;
    border-top: 1px solid lightgray;
    padding: 3rem 0 20px;
    justify-content: center;

    @media (max-width: 1000px) {
        gap: 5px;
    }
`
export const PhotoOverlay = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: none;
    user-select: none;
`

export const PhotoItem = styled.div`
    max-width: 293px;
    max-height: 293px;
    position: relative;
    cursor: pointer;

    &:hover ${PhotoOverlay}, &:focus ${PhotoOverlay} {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
    }
`

export const LikeStat = styled.div`
    color: #fff;
    font-weight: 600;
    margin-right: 10px;
    display: flex;
    align-items: center;

    span {
        display: flex;
    }

    p {
        margin-left: 5px;
    }

    img {
        width: 20px;
        height: 20px;
        margin-right: 5px;
    }

    @media (max-width: 600px) {
        p {
            display: none;
        }
    }
`

export const CommentStat = styled(LikeStat)`
    margin-right: 0;
`

export const Photo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const DefaultProfile = styled.div`
    border-top: 1px solid lightgray;
    padding: 3rem 0 20px;
    display: flex;
    width: 100%;

    img {
        width: 380px;
        height: 380px;
        border-radius: 4px 0 0 4px;
    }

    @media (max-width: 800px) {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;

        img {
            width: 100%;
            height: 100%;
        }
    }
`

export const Feature = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    flex-grow: 1;
    border-radius: 4px 0 0 4px;

    span {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 5px;
    }

    p {
        font-size: 16px;
        margin-bottom: 20px;
    }

    img {
        height: 40px;
        width: 135px;
        cursor: pointer;
        display: inline;

        &:first-of-type {
            margin-right: 10px;
        }
    }

    @media (max-width: 800px) {
        margin-bottom: 2.5rem;
    }
`
