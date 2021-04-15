import axios from 'axios';
import { OnlineRoot, RootPath } from './Config';

const Get = (path, root) => () => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${root ? OnlineRoot : RootPath}/${path}`) //Operator ternari
            .then((result) => {
                resolve(result.data);
            }, (e) => {
                reject(e)
            })
    })
    return promise;
}

export default Get;