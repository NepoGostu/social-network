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
            <img src='https://yt3.ggpht.com/ytc/AKedOLQTOrbuh25vkoon4ROhjjbJXX3jVrEaAYK6BDUB=s900-c-k-c0x00ffffff-no-rj' alt='post-photo' />
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