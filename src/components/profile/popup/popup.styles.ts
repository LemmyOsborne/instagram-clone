import styled from "styled-components"

export const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    position: fixed;
    top: 0;
    right: 0;
    overflow-y: auto;
`

export const Inner = styled.div`
    width: 1100px;
    height: 90%;
    display: flex;
    border-radius: 4px;
    z-index: 999;

    img {
        max-width: 600px;
        max-height: 100%;
    }
`

export const PostInfo = styled.div`
    background-color: #fff;
    height: 100%;
    width: 100%;
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    border-bottom: 1px solid lightgrey;
    padding: 15px;
`

export const Avatar = styled.div`
    margin-right: 15px;

    img {
        border-radius: 50%;
        width: 35px;
        height: 35px;
    }
`

export const CommentsSection = styled.section`
    display: flex;
    flex-direction: column;
    padding: 25px 15px 10px;
`

export const Caption = styled.div`
    display: flex;
    align-items: flex-start;
`

export const Username = styled.h2`
    font-size: 16px;
    font-weight: 600;
    margin-right: 10px;
`

export const Comment = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 30px;
`

export const Posted = styled.p`
    font-size: 12px;
    line-height: 16px;
    color: #8e8e8e;
    margin: 15px 0 25px 50px;
`

export const Text = styled.div`
    display: flex;
    align-items: flex-end;
`

export const CloseButton = styled.button`
    background: none;
    position: absolute;
    top: 30px;
    right: 30px;

    img:hover {
        filter: brightness(0.8);
    }
`
