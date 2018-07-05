// Dummy Methods.

const LoginManager ={
    saveToken:(token)=>{
        localStorage.setItem('token',token)
    },
    clearToken:()=>{
        localStorage.removeItem('token')
    },
    getToken:()=>{
        return localStorage.getItem('token')
    },
    isLoggedIn:()=>{
        return localStorage.getItem('token') && localStorage.getItem('token').toString().length > 0
    }
}

export default LoginManager;