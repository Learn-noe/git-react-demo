'use strict';

import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import $ from 'jquery';


class CommentBox extends React.Component {
    //构造函数
    constructor(props) {
        super(props);
        this.state = { data: [] };
        //调用获取接口的数据
        this.getComments();
        //服务端的定时更新
        // setInterval(()=>this.getComments(),5000);
    }
    handleCommentSubmit(comments) {
        //把更新的数据拼接到旧的数组上
        const newDate = this.state.data.concat(comments)
        this.setState({
            data: newDate
        });

    }

    getComments() {
        $.ajax({
            //父级接收的服务器的接口
            url: this.props.url,
            dataType: 'json',
            //缓存            
            cache: false,
            success: comment => {
                console.log(comment);
                //设置状态
                this.setState({ data: comment });
            },
            error: (xhr, status, error) => {
                console.log(error);
            }
        });
    }
    //向服务端请求数据放到状态里面   this.state组件私有的状态  this.setState设置状态
    render() {
        return (
            <div className="ui comments">
                <h1>评论</h1>
                <div className="ui divider"></div>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
            </div>
        );
    }
}


export { CommentBox as default };