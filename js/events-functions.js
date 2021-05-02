import { baseUrl } from "./constants.js";
import { httpClient } from "./http-client.js";

export async function renderAllEvents(parentSelector) {
    parent = document.querySelector(parentSelector);
    const evts = await httpClient.get(`${baseUrl}/api/events`);
    evts.forEach(evt => parent.appendChild(renderEvt(evt)));
}

export async function renderConnectedEvents(parentSelector) {
    parent = document.querySelector(parentSelector);
    const evts = await httpClient.get(`${baseUrl}/api/events/connected`);
    evts.forEach(evt => parent.appendChild(renderEvt(evt)));
}

export async function renderMyEvents(parentSelector) {
    parent = document.querySelector(parentSelector);
    const evts = await httpClient.get(`${baseUrl}/api/events/organized`);
    evts.forEach(evt => parent.appendChild(renderMyEvt(evt)));
}

export async function mountEvtDetails(selector, id) {
    const elem = document.querySelector(selector);
    const newNode = await renderEvtDetails(id);
    elem.appendChild(newNode);
}

export async function renderEvtDetails(id) {
    const evt = await httpClient.get(`${baseUrl}/api/events/${id}`);

    let participantsList = '';
    evt.participants.forEach(x => participantsList += `<li class="list-group-item">${x.userName}</li>\n`);

    const newNode = document.createElement('div');
    newNode.classList = ['container'];
    newNode.innerHTML = `
    <div class="h1 py-2">${evt.name}</div>
    <div class="w-75">
        <dl class="row">
            <dt class="col-sm-2 p-3">
                Description
            </dt>
            <dd class="col-sm-10 p-3">
                ${evt.description}
            </dd>
            <dt class="col-sm-2 p-3">
                Date
            </dt>
            <dd class="col-sm-10 p-3">
                ${evt.eventDate}
            </dd>
        </dl>
        <div class="h5 pb-1">
            Participants
        </div>
        <ul class="list-group">
            ${participantsList}
        </ul>
    </div>`;

    return newNode;
}

export function renderEvt(evtModel) {
    const newNode = document.createElement('div');
    newNode.classList = ['col d-flex flex-items-stretch py-2'];
    newNode.innerHTML = `
    <div class="card border-dark w-100">
        <div class="card-body d-flex flex-column">
            <span class="h5 card-title">${evtModel.name}</span>
            <div class="card-text">${evtModel.description}</div>
            <a class="btn btn-outline-secondary w-100 mt-auto" href="./event-details.html?id=${evtModel.id}">Details</a>
        </div>
    </div>`;

    return newNode;
}

export function renderMyEvt(evtModel) {
    const newNode = document.createElement('div');
    newNode.classList = ['col d-flex flex-items-stretch py-2'];
    newNode.innerHTML = `
    <div class="card border-dark w-100">
        <div class="card-body d-flex flex-column">
            <span class="h5 card-title">${evtModel.name}</span>
            <div class="card-text">${evtModel.description}</div>
            <div class="btn-group mt-auto">
                <button class="btn btn-outline-secondary">Details</button>
                <a class="btn btn-outline-secondary" href="./event-edit.html">Edit</a>
            </div>
        </div>
    </div>`;

    return newNode;
}
