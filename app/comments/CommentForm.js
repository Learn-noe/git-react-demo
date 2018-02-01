'use strict';

import React from 'react';

class CommentForm extends React.Component {
    handleSubmit(event) {

        event.preventDefault();
        // console.log('提交表单。。。。');

        let author = this.refs.author.value,
            text = this.refs.text.value;

        // console.log(author,text);
        if (this.refs.author.value == '' || this.refs.text.value == '') {
            return false
        } else {
            this.props.onCommentSubmit({ author, text, data: '刚刚' });
        }
        this.refs.author.value = "";
        this.refs.text.value = "";
    }
    render() {
        return (
            <form className="ui reply form" onSubmit={this.handleSubmit.bind(this)}>
                <div className="filed">
                    <input type="text" placeholder="姓名" ref="author" />
                </div>
                <div className="filed">
                    <textarea placeholder="评论" ref="text"></textarea>
                </div>
                <button type="submit" className="ui blue button">
                    添加评论
                </button>
            </form>
        );
    }
}

export { CommentForm as default }