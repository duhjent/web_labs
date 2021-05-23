import { authService } from "./auth-service.js";

class HttpClient {
    async get(url) {
        const resp = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${authService.getToken()}`
            }
        });

        if (resp.status === 401) {
            // window.location.replace('login.html');
        }

        const respObj = await resp.json();

        return respObj;
    }

    async post(url, reqBody) {
        const resp = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authService.getToken()}`
            },
            body: JSON.stringify(reqBody)
        })

        const respBody = await resp.json();

        return respBody;
    }

    async put(url, reqBody) {
        const resp = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authService.getToken()}`
            },
            body: JSON.stringify(reqBody)
        })

        const respBody = await resp.json();

        return respBody;
    }

    async delete(url) {
        const resp = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${authService.getToken()}`
            }
        });

        const respObj = await resp.json();

        return respObj;
    }
}

export const httpClient = new HttpClient();