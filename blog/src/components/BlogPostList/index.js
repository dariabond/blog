import React from 'react';

import BlogPostListItem from '../BlogPostListItem';
import './styles.css';

export default function BlogPostList(props) {
  return (
    <div className='container'>
      {props.items.map(item => (
        <BlogPostListItem item={item}/>
      ))}
    </div>
  )
}
