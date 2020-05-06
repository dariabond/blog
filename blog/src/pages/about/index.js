import React from 'react';

import styles from './styles.css';

export default function About(props) {
  return (
    <div className={styles.container}>
      <p>{props.data}</p>
    </div>
  )
}
