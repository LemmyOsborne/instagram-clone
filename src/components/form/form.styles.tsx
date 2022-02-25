import styled from "styled-components"

export const Container = styled.div`
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Wrapper = styled.div`
    width: 100%;
    background-color: white;
    border: solid 1px #dddada;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
    margin-bottom: 10px;
`

export const Base = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const Logo = styled.img`
    width: 50%;
    margin: 2rem 0 1rem;
`

export const Input = styled.input`
    width: 75%;
    min-height: 40px;
    margin-bottom: 10px;
    border: solid 1px #e8e8e8;
    background-color: #f6f6f6;
    border-radius: 4px;
    overflow: hidden;
    padding: 9px 0 7px 8px;
    text-overflow: ellipsis;

    &::placeholder {
        color: #afacb7;
    }
`

export const Button = styled.button`
    width: 75%;
    background-color: #00a0f7;
    color: white;
    font-weight: 600;

    &:disabled {
        cursor: default;
        opacity: 0.3;
    }
`

export const Divider = styled.span`
    display: flex;
    align-items: center;
    margin: 20px 0 30px;
    width: 75%;
    font-size: 12px;
    font-weight: 600;
    color: grey;

    &::before {
        content: "";
        display: inline-block;
        width: 40%;
        height: 1px;
        margin-right: 15px;
        background-color: lightgray;
    }
    &::after {
        content: "";
        display: inline-block;
        width: 40%;
        height: 1px;
        margin-left: 15px;
        background-color: lightgray;
    }
`

export const FacebookLogin = styled.a`
    color: #5c5f97;
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 20px;

    img {
        width: 15px;
        height: auto;
        margin-right: 10px;
    }
`

export const ForgotPassword = styled.span`
    color: #5c5f97;
    font-size: 12px;
    cursor: pointer;
`

export const LoginSignupRedirect = styled.div`
    width: 350px;
    background-color: white;
    border: solid 1px #dddada;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    font-size: 14px;

    a {
        color: #00a0f7;
        font-weight: 600;
        margin-left: 5px;
    }
`

export const Bottom = styled.div`
    display: flex;
    flex-direction: column;

    span {
        font-size: 14px;
        margin: 20px auto;
        width: auto;
    }

    div {
        display: flex;
        justify-content: center;
    }

    img {
        height: 40px;
        cursor: pointer;
        display: inline;

        &:first-of-type {
            margin-right: 10px;
        }
    }
`

export const Error = styled.span`
    color: #ffb72b;
    font-size: 14px;
    margin: 10px 0;
`

export const Text = styled.h2`
    color: #8e8e8e;
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 10px;
    text-align: center;
`

export const SmallText = styled.p`
    color: #8e8e8e;
    font-size: 12px;
    text-align: center;
    margin: 20px 0;
    width: 75%;
    line-height: 1.5;

    span {
        font-weight: 600;
    }
`
