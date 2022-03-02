import React, { useEffect, useState } from "react"
import { IUser } from "interfaces/interfaces"
import {
    Title,
    TitleWrapper,
    SmallText,
    SkeletonText,
    Container,
    SkeletonAvatar,
    Wrapper,
} from "./suggestions.styles"
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

    return profiles ? (
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
    ) : (
        <>
            <TitleWrapper>
                <Title>
                    <SkeletonText />
                </Title>
                <SmallText>
                    <SkeletonText />
                </SmallText>
            </TitleWrapper>
            <Container>
                {Array(5)
                    .fill("")
                    .map((_, index) => (
                        <React.Fragment key={index}>
                            <Wrapper style={{ alignItems: "flex-start" }}>
                                <SkeletonAvatar />
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        marginBottom: "15px",
                                    }}
                                >
                                    <Title style={{ width: "70px" }}>
                                        <SkeletonText />
                                    </Title>
                                    <Title style={{ width: "150px" }}>
                                        <SkeletonText />
                                    </Title>
                                </div>
                            </Wrapper>
                            <SmallText>
                                <SkeletonText />
                            </SmallText>
                        </React.Fragment>
                    ))}
            </Container>
        </>
    )
}
