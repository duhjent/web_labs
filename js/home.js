import { baseUrl } from "./constants.js";
import { renderEvt } from "./events-functions.js";
import { httpClient } from "./http-client.js";

export async function mountHome(selector) {
    const elem = document.querySelector(selector);
    const events = await httpClient.get(`${baseUrl}/api/events/top`);
    elem.appendChild(getHeaderElem());
    const evtsRow = getEvtsRow();
    elem.appendChild(evtsRow.parentElement);
    events.forEach(evt => {
        evtsRow.appendChild(renderEvt(evt))
    })
}

function getHeaderElem() {
    const headerElem = document.createElement('div');
    headerElem.innerHTML = `
    <div class="bg-light">
        <div class="container text-center pt-5 mb-3">
            <span class="h2 d-block pb-2">
                Welcome to web labs event management system homepage!)
            </span>
            <span class="h3">
                Top 5 events this week:
            </span>
        </div>
    </div>`;
    
    return headerElem;
}

function getEvtsRow() {
    const container = document.createElement('div');
    container.classList.add('container');
    const row = document.createElement('div');
    row.classList.add('row', 'row-cols-1', 'row-cols-md-2', 'row-cols-xl-3', 'row-cols-xxl-5');
    container.appendChild(row);
    return row;
}