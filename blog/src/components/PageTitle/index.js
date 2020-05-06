import React from 'react';

import styles from './styles.css';

export default function PageTitle(props) {
  return (
    <div>
      <hr/>
      <p className={styles.pageTitle}>{props.title}</p>
    </div>
  );
}
