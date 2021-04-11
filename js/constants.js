export const baseUrl = 'http://localhost:5000';
export const homePage = 'home.html';
export const navItems = ['home', 'events', 'users'];
export const headerHtml = 
`<nav class="navbar navbar-dark navbar-expand-lg bg-dark">
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
            </ul>
        </div>
    </div>
</nav>`;