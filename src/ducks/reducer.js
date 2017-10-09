import axios from 'axios';
import axiosURL from '../url/url';

const initialState = {
    username: '',
    password: '',
    userid: -1,

    listings: [{}, {}],
    rentFilter: 0,
    rentInput: 0
}

const LOGIN = 'LOGIN'
const SET_USER_ID = 'SET_USER_ID'
const SET_USERNAME = 'SET_USERNAME'
const SET_PASSWORD = 'SET_PASSWORD'

const GET_PROPERTIES = 'GET_PROPERTIES'
const FILTER_RENT = 'FILTER_RENT'
const SET_FILTER = 'SET_FILTER'

export function login() {
    return {
        type: LOGIN,
    }
}

export function setUsername(payload) {
    return {
        type: SET_USERNAME,
        payload
    }
}

export function setPassword(payload) {
    return {
        type: SET_PASSWORD,
        payload
    }
}

export function getProperties() {
    return {
        type: GET_PROPERTIES
    }
}

export function filterRent() {
    return {
        type: FILTER_RENT,
    }
}

export function setFilter(payload) {
    return {
        type: SET_FILTER,
        payload
    }
}

export default function reducer(state = initialState, action) {
    let finalState = {}
    switch (action.type) {
        case SET_USERNAME:
            let username = action.payload
            finalState = Object.assign({}, state, { username })
            break;
        case SET_PASSWORD:
            let password = action.payload
            finalState = Object.assign({}, state, { password })
            break;
        case LOGIN:
            axios.post(`${axiosURL}/login`, { username: state.username, password: state.password })
                .then(res => {
                    console.log(`successfully logged in ${res.data.username} with id ${res.data.userid}`)
                    finalState = Object.assign({}, state, { userid: res.data.userid })
                    // axios.get(`${axiosURL}/getallproperties`)
                    //     .then(res => {
                    //         console.log(res.data)
                    //         finalState = Object.assign({}, newState, { listings: res.data })
                    //         console.log(finalState)                            
                    //     })
                })
            break;
        case GET_PROPERTIES:
            
            break;
        default:
            finalState = state;
    }
    //console.log(finalState)
    return finalState
}
