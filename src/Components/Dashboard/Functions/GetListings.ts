import * as axios from 'axios';
import { IReturnType } from '../../../types/ReturnType';
import { URL } from '../../../types/Url'


export async function makeRequest(offset: number) {
    const request = await fetch(`${URL}/listings/all?offset=${offset}`);
    const result = await request.json() as IReturnType;
    if (!request.ok) {
        throw new Error("An Error occured while trying to fetch the listings.");
    }
    return result;
}

export async function getServices() {
    const request = await fetch(`${URL}/servicetype`);
    const result = await request.json() as IReturnType;
    if (!request.ok) {
        throw new Error("An Error occured while trying to fetch the listings.");
    }
    return result;
}

export async function getStats() {
    const request = await fetch(`${URL}/stats`);
    const result = await request.json() as IReturnType;
    if (!request.ok) {
        throw new Error("An Error occured while trying to fetch the listings.");
    }
    return result;
}

export async function getApproved(offset: number) {
    const request = await fetch(`${URL}/listings/approved?offset=${offset}`);
    const result = await request.json() as IReturnType;
    if (!request.ok) {
        throw new Error("An Error occured while trying to fetch the listings.");
    }
    return result;
}