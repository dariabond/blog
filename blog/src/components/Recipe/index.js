import React from 'react';

import styles from './styles.css';

export default function Recipe({data, name}) {
  return (
    <div className={styles.recipeContainer}>
      <p className={styles.recipeHeader}>{name}</p>
      <div className={[styles.tags, styles.textContent, styles.section].join(' ')}>
        <ul>
          <li>Prep time: {data.prepTime}</li>
          <li>Cook time: {data.cookTime}</li>
          <li>Total time: {data.totalTime}</li>
          <li>Category: {data.category}</li>
        </ul>
      </div>
      <hr/>
      <div className={styles.section}>
        <p className={styles.sectionTitle}>Description</p>
        <p className={styles.textContent}>{data.description}</p>
      </div>
      <hr/>
      <div className={[styles.section, styles.ingredients].join(' ')}>
        <p className={styles.sectionTitle}>Ingredients</p>
        <ul className={[styles.textContent, styles.sectionList].join(' ')}>
          {data.ingredients.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
      <div className={[styles.section, styles.method].join(' ')}>
        <p className={styles.sectionTitle}>Method</p>
        <ol className={[styles.textContent, styles.sectionList].join(' ')}>
          {data.method.map(item => (
            <li>{item}</li>
          ))}
        </ol>
      </div>
      <hr/>
      <div className={[styles.section, styles.notes].join(' ')}>
        <p className={styles.sectionTitle}>Notes</p>
        <ul className={[styles.textContent, styles.sectionList].join(' ')}>
          {data.notes.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
