export const storeToken = (jwt) => {
    localStorage.setItem("dev-typing-gym-jwt", jwt)
}

export const getToken = () => {
    return localStorage.getItem("dev-typing-gym-jwt")
}

export const deleteToken = () => {
    localStorage.removeItem("dev-typing-gym-jwt")
}