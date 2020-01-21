let cart = [];


let data = [
    {
     name : 'Channel Bag',
     Desc: 'Fine thing leather',
     Price: '$ 20' ,
     id: 1
    },
    {
     name : 'Louis Vuitton shoe',
     Desc: 'African solid Leather',
     Price: '$ 25' ,
     id: 2
    },
    {
     name : 'Nike Shirt',
     Desc: 'Pure cotton',
     Price: '$ 5',
     id: 3 
    },
    {
     name : 'Lacosste Head warmer',
     Desc: 'Clean wool',
     Price: '$ 10' ,
     id:4
    },
    {
     name : 'Versace Traveling Bag',
     Desc: 'Pure leather',
     Price: '$ 56' ,
     id: 5
    },
    {
     name : 'Cowboy Trousers',
     Desc: 'Thick jean',
     Price: '$ 30',
     id: 6 
    },
    {
     name : 'Channel  scarf',
     Desc: 'Pure cutton',
     Price: '$ 4' ,
     id: 7
    },
    {
     name : 'Gucci Slides',
     Desc: 'Clean leather',
     Price: '$ 21',
     id: 8 
    },
    {
     name : 'Local dress',
     Desc: 'thick wool',
     Price: '$ 40' ,
     id: 9
    },
];

var products = {
    1 : {
      name : "MokBook Ground",
      desc : "Greatest properly off ham exercise all.",
      img : "smiley-1.png",
      price : 2034
    },
    2 : {
      name : "MokBook Casual",
      desc : "Unsatiable invitation its possession nor off.",
      img : "smiley-2.png",
      price : 1247
    },
    3 : {
      name : "iPong Max",
      desc : "All difficulty estimating unreserved increasing the solicitude.",
      img : "smiley-3.png",
      price : 675
    },
    4 : {
      name : "iTab Pork",
      desc : "Had judgment out opinions property the supplied. ",
      img : "smiley-4.png",
      price : 842
    }
  };

  function addToCart(){
    console.log('hiiii')
  }

window.addEventListener('load', () => {
    var container = document.getElementById("cart-products");
    htmlElements = '';
    data.map(item => {
      htmlElements += `
      <div class="col-lg-4">
      <div class="card m-2" style="width: 18rem;">
      <img src="assets/background-blurred-background-bright-1100779.jpg" class="card-img-top" alt="item image">
      <div class="card-body">
      <p class="card-text">${item.name}</p>
          <h5>${item.Price}</h5>
        <button type="button" onClick="addToCart()" class="btn btn-md btn-default">ADD TO CART</button>
      </div>
      </div>
  </div>
`
    })
    container.innerHTML = htmlElements;
})



