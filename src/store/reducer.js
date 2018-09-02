const initialState = {
    post: [],
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH":
            return {
                ...state,
                loading: true
            };
        case "SUCCESS":
            let updatePost = [];

            for (let i in action.data) {
                let post = {
                    content: null,
                    time: null
                };
                //console.log(action.data[i].content);
                //console.log("-----");
                //console.log(action.data[i].id);
                post.content = action.data[i].content;
                post.time = action.data[i].id;
                updatePost.push(post);
            }
            //console.log(updatePost);
            return {
                ...state,
                post: updatePost,
                loading: false
            };
        default:
            return state;
    }
};

export default reducer;
