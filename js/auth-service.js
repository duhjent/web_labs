import { baseUrl } from "./constants.js";
import { parseJwt } from "./helpers.js";

const tokenName = 'authToken';

class AuthService {
    authenticate(username, password) {
        fetch(`${baseUrl}/api/users/login?username=${username}&passowrd=${password}`)
            .then(resp => resp.text().then(x => localStorage.setItem(tokenName, x)))
            .catch(err => {
                console.log(err);
                throw new 'Authentication error';
            });
    }

    isAuthenticated() {
        const token = localStorage.getItem(tokenName);
        const parsedToken = parseJwt(token);
        const expDateTime = new Date(parsedToken.exp);
        const result = token != null && expDateTime < Date.now();

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