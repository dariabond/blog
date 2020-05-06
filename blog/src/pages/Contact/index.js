import React from 'react';

import styles from './styles.css';

export default function Contact(props) {
  return (
    <div className={styles.container}>
      <p>{props.data.message}</p>
    </div>
  )
}
