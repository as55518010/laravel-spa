export default{
    setTonken(token){
        window.localStorage.setItem('jwt_token',token);
    },
    getTonken(){
        return window.localStorage.getItem('jwt_token');
    },
    removeTonken(){
        window.localStorage.removeItem('jwt_token');
    }
}