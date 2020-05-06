import React from 'react';
import {Link} from 'react-router-dom';

import styles from './styles.css';

export default function BlogPostListItem(props) {
  const {item} = props;
  return (
    <div className={styles.listItem} key={item.id}>
      <Link to={`/recipes/${item.id}`} onClick={() => props.setMenuOpen(false)}>
        <p className={styles.title}>{item.title}</p>
        <p className={styles.date}>{item.date}</p>
        <img className={styles.thumbnail} src={item.titleImageUrl}/>
      </Link>
    </div>
  )
};
