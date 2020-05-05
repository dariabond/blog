import React from 'react';

import Recipe from '../../components/Recipe';

export default function BlogPost(props) {
  return (
    <div>
      <Recipe/>
    </div>
  )
}

const blogPost = {
  name: "Vegan salted caramel pudding",
  recipe: {},
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
