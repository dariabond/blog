import React from 'react';

import Recipe from '../../components/Recipe';

export default function BlogPost(props) {
  const data = blogPost;
  return (
    <div>
      <p>{data.name}</p>
      <Recipe data={data.recipe} name={data.name}/>
    </div>
  )
}

const blogPost = {
  name: "Vegan salted caramel pudding",
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
      url: ""
    },
    {
      type: "text",
      content: "Text content lorem ipsum"
    }
  ],
  rating: 4.5
}
