/* eslint-disable indent */
import { db } from "firebase/firebase"
import {
    collection,
    query,
    where,
    getDocs,
    updateDoc,
    doc,
    arrayUnion,
    arrayRemove,
} from "firebase/firestore"
import { IPhoto, IUser } from "interfaces/interfaces"

export const doesUsernameExist = async (username: string) => {
    const q = query(collection(db, "users"), where("username", "==", username))
    const querySnapshot = await getDocs(q)

    return querySnapshot.docs.length > 0
}

export const getUserById = async (userId: string) => {
    const q = query(collection(db, "users"), where("userId", "==", userId))
    const querySnapshot = await getDocs(q)
    const loggedUser = querySnapshot.docs.map((doc) => ({
        ...(doc.data() as IUser),
        docId: doc.id,
    }))

    return loggedUser
}

export const getSuggestedProfiles = async (docId: string, following: string[]) => {
    const q = query(collection(db, "users"), where("userId", "!=", docId))
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs
        .map((doc) => ({
            ...(doc.data() as IUser),
            docId: doc.id,
        }))
        .filter((profile) => !following.includes(profile.userId))
}

export const updateLoggedUserFollowing = async (
    loggedUserDocId: string,
    profileId: string,
    isFollowing: boolean
) => {
    const loggedUserRef = doc(db, "users", loggedUserDocId)
    !isFollowing
        ? await updateDoc(loggedUserRef, {
              following: arrayUnion(profileId),
          }).then(() => console.log("add to following"))
        : await updateDoc(loggedUserRef, {
              following: arrayRemove(profileId),
          }).then(() => console.log("remove from following"))
}

export const updateFollowedUserFollowing = async (
    loggedUserId: string,
    profileDocId: string,
    isFollowers: boolean
) => {
    const loggedUserRef = doc(db, "users", profileDocId)
    !isFollowers
        ? await updateDoc(loggedUserRef, {
              followers: arrayUnion(loggedUserId),
          }).then(() => console.log("add to followers"))
        : await updateDoc(loggedUserRef, {
              followers: arrayRemove(loggedUserId),
          }).then(() => console.log("remove from followers"))
}

export const getPhotos = async (following: string[]) => {
    const q = query(collection(db, "photos"), where("userId", "in", following))
    const querySnapshot = await getDocs(q)
    const userFollowedPhotos = querySnapshot.docs.map((doc) => ({
        ...(doc.data() as IPhoto),
        docId: doc.id,
    }))

    const photosWithUserDetails = await Promise.all(
        userFollowedPhotos.map(async (photo) => {
            const user = await getUserById(photo.userId)

            const { username } = user[0]

            return { username, ...photo }
        })
    )

    return photosWithUserDetails
}

export const updateLike = async (
    userId: string,
    docId: string,
    toggleLike: boolean | undefined
) => {
    const loggedUserRef = doc(db, "photos", docId)
    await updateDoc(loggedUserRef, {
        likes: toggleLike ? arrayUnion(userId) : arrayRemove(userId),
        userLikedPhoto: toggleLike ? true : false,
    })
}

export const updateComments = async (displayName: string, comment: string, docId: string) => {
    const loggedUserRef = doc(db, "photos", docId)
    await updateDoc(loggedUserRef, {
        comments: arrayUnion({ comment, displayName }),
    })
}

export const getUserByUsername = async (username: string | undefined) => {
    const q = query(collection(db, "users"), where("username", "==", username))
    const querySnapshot = await getDocs(q)
    const LoggedUser = querySnapshot.docs.map((doc) => ({
        ...(doc.data() as IUser),
        docId: doc.id,
    }))

    return LoggedUser[0]
}

export const getPhotosByUserId = async (userId: string) => {
    const q = query(collection(db, "photos"), where("userId", "==", userId))
    const querySnapshot = await getDocs(q)

    return querySnapshot.docs.map((doc) => ({
        ...(doc.data() as IPhoto),
        docId: doc.id,
    }))
}
