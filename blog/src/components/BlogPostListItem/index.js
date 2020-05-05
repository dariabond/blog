import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

export default function BlogPostListItem(props) {
  const {item} = props;
  return (
    <div className="listItem" key={item.id}>
      <Link to={`/recipes/${item.id}`}>
        <p className="title">{item.title}</p>
        <p className="date">{item.date}</p>
        <img className="thumbnail" src={item.titleImageUrl}/>
      </Link>
    </div>
  )
};
