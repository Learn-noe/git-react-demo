'use strict';

import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {
    render() {

        // 从父组件得到数据
        let commentNodes = this.props.data.map((comments, index) => {
            console.log(comments,index);
            return (
                <Comment key={index} author={comments.author} data={comments.data}>{comments.text}</Comment>
            )
        })
        return (
            <div>
                {commentNodes}
            </div>
        );
    }
}

export { CommentList as default }