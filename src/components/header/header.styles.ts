import styled from "styled-components"

export const Container = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    background-color: #ffffff;
    border-bottom: 1px solid #dbdbdb;
    display: flex;
`

export const Wrapper = styled.div`
    max-width: 975px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`
export const Logo = styled.img`
    height: 29px;
    margin-top: 12px;
    cursor: pointer;
`

export const Icons = styled.div`
    display: flex;
    align-items: center;
    width: 80px;
    justify-content: space-between;
`

export const Avatar = styled.button`
    background: none;
    border: none;
    img {
        height: 30px;
        width: 30px;
        border-radius: 50%;
        cursor: pointer;
        border: 1px solid #dbdbdb;
    }
`

export const DropdownMenu = styled.div`
    transform-origin: top center;
    transition: opacity 75ms linear, transform 38ms ease-out, -webkit-transform 38ms ease-out;
    opacity: 0;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 0 5px 1px rgb(0 0 0 / 10%);
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: column;
    z-index: 3;
    pointer-events: none;

    div {
        padding: 8px 16px;
        width: 230px;
        transition: all 0.22s;
        cursor: pointer;

        img {
            margin: 0 15px 0 0;
        }

        &:last-of-type {
            padding-bottom: 15px;
        }

        &:hover {
            background-color: #f6f6f6;
        }
    }
`

export const Dropdown = styled.div`
    position: relative;

    & > ${Avatar}:focus + ${DropdownMenu} {
        opacity: 1;
        transform: translateY(0);
    }
`

export const Button = styled.button<{ bg?: boolean }>`
    background: ${({ bg }) => (bg ? "#00a0f7" : "none")};
    color: ${({ bg }) => (bg ? "white" : "#00a0f7")};
    border: none;
`
