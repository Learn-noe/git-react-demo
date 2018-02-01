'use strict'

import 'semantic-ui/semantic.min.css!';
import React from 'react';
import ReactDom from 'react-dom';
import CommentBox from './comments/CommentBox';

ReactDom.render(
  //模拟 从服务器接受的数据
  <CommentBox url="app/comment.json" />,
  document.getElementById('app')
);
