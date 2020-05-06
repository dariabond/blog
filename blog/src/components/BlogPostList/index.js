import React from 'react';

import BlogPostListItem from '../BlogPostListItem';
import styles from './styles.css';

export default function BlogPostList(props) {
  return (
    <div className={styles.container}>
      {props.items.map(item => (
        <BlogPostListItem setMenuOpen={props.setMenuOpen} item={item}/>
      ))}
    </div>
  )
}
