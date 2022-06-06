export const initialState=()=>{
    const user=JSON.parse(localStorage.getItem('sorech'))
    if(user===null) return {payload:false}
    else return user
};