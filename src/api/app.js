import request from '../utils/request'

export const send = () => {
    return request({
        url: '/getJoke',
        method: 'get',
        params: {
            page: 1,
            count: 2,
            type: 'video'
        }
    })
}
