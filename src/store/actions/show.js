const SHOW_POST = "SHOW_POST";

export const show = (id) => {
    return {
        type: SHOW_POST,
        postID: id
    };
};
