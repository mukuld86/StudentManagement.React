import { jwtDecode } from "jwt-decode";

export const getUserRole = () => {
    const token = sessionStorage.getItem("token");
    if (!token) {
        return null;
    }
    try {
        const decodedToken = jwtDecode(token);
        return decodedToken.role ||
            decodedToken[
            "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
            ];
    } catch (error) {
        console.log(error);
        return null;
    }
};