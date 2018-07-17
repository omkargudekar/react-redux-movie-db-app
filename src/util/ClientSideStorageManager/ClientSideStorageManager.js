import _ from 'lodash'
const ClientSideStorageManager = {
    localStorageManager: {
        setItem: (key, val) => {
            localStorage.setItem(key, val);
        },
        setItems: (obj) => {
            _.forEach(obj, (val, key) => {
                localStorage.setItem(key, val);
            })
        },
        getItem: (key) => {
            return localStorage.getItem(key);
        },
        getItems: (keys) => {
            let toReturn = {};
            _.forEach(keys, (key) => {
                toReturn[key] = localStorage.getItem(key);
            });
            return toReturn;
        }
    },
    sessionStorageManager: {
        setItem: (key, val) => {
            sessionStorage.setItem(key, val);
        },
        setItems: (obj) => {
            _.forEach(obj, (val, key) => {
                sessionStorage.setItem(key, val);
            })
        },
        getItem: (key) => {
            return sessionStorage.getItem(key);
        },
        getItems: (keys) => {
            let toReturn = {};
            _.forEach(keys, (key) => {
                toReturn[key] = sessionStorage.getItem(key);
            });
            return toReturn;
        }
    }
};

export default ClientSideStorageManager;