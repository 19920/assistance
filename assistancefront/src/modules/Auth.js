class Auth{
    static authenticateToken(token){
        sessionStorage.setItem('token',token);

    }
    static isUserAuthenticated(token){
        return sessionStorage.setItem('token',token) !== null;
    }
    static deauthenticateUser(){
        sessionStorage.removeItem('token');
    }
    static getToken(){
        return sessionStorage.getItem('token');

    }

}
export default Auth;