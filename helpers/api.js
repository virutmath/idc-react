import Profile from '../models/Profile';

export default class Api {
    /**
     *
     * @returns Profile
     */
    static async getProfile() {
        // const url = 'http://10.9.251.129:8001/';
        const url = 'http://192.168.43.134:8001/';
        try {
            let response = await fetch(url);
            let data = await response.json();
            return data;
        } catch (e) {
            return {error: 1, message: e.message};
        }
    }

    static async updateProfile(data) {
        const url = '';
        try {
            let response = await fetch(url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            let data = await response.json();
            return data;
        } catch (e) {
            return {error: 1, message: e.message}
        }
    }

    static async getLatestNews() {
        const url = 'http://192.168.43.134:8001/';
        try {
            let response = await fetch(url);
            let data = await response.json();
            return data;
        } catch (e) {
            return {error: 1, message: e.message}
        }
    }
}
