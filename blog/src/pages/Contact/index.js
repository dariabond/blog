import React from 'react';

import PageTitle from '../../components/PageTitle';
import styles from './styles.css';

export default function Contact(props) {
  return (
    <div className={styles.container}>
      <PageTitle title="Contact"/>
      <p>{props.data.message}</p>
    </div>
  )
}
