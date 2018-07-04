const LoggerMiddleWare = (store)=>{
    return (next)=>{
        return (action)=>{
            console.log("[Logger Middleware]",action,store);
            next(action);
        }
    }
}


export default LoggerMiddleWare;