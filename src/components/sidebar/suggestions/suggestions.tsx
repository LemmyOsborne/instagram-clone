import React, { useEffect, useState } from "react"
import { IUser } from "interfaces/interfaces"
import { Title, TitleWrapper, SmallText } from "./suggestions.styles"
import { getSuggestedProfiles } from "services/firebase"
import { SuggestedProfiles } from "./suggested-profiles"

interface ISuggestions {
    loggedUserDocId: string
    loggedUserId: string
    following: string[]
}

export const Suggestions: React.FC<ISuggestions> = ({
    loggedUserDocId,
    loggedUserId,
    following,
}) => {
    const [profiles, setProfiles] = useState<IUser[]>()

    useEffect(() => {
        async function suggestedProfiles() {
            const profiles = await getSuggestedProfiles(loggedUserId, following)
            setProfiles(profiles)
        }

        if (loggedUserDocId) {
            suggestedProfiles()
        }
    }, [loggedUserId])

    return (
        <>
            <TitleWrapper>
                <Title>Suggestions for you</Title>
                <SmallText>See All</SmallText>
            </TitleWrapper>
            {profiles?.map(({ fullName, username, docId, userId, followers }) => (
                <SuggestedProfiles
                    key={docId}
                    username={username}
                    fullName={fullName}
                    loggedUserDocId={loggedUserDocId}
                    loggedUserId={loggedUserId}
                    loggedUserFollowing={following}
                    profileDocId={docId}
                    profileId={userId}
                    profileFollowers={followers}
                />
            ))}
        </>
    )
}
