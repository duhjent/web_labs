import { navItems } from "./constants.js";
import { authService } from "./auth-service.js";

export function mountHeader(elemId, headerUri) {
    fetch(headerUri)
        .then(
            resp => {
                resp.text()
                    .then(respText => {
                        document.querySelector(`#${elemId}`).innerHTML = respText;
                        navItems.forEach(item => {
                            if (window.location.href.includes(item)) {
                                document.querySelector(`#${item}`).classList.add('active');
                            }
                        });
                        if (authService.isAuthenticated()) {
                            document.querySelector(`#logged-in`).style.display = 'flex';
                        } else {
                            document.querySelector('#not-logged-in').style.display = 'flex';
                        }
                    });
            }
        );
}