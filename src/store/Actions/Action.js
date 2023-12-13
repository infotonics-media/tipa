//Action Type
export const BLOG_UPDATE = "BLOG_UPDATE";
export const PARTNER_UPDATE = "PARTNER_UPDATE";
export const IN_MOTION = "IN_MOTION";

//ACTION

export const blogUpdate = (value) => {
    return {
        type: BLOG_UPDATE,
        data: value
    }
}

export const partnerUpdate = (value) => {
    return {
        type: PARTNER_UPDATE,
        data: value
    }
}


export const inMotion = (value) => {
    return {
        type: IN_MOTION,
        data: value
    }
}
