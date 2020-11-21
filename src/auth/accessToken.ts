let accessToken = "";
export const setAccessToken = (token: string) => (accessToken = token);
export const getAccessToken = () => accessToken;

export const ROLE_USER = "ROLE_USER";
export const ROLE_ADMIN = "ROLE_ADMIN";
