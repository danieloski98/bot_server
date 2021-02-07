import * as axios from 'axios';
import { IReturnType } from '../../../types/ReturnType';
import { URL } from '../../../types/Url'


export async function getStates() {
    const request = await fetch(`${URL}/states`);
    const result = await request.json() as IReturnType;
    if (!request.ok) {
        throw new Error("An Error occured while trying to fetch the listings.");
    }
    return result;
}
