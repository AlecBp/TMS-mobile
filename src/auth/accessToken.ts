let accessToken: string = "";
export const setAccessToken = (token: string) => (accessToken = token);
export const getAccessToken = (): string => accessToken;

export const ROLE_USER: string = "ROLE_USER";
export const ROLE_ADMIN: string = "ROLE_ADMIN";
