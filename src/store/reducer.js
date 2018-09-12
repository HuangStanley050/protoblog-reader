import * as actionType from "./actions/actiontypes";

const initialState = {
    post: [],
    loading: false,
    showPost: false,
    activeID: null,
    start: 0

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.FETCH:
            return {
                ...state,
                loading: true
            };
        case actionType.SUCCESS:
            let updatePost = [];


            for (let post in action.data) {
                let blog = { content: null, id: null };
                blog.content = action.data[post].content;
                blog.id = action.data[post].id;
                updatePost.push(blog);
            }

            //console.log(updatePost);
            return {
                ...state,
                post: updatePost,
                loading: false,


            };
        case actionType.SHOW_POST:
            return {
                ...state,
                showPost: true,
                activeID: action.postID
            };
        case actionType.TOGGLE:
            return {
                ...state,
                showPost: !state.showPost
            };
        case actionType.MOVE_POST:
            const post_len = state.post.length;
            let temp = state.start;
            if (state.start + 3 < post_len) {
                temp = state.start + 3;
            }
            return {
                ...state,
                start: temp
            };
        case actionType.MOVE_BACK:
            let initial = state.start;
            if (state.start - 3 >= 0) {
                initial = state.start - 3;
            }
            return {
                ...state,
                start: initial
            };

        default:
            return state;
    }
};

export default reducer;
