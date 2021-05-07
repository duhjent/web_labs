import { navItems } from "./constants.js";
import { authService } from "./auth-service.js";

export function mountHeader(elemId) {
    document.querySelector(`#${elemId}`).innerHTML = getHeader();
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
}

function getHeader() {
    return `<nav class="navbar navbar-dark navbar-expand-lg bg-dark">
    <div class="container">
        <div class="navbar-collapse justify-content-between">
            <ul class="navbar-nav px-2">
                <li class="nav-item"><a class="nav-link" id="home" href="./home.html">Home</a></li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="javascript:void(0)" id="events"
                        role="button" data-bs-toggle="dropdown">
                        Events
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="events">
                        <li><a class="dropdown-item" href="./all-events.html">All Events</a></li>
                        <li><a class="dropdown-item" href="./connected-events.html">Connected Events</a></li>
                        <li><a class="dropdown-item" href="./my-events.html">My Events</a></li>
                    </ul>
                </li>
                <li class="nav-item"><a class="nav-link" id="users" href="./users.html">Users</a></li>
            </ul>
            <ul class="navbar-nav px-2" id="not-logged-in" style="display: none;">
                <li class="nav-item"><a class="nav-link" href="./register.html">Register</a></li>
                <li class="nav-item"><a class="nav-link" href="./login.html">Log In</a></li>
                <li class="nav-item"><a class="nav-link" href="./logout.html">Log Out</a></li>
            </ul>
            <ul class="navbar-nav px-2" id="logged-in" style="display: none;">
                <li class="nav-item"><a href="./profile.html" class="nav-link">Profile</a></li>
                <li class="nav-item"><a class="nav-link" href="./logout.html">Log Out</a></li>
            </ul>
        </div>
    </div>
</nav>`;
}