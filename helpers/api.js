import Profile from '../models/Profile';
export default class Api {
    /**
     *
     * @returns Profile
     */
    async getProfile(){
        const url = 'http://10.9.251.129:8001/';
        // const url = 'http://192.168.43.134:8001/';
        try {
            let response = await fetch(url);
            let data  = await response.json();
            return data;
        }catch (e) {
            console.error(e);
        }
    }
}
