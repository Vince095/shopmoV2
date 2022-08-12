import Repository, { basePostUrl, baseUrl, serializeQuery } from './Repository';

class AuthRepository {
    constructor(callback) {
        this.callback = callback;
    }
//get users  => /users
    async getUsers() {
        const endPoint = `users`;
        const reponse = await Repository.get(`${baseUrl}/${endPoint}`)
            .then((response) => {
                if (response.data.length > 0) {
                    return response.data;
                } else {
                    return null;
                }
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    //login user  => /auth/local
    async loginUser(identifier, password){

        const data = {
             identifier,
             password
        };
        const config = {
            withCredentials: false
        }

        const response = await Repository.post("http://127.0.0.1:1337/auth/local", data, config)
            .then((response)=>{
                localStorage.setItem('user',JSON.stringify(response))
                return JSON.stringify(response)
            })
            .catch((error) => {
               return JSON.stringify(error)
            });
            return response
    }

    //Register user  =>  /auth/local/register
    async registerUser(userData){

        const config = {
            headers: {
                'Content-Type': 'application/json'
               }
        }

        const endPoint = 'auth​/local/register';
        const response = await Repository.post(`http://localhost:1337/auth/local/register`, userData, config)
            .then((response)=>{
                return JSON.stringify(response)
            })
            .catch((error) => {
                return JSON.stringify(error)
            });
            return response
    }

    //upload media =>  /upload/
    async uploadImage(userData){

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': ' Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjU4NzU1MTE3LCJleHAiOjE2NjEzNDcxMTd9.EXMbRpHtQ3XRJkMCrLmoPzHueCYVvDqps0S-eJK7x8o'
            
            }
        }

        const endPoint = 'upload/';
        const response = await Repository.post(`http://localhost:1337/upload`, userData, config)
            .then((response)=>{
                return JSON.stringify(response)
            })
            .catch((error) => {
                return JSON.stringify(error)
            });
            return response
    }

    //get user location => /user/location
    async getUserLocation(){
            
            const endPoint = 'http://ip-api.com/json';
            const response = await Repository.get(endPoint)
                .then((response) => {
                    if (response.data.length > 0) {
                        return response.data;
                    } else {
                        return null;
                    }
                })
                .catch((error) => ({ error: JSON.stringify(error) }));
            return response;
        }

}

export default new AuthRepository();
