const initialState = {
    timerKey:0,
    timerOn:false
}

export const reduce = (state=initialState , action={})=>{
    if (action.type==='timer'){
        return {...state , timerKey:state.timerKey+1,timerOn:true};
    }
    else {
        return state;
    }
}

export const resolve = (state={apiResponse:''},action={})=>{
    switch(action.type){
        case 'apiSuccess':
            return {...state,apiResponse:action.payload};
        case 'apiFail':
            return state;
        case 'apiWaiting':
            return state;
        default : return state;
    }
}