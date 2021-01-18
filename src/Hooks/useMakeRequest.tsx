import React from 'react'
import { IReturnType } from '../types/ReturnType'
import { URL } from '../types/Url'

interface IOptions {
    method: 'POST' | 'PUT' | 'GET' | 'DELETE',
    headers?: any,
}

export default function useMakeRequesr() {

    // let name = 'daniel';
    
    const makeRequest = async(url: string, payload?: any, options?: IOptions): Promise<IReturnType> => {
        try {
            // check for network connctivity first
            const isOnline = window.navigator.onLine;
            if (isOnline) {
                if (options.method === 'GET') {
                    const request = await fetch(`${URL}${url}`, {
                        method: options.method,
                        headers: {...options.headers, 'content-type': 'application/json'},
                    })
                    const data = await request.json() as IReturnType;
                    return data;
                }else {
                    const request = await fetch(`${URL}${url}`, {
                        method: options.method,
                        headers: {...options.headers, 'content-type': 'application/json'},
                        body: JSON.stringify(payload)
                    })
                    const data = await request.json() as IReturnType;
                    return data;
                }
            }else {
                alert("There is no network Connection!")
            }
        } catch (error) {
            alert("an error occured, please try again.")
        }
    }
    return {
        makeRequest
    }
}
