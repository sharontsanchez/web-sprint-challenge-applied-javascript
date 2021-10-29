  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

const Card = (article) => {
  // create the elements 
  let cardDiv = document.createElement('div');
  let headlineDiv = document.createElement('div');
  let authorDiv = document.createElement('div');
  let imgContainer = document.createElement('div');
  let image = document.createElement('img');
  let spanName = document.createElement('span');
  // assign class names 
  cardDiv.classList.add('card');
  headlineDiv.classList.add('headline');
  authorDiv.classList.add('author');
  imgContainer.classList.add('img-container');
  // text content 
  headlineDiv.textContent = `${article.headline}`;
  spanName.textContent = `${article.authorName}`;
    // set the image
  image.src =`${article.authorPhoto}`;
  // append the elements 
  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgContainer);
  imgContainer.appendChild(image);
  authorDiv.appendChild(spanName);
  // add event listener 
  cardDiv.addEventListener('click', ()=>{
    console.log(`${headlineDiv.textContent}`);
  });
  // deliver 
  return cardDiv;
  };// end of function 


  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
    
  import axios from 'axios';  
  const cardAppender = (selector) => {
  axios 
  .get("http://localhost:5000/api/articles")
  .then((res)=>{
    let dataKeys = Object.keys(res.data.articles);
    dataKeys.forEach(key => {
      let topicsTab = res.data.articles[`${key}`];
        topicsTab.forEach(article => {
          document.querySelector(selector).appendChild(Card(article));
        });
    });
  })
  // log the error 
  .catch(err => console.log(err));
  };

export { Card, cardAppender }
