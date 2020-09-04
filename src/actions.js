export const toggleTimer = ()=>{
    return ({
    type:'timer',
    payload:''
})}

export const requestAPI = (dispatch , url)=>{
    dispatch({ type: 'apiWaiting'});
    fetch(url)
    .then(response=> response.json())
    .then(data=>dispatch({type:'apiSuccess', payload:data}))
    .catch(error=>dispatch({type:'apiFail' , payload:error}))
}