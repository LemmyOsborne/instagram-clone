import styled from "styled-components"

export const Container = styled.div``

export const Item = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;

    img {
        width: 60px;
        border-radius: 50%;
        border: 1px solid lightgrey;
    }

    p {
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
    }

    span {
        color: #00a0f7;
        justify-self: end;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
    }
`

export const Title = styled.p`
    color: #939393;
    font-size: 14px;
    font-weight: 600;
`

export const TitleWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    margin: 25px 0 15px;
`

export const SmallText = styled.p`
    font-size: 12px;
    cursor: pointer;
    justify-self: end;
    font-weight: 600;
`
