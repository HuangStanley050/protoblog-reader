const initialState = {
    post: [],
    loading: false,
    showPost: false,
    activeID: null,
    start: 0

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
        case "SHOW_POST":
            return {
                ...state,
                showPost: true,
                activeID: action.postID
            };
        case "TOGGLE":
            return {
                ...state,
                showPost: !state.showPost
            };

        default:
            return state;
    }
};

export default reducer;
