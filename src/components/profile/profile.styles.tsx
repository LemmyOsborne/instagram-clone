import styled from "styled-components"

export const Container = styled.div`
    margin: 6rem auto 30px;
    max-width: 975px;
    position: relative;
`

export const HeaderContainer = styled.header`
    display: flex;
    max-width: 935px;
    padding: 0 50px;
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
