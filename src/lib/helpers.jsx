export const storeToken = (jwt) => {
  localStorage.setItem("dev-typing-gym-jwt", jwt);
};

export const getToken = () => localStorage.getItem("dev-typing-gym-jwt");

export const deleteToken = () => {
  localStorage.removeItem("dev-typing-gym-jwt");
};

export const host = import.meta.env.VITE_STRAPI_HOST;
