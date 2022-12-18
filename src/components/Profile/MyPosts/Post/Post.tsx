import React from 'react';
import styles from './Post.module.css';

type PostPropsType = {
    id: string
    message: string
    time: string
    liked: boolean
    likesCount: number
    like: (postID: string) => void
    unlike: (postID: string) => void
}

const Post = (props: PostPropsType) => {
    return (
        <div className={styles.postItemWrapper}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921' alt='loading' />
            <div className={styles.postItem}>
                {props.message}
                <div className={styles.postLikeTimeWrapper}>
                    <div className={styles.postLike}>
                        {
                            props.liked
                                ? <button onClick={() => { props.unlike(props.id) }}>
                                    <img src='https://iconarchive.com/download/i102621/graphicloads/flat-finance/dislike.ico' alt='like' style={{ width: '20px', height: '20px' }} />
                                </button>
                                : <button onClick={() => props.like(props.id)}>
                                    <img src='https://cdn.worldvectorlogo.com/logos/facebook-like.svg' alt='dislike' style={{ width: '20px', height: '20px' }}/>
                                </button>
                        }
                        <span>{props.likesCount}</span>
                    </div>

                    <div className={styles.postTime}>
                        {props.time}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Post;