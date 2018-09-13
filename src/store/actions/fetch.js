import axios from "axios";

const FETCH = "FETCH";
const SUCCESS = "SUCCESS";
const URL = "https://protoblog-7431f.firebaseio.com/posts.json";
const key = "AIzaSyBoVo7utsvfe-s5AFjs9M5nFtA1MumGfrE";
const auth_route = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=" + key;
const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const login_success = (token) => {
    return {
        type: LOGIN_SUCCESS,
        token: token
    };
};

export const login = () => {
    return dispatch => {

        axios.post(auth_route)
            .then(result => {
                console.log(result.data);
                dispatch(login_success(result.data.idToken));
            })
            .catch(err => console.log(err));
    };

};

export const fetchStart = () => {
    return {
        type: FETCH
    };
};

export const fetchSuccess = (data) => {
    return {
        type: SUCCESS,
        data: data
    };
};

export const fetch = () => {
    return dispatch => {
        axios.post(auth_route)
            .then(result => {
                //console.log(result.data);
                dispatch(login_success(result.data.idToken));
                return result.data.idToken;
            })
            .then(token => {
                dispatch(fetchStart());
                axios.get(URL + "?auth=" + token)
                    .then(result => {

                        dispatch(fetchSuccess(result.data));
                    })
            })
            .catch(err => console.log(err));
        //dispatch(fetchStart());

        /*axios.get(URL)
            .then(result => {

                dispatch(fetchSuccess(result.data));

            })
            .catch(err => console.log(err));*/
    };

};
