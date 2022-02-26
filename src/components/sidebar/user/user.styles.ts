import styled from "styled-components"

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    margin-bottom: 10px;
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
`

export const Image = styled.img<{ imageSmall?: boolean }>`
    width: ${({ imageSmall }) => (imageSmall ? "35px" : "60px")};
    border-radius: 50%;
    border: 1px solid lightgrey;
    margin-right: 15px;
`

export const Text = styled.p`
    font-weight: 600;

    &:last-of-type {
        color: #94a1b9;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 14px;
        line-height: 18px;
        font-weight: 400;
        cursor: text;
    }
`

export const Button = styled.div`
    color: #00a0f7;
    justify-self: end;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    background: none;
    border: none;
`
