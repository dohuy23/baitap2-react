import React from 'react'
import Listproduct from './card/Listproduct'

const Section = () => {
  const product = [
      {
          id: 1,
          title: "Men's Tree Runner Go",
          detail: "Design offers enhanced durability in the toe and features a sleek, elevated look",
          person:45,
          daytime:"19-12-2018",
          thumbnail: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_474,f_auto,q_auto/https://www.allbirds.com/cdn/shop/products/TR3MJBK080_SHOE_ANGLE_GLOBAL_MENS_TREE_RUNNER_JET_BLACK_BLACK_b9019f8d-8b1c-4cfa-aea1-03592ec4fd23.png?v=1707178606",
      },
      {
          id: 2,
          title: "Men's Wool Runners",
          detail: "Warm and cozy ZQ Merino wool provides next-level comfort",
          person:25,
          daytime:"19-2-2008",
          thumbnail: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_474,f_auto,q_auto/https://www.allbirds.com/cdn/shop/products/Men_s_Wool_Runners_-_Natural_Grey__Light_Grey_Sole__-_imageAngle_94104832-0671-41b4-b561-3335d6de7090.png?v=1701808947",
      },
      {
          id: 3,
          title: "Men's Wool Runner",
          detail: "Water-repellent Puddle Guard® technology keeps feet dry",
          person:85,
          daytime:"1-9-2020",
          thumbnail: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_474,f_auto,q_auto/https://www.allbirds.com/cdn/shop/products/A10279M100-Wool_Runner_Mizzle-45-Global-Mens-Wool-Savanna_Night-Navy.png?v=1703567435",
      },
      {
        id: 4,
        title: "Men's Courier",
        detail: "Durable upper made with organic cotton and eucalyptus fiber",
        person:45,
        daytime:"1-9-2020",
        thumbnail: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_474,f_auto,q_auto/https://www.allbirds.com/cdn/shop/products/SKU_SHOE_45_GLOBAL_WOMENS_COURIER_NATURAL_BLACK_BLIZZARD_733816e7-f617-4767-82f4-f2cf12de4ec3.png?v=1692393417",
    },
    {
      id: 5,
      title: "Men's Tree Runner Go",
      detail: "Design offers enhanced durability in the toe and features a sleek, elevated look",
      person:45,
      daytime:"19-12-2018",
      thumbnail: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_474,f_auto,q_auto/https://www.allbirds.com/cdn/shop/products/TR3MJBK080_SHOE_ANGLE_GLOBAL_MENS_TREE_RUNNER_JET_BLACK_BLACK_b9019f8d-8b1c-4cfa-aea1-03592ec4fd23.png?v=1707178606",
  },
  {
      id: 6,
      title: "Men's Courier",
      detail: "Durable upper made with organic cotton and eucalyptus fiber",
      person:45,
      daytime:"1-9-2020",
      thumbnail: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_474,f_auto,q_auto/https://www.allbirds.com/cdn/shop/products/SKU_SHOE_45_GLOBAL_WOMENS_COURIER_NATURAL_BLACK_BLIZZARD_733816e7-f617-4767-82f4-f2cf12de4ec3.png?v=1692393417",
  },
  {
      id: 7,
      title: "Men's Wool Runner",
      detail: "Water-repellent Puddle Guard® technology keeps feet dry",
      person:85,
      daytime:"1-9-2020",
      thumbnail: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_474,f_auto,q_auto/https://www.allbirds.com/cdn/shop/products/A10279M100-Wool_Runner_Mizzle-45-Global-Mens-Wool-Savanna_Night-Navy.png?v=1703567435",
  },
  {
    id: 8,
    title: "Men's Courier",
    detail: "Durable upper made with organic cotton and eucalyptus fiber",
    person:45,
    daytime:"1-9-2020",
    thumbnail: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_474,f_auto,q_auto/https://www.allbirds.com/cdn/shop/products/SKU_SHOE_45_GLOBAL_WOMENS_COURIER_NATURAL_BLACK_BLIZZARD_733816e7-f617-4767-82f4-f2cf12de4ec3.png?v=1692393417",
},
    
  ];

  // check product co ton tai san pham khong
  // if(product.length == 0) return <h1>Loading.....</h1>





  return (
    <section className="py-5">
  <div className="container px-4 px-lg-5 mt-5">
    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
     {product.map((item)=>{

      return (
        <div className="col mb-5" key={item.id}>
       <Listproduct item={item} />
      </div>
      )
     })}
    </div>
  </div>
</section>

  
  )
}

export default Section