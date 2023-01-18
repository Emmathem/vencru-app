import { LOGGER } from './Helpers';

// export const isUserLoggedIn = () => {
//     const token = getFromLocalStorage('access_key');
//     const user = getFromLocalStorage('user');
//     return !((token === null || !token) && !user);
// };

export const addToLocalStorage = (key, value) => {
    if (typeof value !== 'string') value = JSON.stringify(value);
    try {
        return localStorage.setItem(key, value);
    } catch (err) {
        LOGGER('storage error', err);
    }
};

export const getFromLocalStorage = (key) => {
    try {
        return localStorage.getItem(key);
    } catch (e) {
        return null;
    }
};

export const removeFromLocalStorage = (key) => {
    localStorage.removeItem(key);
};

export const emptyLocalStorage = () => {
    return localStorage.clear();
};

// Session Storage Helpers
export const addToSessionStorage = (key, value) => {
    if (typeof value !== 'string') value = JSON.stringify(value);
    try {
        return sessionStorage.setItem(key, value);
    } catch (err) {
        LOGGER('err', err);
    }
};

export const getFromSessionStorage = (key) => {
    try {
        return sessionStorage.getItem(key);
    } catch (e) {
        return null;
    }
};

export const removeFromSessionStorage = (key) => {
    return sessionStorage.removeItem(key);
};

export const emptySessionStorage = () => {
    sessionStorage.clear();
};
