import styled, { keyframes } from "styled-components"

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
    width: 35px;
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

export const Button = styled.button`
    color: #0095f6;
    justify-self: end;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`

export const Title = styled.div`
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

export const SmallText = styled.div`
    font-size: 12px;
    cursor: pointer;
    justify-self: end;
    font-weight: 600;
`

const skeleton = keyframes`
    0% {
    background-color: #c7d2d8;
  }

  100% {
    background-color: hsl(200, 20%, 95%);
  }
`

export const SkeletonAvatar = styled.div`
    animation: ${skeleton} 1s linear infinite alternate;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 15px;
`

export const SkeletonText = styled.div`
    animation: ${skeleton} 1s linear infinite alternate;
    min-width: 40px;
    width: 100%;
    height: 15px;
    border-radius: 4px;
    margin-bottom: 5px;

    &:last-child {
        width: 80%;
    }
`
