import axios from "axios";
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
