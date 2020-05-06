import React from 'react';

import PageTitle from '../../components/PageTitle';
import styles from './styles.css';

export default function About(props) {
  return (
    <div className={styles.container}>
      <PageTitle title="About"/>
      <p>{props.data}</p>
    </div>
  )
}
