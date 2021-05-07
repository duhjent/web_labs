import { baseUrl } from "./constants.js";
import { parseJwt } from "./helpers.js";

const tokenName = 'authToken';

class AuthService {
    async authenticate(username, password) {
        const resp = await fetch(`${baseUrl}/api/users/login?username=${username}&password=${password}`, { method: 'GET' }).then(resp => {
            resp.text().then(token => {
                localStorage.setItem(tokenName, token);
            })
        });
    }

    isAuthenticated() {
        const token = localStorage.getItem(tokenName);
        if (!token) {
            return false;
        }
        const parsedToken = parseJwt(token);
        const expDateTime = new Date(parsedToken.exp);
        const result = expDateTime < Date.now();

        return result;
    }

    async register(registrationModel) {
        const url = `${baseUrl}/api/users`;
        var rawResp = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(registrationModel),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        var respText = await rawResp.text();
        localStorage.setItem(tokenName, respText);
    }

    getToken() {
        return localStorage.getItem(tokenName);
    }
}

export const authService = new AuthService();