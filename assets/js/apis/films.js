

async function get_films(){
  // api call

  const container = document.getElementById("film_list_id");
  

  // article.appendChild(a_tag);
  const list=[
    {
      image:"images/pic06.jpg",
      name:"something",
      desc:"this is a film awsome.",
      id:"9827"
    },
    {
      image:"images/pic06.jpg",
      name:"something",
      desc:"this is a film awsome.",
      id:"9827"
    },
    {
      image:"images/pic06.jpg",
      name:"something",
      desc:"this is a film awsome.",
      id:"9827"
    },
    {
      image:"images/pic06.jpg",
      name:"something",
      desc:"this is a film awsome.",
      id:"9827"
    },
    {
      image:"images/pic06.jpg",
      name:"something",
      desc:"this is a film awsome.",
      id:"9827"
    },
    {
      image:"images/pic06.jpg",
      name:"something",
      desc:"this is a film awsome.",
      id:"9827"
    },
    {
      image:"images/pic06.jpg",
      name:"something",
      desc:"this is a film awsome.",
      id:"9827"
    },
    {
      image:"images/pic06.jpg",
      name:"something",
      desc:"this is a film awsome.",
      id:"9827"
    },
  ]
  for (let i=0;i<4;i++){
    const article = document.createElement('article');
    const a_tag1 = document.createElement('a');
    a_tag1.classList.add('image')
    const img_tag = document.createElement('img');
    img_tag.src=list[i].image;
    a_tag1.appendChild(img_tag);
    const h_tag = document.createElement('h3');
    h_tag.classList.add('major');
    h_tag.textContent=list[i].name;
    const p_tag =document.createElement('p');
    p_tag.textContent=list[i].desc;
    const a_tag2=document.createElement('a');
    a_tag2.classList.add('special');    
    a_tag2.textContent="register now";
    a_tag2.href=list[i].id
    article.appendChild(a_tag1);
    article.appendChild(h_tag);
    article.appendChild(p_tag);
    article.appendChild(a_tag2);
    container.appendChild(article);
  }
}

get_films()