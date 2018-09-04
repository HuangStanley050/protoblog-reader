import axios from "axios";

const FETCH = "FETCH";
const SUCCESS = "SUCCESS";
const URL = "https://protoblog-7431f.firebaseio.com/posts.json";

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
        dispatch(fetchStart());
        axios.get(URL)
            .then(result => {
                //console.log(result.data);
                dispatch(fetchSuccess(result.data));

            })
            .catch(err => console.log(err));
    };

};
