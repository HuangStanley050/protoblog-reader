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


            for (let post in action.data) {
                let blog = { content: null, id: null };
                blog.content = action.data[post].content;
                blog.id = action.data[post].id;
                updatePost.push(blog);
            }

            console.log(updatePost);
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
