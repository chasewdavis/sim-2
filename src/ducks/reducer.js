import axios from 'axios';
import axiosURL from '../url/url';

const initialState = {
    username: '',
    password: '',
    userid: -1,

    listings: [],
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
    switch (action.type) {
        case SET_USERNAME:
            let username = action.payload
            return Object.assign({}, state, { username })
        case SET_PASSWORD:
            let password = action.payload
            return Object.assign({}, state, { password })
        case LOGIN:
            axios.post(`${axiosURL}/login`, { username: state.username, password: state.password })
                .then(res => {
                    console.log(`successfully logged in ${res.data.username} with id ${res.data.userid}`)
                    console.log(state)
                    return Object.assign({}, state, { userid: action.payload })
                })
        case GET_PROPERTIES:
            axios.get(`${axiosURL}/getallproperties`)
                .then(res => {
                    console.log(res.data)
                    return Object.assign({}, state, { listings: res.data })
                })
        default:
            return state;
    }
}
