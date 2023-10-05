// utility.js

export const getAccessToken = () => {
    return sessionStorage.getItem('accessToken');
}

export const getRefreshToken = () => {
    return sessionStorage.getItem('refreshToken');
}

export const setAccessToken = (accessToken) => {
    sessionStorage.setItem('accessToken', accessToken);
}

export const setRefreshToken = (refreshToken) => {
    sessionStorage.setItem('refreshToken', refreshToken);
}

export const getType = (value, body) => {
    if (value.params) {
        return { params: body };
    } else if (value.query) {
        if (body && typeof body === 'object' && body._id) {
            return { query: body._id };
        } else {
            return { query: body };
        }
    }
    return {};
}
