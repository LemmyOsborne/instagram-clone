import { IPhoto } from "interfaces/interfaces"
import React, { useState } from "react"
import {
    PhotoItem,
    PhotosContainer,
    PhotoOverlay,
    Photo,
    LikeStat,
    CommentStat,
} from "./profile.styles"

export const Photos: React.FC<{ photosCollection: IPhoto[] }> = ({ photosCollection }) => {
    return (
        <PhotosContainer>
            {photosCollection.map((photo) => (
                <PhotoItem key={photo.docId}>
                    <Photo src={photo.imageSrc} alt={photo.caption} />
                    <PhotoOverlay>
                        <LikeStat>
                            <img src="/images/overlay-like.svg" />
                            <span>{photo.likes.length} likes</span>
                        </LikeStat>
                        <CommentStat>
                            <img src="/images/comment-overlay.svg" />
                            <span>{photo.comments.length} comments</span>
                        </CommentStat>
                    </PhotoOverlay>
                </PhotoItem>
            ))}
        </PhotosContainer>
    )
}
