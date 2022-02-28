import styled from "styled-components"

export const Container = styled.article`
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    background-color: #fff;
`

export const Header = styled.header`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 14px 16px;
`

export const Username = styled.span`
    font-weight: 600;
    cursor: pointer;
    margin-right: 5px;
`

export const Avatar = styled.img`
    border-radius: 50%;
    border: 1px solid #dbdbdb;
    width: 35px;
    margin-right: 15px;
    cursor: pointer;
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
`

export const Bottom = styled.section`
    display: flex;
    flex-direction: column;
    padding: 15px;
`

export const Actions = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 10px;
`

export const ActionButton = styled.button<{ like?: boolean }>`
    cursor: pointer;
    background: none;
    border: none;
    margin-right: 15px;
    padding: 0;

    img:hover {
        filter: ${({ like }) => (!like ? "brightness(4)" : "none")};
    }
`

export const LikesQuantity = styled.section`
    font-weight: 600;
    margin-bottom: 10px;
`

export const Caption = styled.section`
    display: flex;

    ${Username}:hover {
        text-decoration: underline;
    }
`
