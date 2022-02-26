import React from "react"
import Skeleton from "react-loading-skeleton"
import { Link } from "react-router-dom"
import styled from "styled-components"

interface IUserComponent {
    username?: string
    fullName?: string
}

export const User: React.FC<IUserComponent> = ({ fullName, username }) => {
    return !username || !fullName ? (
        <Skeleton count={1} height={61} />
    ) : (
        <Container>
            <Link to={`/p/${username}`}>
                <img src={`/images/avatars/${username}.jpg`} />
            </Link>
            <Link to={`/p/${username}`}>
                <p>{username}</p>
                <p>{fullName}</p>
            </Link>
            <span>Switch</span>
        </Container>
    )
}

const Container = styled.div`
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
