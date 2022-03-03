import React from "react"

export function checkImage(
    url: string,
    setIsImageExists: React.Dispatch<React.SetStateAction<boolean>>
) {
    const request = new XMLHttpRequest()
    request.open("GET", url, true)
    request.send()
    request.onload = () => {
        const status = request.status
        if (status == 200) {
            setIsImageExists(true)
        } else {
            setIsImageExists(false)
        }
    }
}
