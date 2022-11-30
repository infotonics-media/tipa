import { BLOG_UPDATE, PARTNER_UPDATE, IN_MOTION } from '../Actions/Action'

const initialState = {
    BlogPost: [],
    Partners: [],
    InMotion: []

}

const FetchApi = (state = initialState, action) => {
    switch (action.type) {
        case BLOG_UPDATE:
            return { ...state, BlogPost: action.data }
        case PARTNER_UPDATE:
            return { ...state, Partners: action.data }
        case IN_MOTION:
            return { ...state, InMotion: action.data }
        default:
            return state
    }
}

export default FetchApi