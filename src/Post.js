import { Avatar } from '@material-ui/core'
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined'
import ChatOutlined from '@material-ui/icons/ChatOutlined'
import ShareOutlined from '@material-ui/icons/ShareOutlined'
import SendOutlined from '@material-ui/icons/SendOutlined'
import React, { forwardRef } from 'react'
import InputOption from './InputOption'
import './post.css'


const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
    return (
        <div ref={ref} className="post">
            <div className="post__header">
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>

            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <InputOption Icon={ThumbUpAltOutlined} title='Like' color='gray'/>
                <InputOption Icon={ChatOutlined} title='Comment' color='gray'/>
                <InputOption Icon={ShareOutlined} title='Share' color='gray'/>
                <InputOption Icon={SendOutlined} title='Send' color='gray'/>

            </div>
        </div>
    )
})

export default Post
