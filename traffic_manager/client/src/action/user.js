
import Axios from '../axios'
export const loginUser= (username,password)=> async(dispatch)=>{
    try {
        dispatch({
            type:'loginRequest'
        })

        const response= await Axios.post('/login',{
           username: username,
           password: password
        },{
            Headers:{
                'Content-Type':'application/json',
                
            },
            
        })
        localStorage.setItem('token', response.data.token)

        dispatch({
            type:'loginSuccess',
            payload:response.data.user
        })
        
    } catch (error) {
        dispatch({
            type:'loginFailure',
            payload: error.message
        })
    }

}

export const loadUser=()=>async (dispatch)=>{

    try {
        
        dispatch({
            type: 'loadUserRequest'
        })

        const response= await Axios.post('/isloggedin',{
           token: `${localStorage.getItem('token')}`
        },{
            Headers:{
                'Content-Type':'application/json',
                
            },
            
        })

        dispatch({
            type: 'loadUserSuccess',
            payload: response.data
        })

    } catch (error) {
        dispatch({
            type:'loadUserFailure',
            payload: error.message
        })
    }
}

export const logoutUser=()=> async(dispatch)=>{

   try {
    dispatch({
        type:'logoutRequest'
    })

    localStorage.removeItem('token')
    dispatch({
        type:'logoutSuccess'
    })
    
   } catch (error) {
    dispatch({
        type:'logoutFailure',
        payload: error
    })
   }
}

export const signUpUser= (username,password)=> async(dispatch)=>{
    try {
        dispatch({
            type:'signupRequest'
        })

        const response= await Axios.post('/signup',{
           username: username,
           password: password
        },{
            Headers:{
                'Content-Type':'application/json',
                
            },
            
        })
        localStorage.setItem('token', response.data.token)

        dispatch({
            type:'signupSuccess',
            payload:response.data.user
        })
        
    } catch (error) {
        dispatch({
            type:'signupFailure',
            payload: error.message
        })
    }

}
