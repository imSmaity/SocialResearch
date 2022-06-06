
export const reducer=(state,action)=>{
    if(action.payload || !action.payload) return action;
    
    return state;
}