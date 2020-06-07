import { ADD_PHONELOOKUP } from './ActionTypes'

const initialState = {
    history: []
}
export function reducers(state = initialState,action) {
    console.log('in reducer '+ action.history)
    switch(action.type)
    {

        case ADD_PHONELOOKUP :


            return{
                ...state, 
                history: [...state.history, action.history]}

    }
    
    return state
}
   
/*case ADD_PHONELOOKUP :
            return{history:action.history} 
            console.log('exit reducer' + state)*/      

 export default reducers
