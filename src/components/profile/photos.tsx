import { IPhoto } from "interfaces/interfaces"
import React, { useState } from "react"
import { Popup } from "./popup/popup"
import {
    PhotoItem,
    PhotosContainer,
    PhotoOverlay,
    Photo,
    LikeStat,
    CommentStat,
} from "./profile.styles"

export const Photos: React.FC<{ photosCollection: IPhoto[] }> = ({ photosCollection }) => {
    const [popup, setPopup] = useState<IPhoto | null>({} as IPhoto)

    return (
        <PhotosContainer>
            {photosCollection.map((photo) => (
                <React.Fragment key={photo.docId}>
                    <PhotoItem onClick={() => setPopup(photo === popup ? null : photo)}>
                        <Photo src={photo.imageSrc} alt={photo.caption} />
                        <PhotoOverlay>
                            <LikeStat>
                                <img src="/images/overlay-like.svg" />
                                <span>
                                    {photo.likes.length} <p>likes</p>
                                </span>
                            </LikeStat>
                            <CommentStat>
                                <img src="/images/comment-overlay.svg" />
                                <span>
                                    {photo.comments.length} <p>comments</p>
                                </span>
                            </CommentStat>
                        </PhotoOverlay>
                    </PhotoItem>
                    <>{popup === photo && <Popup photo={photo} setPopup={setPopup} />}</>
                </React.Fragment>
            ))}
        </PhotosContainer>
    )
}
