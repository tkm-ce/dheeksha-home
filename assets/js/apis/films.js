

async function get_films(){
  // api call

  const container = document.getElementById("film_list_id");
  

  // article.appendChild(a_tag);
  const list=[
    {
      "name": "HELLARO",
      "desc": "A 2019 Indian Gujarati period drama film that revolves around 13 married woman living in the fictional village of samarpura whose lives are restricted to the four walls of their homes and the demands of their husbands. Manjiri an educated newly married bride is the first to question the  unfair system. She encourages the woman to make the garba dance their fight against patriarchy. The film is fraught with tension and an inevitable sense of danger as the woman gather in secret and celebrate their defiance.",
      "image": "https://i.imgur.com/Bvl2VbL.jpg",
      "id": ""
    },
    {
      "name": "LUCIA",
      "desc": "The film revolves around Nikki, an usher in theatre who deals with insomnia. To deal with his sleeping problems he starts consuming Lucia pills, a drug and starts seeing himself as Nikhil, a renowned actor in his dreams. The rest of the story is about how he draws a line between reality and his Lucid dreams.",
      "image": "https://i.imgur.com/otuR0zF.jpg",
      "id": ""
    },
    {
      "name": "MIRAGE",
      "desc": "A Spanish mystery drama which revolves around a woman Vera who experienced a space time continuum glitch wwhich allows her to get a chance solve a crime that happened 25 years ago. Only 72 hours to go and she has somehow lost her daughter and must also fight to get her back. Mirage combines a murder thriller with a time-travel, alternate-universe story.",
      "image": "https://i.imgur.com/0CJH44p.jpg",
      "id": ""
    },
    {
      "name": "RAW",
      "desc": "Raw is a French - Belgian coming of age horror drama film. The plot follows along Justine, a lifelong vegetarian who is forced to eat raw meat during her time in veterinary school. From then on, her life turns upside down as she develops a taste for meat. But as Justine gives into her yearnings in a way that’s drastically opposed to the philosophy under which she was raised, she becomes more brazen, yet also more confident and powerful in her femininity.",
      "image": "",
      "id": ""
    },
    {
      "name": "VARTHAMANAM",
      "desc": "Varthamanam is an Indian Malayalam-language social drama film directed by Sidhartha Siva, stars Parvathy Thiruvothu, Roshan Mathew and Siddique. The story revolves around Faiza who joins Delhi University as a research student. She gets acquainted with Amal and other students with a sharp political stance. However, the dynamics of campus life take new forms after the killing of her roommate's brother.",
      "image": "https://i.imgur.com/HoWAI8A.jpg",
      "id": ""
    },
    {
      "name": "ANOTHER ROUND",
      "desc": "Another Round is a black comedy-drama film directed by Thomas Vinterberg, starring Mads Mikkelsen, Thomas Bo Larsen, Magnus Millang, and Lars Ranthe. It was one of the most critically acclaimed movies of 2020, winning both the Oscar and the BAFTA. The story revolves around four high school teachers who drink alcohol on a daily basis to see how it affects their personal and professional lives.",
      "image": "",
      "id": ""
    },
    {
      "name": "SUICIDE SQUAD",
      "desc": "Suicide squad, an invigorating movie that follows a director Assembling a collection of cons. He arms them heavily and drops them on the remote, enemy-infused island of Corto Maltese. Trekking through a jungle teeming with militant adversaries and guerrilla forces at every turn, the Squad is on a search-and-destroy mission. A brilliant combination of comedy and grit the movie is a rollercoaster without breaks.",
      "image": "https://i.imgur.com/UHoJj7w.jpg",
      "id": ""
    },
    {
      "name": "DEADPOOL",
      "desc": "Based upon Marvel Comics’ most unconventional anti-hero, Deadpool tells the origin story of former Special Forces operative turned mercenary Wade Wilson, who after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life. A refreshing take on hero movies, Deadpool is neurotic and very entertaining. An innocent pleasure.",
      "image": "https://i.imgur.com/prAY4le.jpg",
      "id": ""
    },
    {
      "name": "SILENT VOICE",
      "desc": "Naoko Yamada's beguiling anime Silent Voice  demonstrates the effects of school bullying on both the bullied and the bullies. A young man is ostracized by his classmates after he bullies a deaf girl to the point where she moves away. Years later, he sets off on a path for redemption. Silent Voice is an emotional and beautiful movie that almost anyone can relate to in some shape or form",
      "image": "https://i.imgur.com/BatQefu.jpg",
      "id": ""
    },
    {
      "name": "FIVE FEET APART",
      "desc": "Seventeen-year-old Stella spends most of her time in the hospital as a cystic fibrosis patient. Her life is full of routines, boundaries and self-control -- all of which get put to the test when she meets Will, an impossibly charming teen who has the same illness. There's an instant flirtation, though restrictions dictate that they must maintain a safe distance between them. As their connection intensifies, so does the temptation to throw the rules out the window and embrace that attraction. A romantic drama which explores love and friendship , \"five feet apart\" is likely to pull on heartstrings in some unexpected places.",
      "image": "https://i.imgur.com/dpNxOjW.jpg",
      "id": ""
    },
    {
      "name": "KUMMATTY",
      "desc": "Myths exist in different cultures and are therefore culture specific\". Set in a village where the life of the people is closely related with their dependence upon myths and superstitions, the story tells about a trickster magician who transforms children into animals through sorcery. It has given  prominence to various aspects like friendship, freedom and the relationship between old and young. With sweet and engaging plot, it has perfectly captured the beautiful landscapes of Kerala and is indeed a film for both children and cinephiles.",
      "image": "https://i.imgur.com/Z5UYESD.jpg",
      "id": ""
    },
    {
      "name": "THE PLATFORM",
      "desc": "“The Platform” is a grisly, gnarly horror film directed by Galder Gaztelu-Urrutia. The film is set in a large, tower-style \"Vertical Self-Management Center.\" Its residents, who are switched every month between its many floors, are fed via a platform which, initially filled with food at the top floor, gradually descends through the tower's levels, stopping for a fixed amount of time on each. The system inevitably leads to conflict, as the residents at the top levels get to eat as much as they can, with each level getting only the leftovers from the previous ones. If you’re looking for a visceral work that doesn’t shy away from blood, filth, and questions about our existence, this one's for you.",
      "image": "https://i.imgur.com/1PfPNmG.jpg",
      "id": ""
    },
    {
      "name": "SALAAM BOMBAY",
      "desc": "Salaam bombay is the story of a 12-year-old street boy surviving and etching out an existence on the squalled streets of Bombay. After destroying his older brother's motorbike 11-year-old Krishna is sent to a traveling circus to earn money to pay for its repair cost, but soon winds up in the streets of Bombay's poorest slums. There, he befriends the drug dealer Chillum and the beautiful young prostitute Sola Saal, while trying to make enough money at a neighborhood tea stall to repay his debt and return home. Salaam Bombay sets the bar high with it's stunning cinematography and intriguing plot. Its documentary-like  film making style runs contrast to the movies of it's time making it a timeless piece.",
      "image": "https://i.imgur.com/x3W3p0m.jpg",
      "id": ""
    },
    {
      "name": "SOUL",
      "desc": "Life has meaning that goes beyond personal ambition\". Pete Docter conveys through his film Soul that, life is all about pursuing one's passion and cherishing each relationship formed throughout the journey. Trapped somewhere in between the 'Great Beyond' and the ' Great Before' the protagonist Joe Gardner feels he hasn't done much with his life and feels his was an untimely death. Accompanied by a little lost soul 22, Joe embarks on a journey to accomplish his personal passion. This Oscar winner film is indeed a treat to people of every age group.",
      "image": "https://i.imgur.com/EV5Cha6.jpg",
      "id": ""
    },
    {
      "name": "THE LOBSTER",
      "desc": "The Lobster,\" presents a dystopian world where being single is a criminal act. In this highly imaginative, delightfully absurdist comedy from visionary director Yorgos Lanthimos (Dogtooth), Colin Farrell stars as David, a man who has just been dumped by his wife. To make matters worse, David lives in a society where single people have 45 days to find true love, or else they are turned into the animal of their choice and released into the woods. At once a full immersion into a strange and surreal world, and a witty and clever reflection of our own society, The Lobster is a thrillingly audacious vision fully brought to life by Lanthimos and his terrific cast.",
      "image": "https://i.imgur.com/gOPFLGS.jpg",
      "id": ""
    },
    {
      "name": "GARUDA GAMANA VRISHABA VAHANA",
      "desc": "Garuda Gamana Vrishabha Vahana is a 2021 Indian Kannada-language gangster film written and directed by actor-director Raj B. Shetty. Raj B. Shetty and Rishab Shetty star in the lead roles. The film has received critical acclaim for its direction, story, and technical aspects. The movie is about two childhood friends, Shiva and Hari, who grow up to become two of the most feared gangsters in the coastal city of Mangaluru. However, greed and politics put their friendship to the test.",
      "image": "https://i.imgur.com/vLHn8NE.jpg",
      "id": ""
    }
  ]
  for (let i=0;i<list.length;i++){
    const article = document.createElement('article');

    const a_tag1 = document.createElement('a');

    const img_tag = document.createElement('img');
    img_tag.style.width="100%";
    // img_tag.style.borderRadius="15px";
    img_tag.style.overflow='scroll';
    img_tag.src=list[i].image;
    a_tag1.appendChild(img_tag);
    const h_tag = document.createElement('h3');
    h_tag.classList.add('major');
    h_tag.textContent=list[i].name;
    const p_tag =document.createElement('p');
    p_tag.textContent=list[i].desc;
    p_tag.style.textAlign='justify';
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