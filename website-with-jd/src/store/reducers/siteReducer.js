const defaultState = {
    posts: [],
    postCount: 0 
}

const site = (state = defaultState, action) => {

    switch (action.type) {
        case 'GOT_POST_COUNT':
            return {
                ...state,
                postCount: action.payload
            }
        case 'GOT_SITE_POSTS' :
            return {
                ...state,
                posts: action.payload.skip ? state.posts.concat(action.payload) : action.payload
            }
        default:
            return state
    }
}

export default site