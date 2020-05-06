import React from 'react';

import styles from './styles.css';

import Recipe from '../../components/Recipe';

export default function BlogPost(props) {
  const data = blogPost;
  return (
    <div className={styles.container}>
      <p className={styles.date}>{data.date}</p>
      <p className={styles.title}>{data.name}</p>
      <div>
        {data.content.map(item => {
          if (item.type == "image") {
            return <img className={styles.photo} src={item.url}/>
          } else if (item.type == "text") {
            return <p className={styles.paragraph}>{item.content}</p>
          }
        })}
      </div>
      <Recipe data={data.recipe} name={data.name}/>
    </div>
  )
}

const blogPost = {
  name: "Vegan salted caramel pudding",
  date: "10 June 2020",
  recipe: {
    name: "Vegan salted caramel pudding",
    category: "Desserts",
    prepTime: "5 minutes",
    cookTime: "18 minutes",
    totalTime: "23 minutes",
    description: "Creamy custard clouds that have only 6 ingredients, take less then 30 minutes to make",
    tags: [
      'custard',
      'pudding',
      'caramel'
    ],
    ingredients: [
      '1 Tbsp sugar',
      '2 Tsp love',
      '10 Tbsp hugs',
      '200 g flour',
      '100 ml coconut butter',
      '10 Tbsp liqour'
    ],
    method: [
      'Combine 1/2 cup of the coconut milk, coconut sugar and 1/4 tsp of salt into a saucepan on high heat. Bring to a boil, then turn down the heat until it’s a high simmer. Continue to cook, stirring constantly throughout until it thickens slightly and becomes darker in colour. Mine takes about 13 minutes overall.',
      'Take the pot off the heat and whisk in the cornflour until smooth, making sure there aren’t any lumps. Whisk in the remaining 1/2 cup of coconut milk, almond milk and vanilla extract and place the pot on medium to high heat.',
      'Make sure to stir regularly, I like to use a heat resistant silicone spatula for this. The custard will start to form first on the bottom, when you notice this happening, give it a whisk to make sure the custard stays smooth (continue to whisk now and then). When it starts to thicken, turn down the heat to low. Still stirring regularly, keep cooking until it’s a thick custard consistency. Mine takes about 5 minutes.',
      'Tap the bottom to remove any air bubbles and pour the custard into 2 ramekins. Cover with cling wrap avoiding air bubbles on top as best as you can. Set aside until it has cooled slightly, then refrigerate for 3 hours. (see notes above for an alternative option and the one I used for the photos).',
      'Sprinkle with flaked sea salt. I like to add whipped coconut cream and a little more caramel sauce.',
    ],
    notes: [
      'Note 1. Wake up early in the morning, smell fresh flowers, look at the beautiful sun, turn the Tchaikovskys Pa De Deux on while cooking. '
    ]
  },
  content: [
    {
      type: "image",
      url: 'https://i1.wp.com/www.wallflourgirl.com/wp-content/uploads/2018/04/Custard-Filled_Victoria_Sponge_Cake_042218_1.jpg'
    },
    {
      type: "text",
      content: "These Vegan Salted Caramel Puddings were inspired by my Vegan Salted Caramel Tart. They make a great option for when you don’t want to make a whole tart, but still want a creamy caramel dessert!"
    },
    {
      type: "image",
      url: 'https://thestayathomechef.com/wp-content/uploads/2018/02/Best-Brownies-1-small.jpg'
    },
    ,
    {
      type: "text",
      content: "It’s really easy too. You make a caramel sauce then add 3 more ingredients to make it into a creamy dessert."
    },
    {
      type: "image",
      url: 'https://i1.wp.com/www.wallflourgirl.com/wp-content/uploads/2018/04/Custard-Filled_Victoria_Sponge_Cake_042218_1.jpg'
    },
    {
      type: "text",
      content: "1. After the custard is cooked, pour this into a heatproof bowl and tap the bottom to remove any air bubbles. Cover with cling wrap avoiding any air bubbles on top as best as you can. This is to prevent the skin from forming. Set aside until it has cooled slightly, then refrigerate for an hour. This sets it slightly. Give it a whisk until it’s smooth again. You can then add it to whatever you’d like to serve it in. When doing so you can create a pattern on top like the photos have. To me, this looks a little bit nicer, say if you’re serving it for an occasion but this is purely for presentation and not necessary! Then refrigerate for a further 2 hours."
    },
    {
      type: "text",
      content: "2. If you’re not too fussed, then this option is for you. After the custard is cooked, pour it directly into ramekins. Cover with cling wrap avoiding air bubbles as best as you can. Set aside until it has cooled slightly and refrigerate for 3 hours to set. I’ve used this option for the recipe card as it’s the easiest. The photos I have used are option 1."
    },
  ],
  rating: 4.5
}
