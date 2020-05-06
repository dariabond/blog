import React from 'react';

import BlogPostList from '../../components/BlogPostList';
import PageTitle from '../../components/PageTitle';
import styles from './styles.css';

export default function Recipes(props) {
  return (
    <div>
      <PageTitle title="Recipes"/>
      <BlogPostList title="This is recipes page" items={items} setMenuOpen={props.setMenuOpen}/>
    </div>
  )
}

const items = [
  {
    id: 0,
    title: "Delicious custard cake",
    date: "1 Sep 2019",
    titleImageUrl: 'https://i1.wp.com/www.wallflourgirl.com/wp-content/uploads/2018/04/Custard-Filled_Victoria_Sponge_Cake_042218_1.jpg'
  },
  {
    id: 1,
    title: "Best fudgy brownies",
    date: "1 Sep 2019",
    titleImageUrl: 'https://thestayathomechef.com/wp-content/uploads/2018/02/Best-Brownies-1-small.jpg'
  },
  {
    id: 2,
    title: "Delicious custard cake",
    date: "1 Sep 2019",
    titleImageUrl: 'https://i1.wp.com/www.wallflourgirl.com/wp-content/uploads/2018/04/Custard-Filled_Victoria_Sponge_Cake_042218_1.jpg'
  },
  {
    id: 3,
    title: "Delicious custard cake",
    date: "1 Sep 2019",
    titleImageUrl: 'https://i1.wp.com/www.wallflourgirl.com/wp-content/uploads/2018/04/Custard-Filled_Victoria_Sponge_Cake_042218_1.jpg'
  },
  {
    id: 4,
    title: "Delicious custard cake",
    date: "1 Sep 2019",
    titleImageUrl: 'https://i1.wp.com/www.wallflourgirl.com/wp-content/uploads/2018/04/Custard-Filled_Victoria_Sponge_Cake_042218_1.jpg'
  },
  {
    id: 5,
    title: "Delicious custard cake",
    date: "1 Sep 2019",
    titleImageUrl: 'https://i1.wp.com/www.wallflourgirl.com/wp-content/uploads/2018/04/Custard-Filled_Victoria_Sponge_Cake_042218_1.jpg'
  },
  {
    id: 6,
    title: "Delicious custard cake",
    date: "1 Sep 2019",
    titleImageUrl: 'https://i1.wp.com/www.wallflourgirl.com/wp-content/uploads/2018/04/Custard-Filled_Victoria_Sponge_Cake_042218_1.jpg'
  }
]
