import { IPhoto } from "interfaces/interfaces"
import React from "react"
import { Photo, PhotosContainer } from "./profile.styles"

export const Photos: React.FC<{ photosCollection: IPhoto[] }> = ({ photosCollection }) => {
    return (
        <PhotosContainer>
            {photosCollection.map((photo) => (
                <Photo key={photo.docId} src={photo.imageSrc} alt={photo.caption} />
            ))}
        </PhotosContainer>
    )
}
