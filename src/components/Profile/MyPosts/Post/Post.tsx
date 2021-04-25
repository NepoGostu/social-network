import React from 'react';
import s from './Post.module.css'

type MyPostsType = {
    message: string
    likesCount: number
}

const Post = (props:MyPostsType) => {
    return (
        <div className={s.item}>
            <img src='https://d2skuhm0vrry40.cloudfront.net/2013/articles/1/7/7/0/3/2/5/e-se-as-heroinas-dos-videojogos-tivessem-corpos-mais-realistas-1437837874389.jpg/EG11/resize/1200x-1/e-se-as-heroinas-dos-videojogos-tivessem-corpos-mais-realistas-1437837874389.jpg' />
            {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;