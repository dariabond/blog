import React from 'react';

import './styles.css';

export default function PageTitle(props) {
  return (
    <div>
      <hr/>
      <p className="pageTitle">{props.title}</p>
    </div>
  )
}
