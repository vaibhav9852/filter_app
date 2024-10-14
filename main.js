let items = [ 
    {
        name:'Tshirt-1',
        type:'tshirt',
        size: 's',
        img:'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
    },
    {
        name:'Tshirt-2',
        type:'tshirt',
        size: 'm',
        img:'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
    },
    {
        name:'Tshirt-3',
        type:'tshirt',
        size: 'l',
        img:'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
    },
    {
        name:'Jeans-1',
        type:'jeans',
        size: 's',
        img:'https://rukminim2.flixcart.com/image/612/612/xif0q/jean/z/v/y/34-dl-men-baggy-62-denim-look-original-imah46n7wrs974gy.jpeg?q=70'
    },
    {
        name:'Jeans-2',
        type:'jeans',
        size: 'm',
        img:'https://rukminim2.flixcart.com/image/612/612/xif0q/jean/z/v/y/34-dl-men-baggy-62-denim-look-original-imah46n7wrs974gy.jpeg?q=70'
    },
    
    {
        name:'Jeans-3',
        type:'jeans',
        size: 'l',
        img:'https://rukminim2.flixcart.com/image/612/612/xif0q/jean/z/v/y/34-dl-men-baggy-62-denim-look-original-imah46n7wrs974gy.jpeg?q=70'
    },
    {
        name:'Tshirt-4',
        type:'tshirt',
        size: 's',
        img:'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
    },
    {
        name:'Tshirt-5',
        type:'tshirt',
        size: 'm',
        img:'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
    },
    {
        name:'Tshirt-6',
        type:'tshirt',
        size: 'l',
        img:'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
    },
    {
        name:'Jeans-4',
        type:'jeans',
        size: 's',
        img:'https://rukminim2.flixcart.com/image/612/612/xif0q/jean/z/v/y/34-dl-men-baggy-62-denim-look-original-imah46n7wrs974gy.jpeg?q=70'
    },
    {
        name:'Jeans-5',
        type:'jeans',
        size: 'm',
        img:'https://rukminim2.flixcart.com/image/612/612/xif0q/jean/z/v/y/34-dl-men-baggy-62-denim-look-original-imah46n7wrs974gy.jpeg?q=70'
    },
    
    {
        name:'Jeans-6',
        type:'jeans',
        size: 'l',
        img:'https://rukminim2.flixcart.com/image/612/612/xif0q/jean/z/v/y/34-dl-men-baggy-62-denim-look-original-imah46n7wrs974gy.jpeg?q=70'
    },
]



function  fetchProducts(products){
    
    let container = document.querySelector('.container')
    let cards =  document.createElement('div')

     cards.setAttribute('class','cards') 
     
    let card = document.querySelector('.card')

    products.map((item) =>{ 
       
        let card = document.createElement('div')
        let img = document.createElement('img')
        let p = document.createElement('p')
        card.setAttribute('class','card')
        img.src = item.img
        img.alt = `${item.name}`
         p.appendChild(document.createTextNode(`${item.name} - ${item.size}`))
         card.appendChild(img)
         card.appendChild(p)
         cards.appendChild(card)
         container.appendChild(cards)
    })
   
}

fetchProducts(items)

 let type = document.querySelector('#type')
 let size = document.querySelector('#size')
  
  let sizeValue;
  let typeValue;

 type.addEventListener('change',function(e){
      e.preventDefault()
    let cards = document.querySelector('.cards')
    cards.remove()
   
    
    typeValue =  type?.value?.trim().toLowerCase()
    sizeValue =  size?.value?.trim().toLowerCase() 
    console.log('1',type,size)
    let updatedItems = items.filter((item) => item.type == typeValue && item.size == sizeValue )
    fetchProducts(updatedItems)
 })


size.addEventListener('change',function(){
  

    let cards = document.querySelector('.cards')
    cards.remove()
   

    
    sizeValue =  size?.value?.trim().toLowerCase() 
    typeValue =  type?.value?.trim().toLowerCase() 
    console.log('2',typeValue,sizeValue)
    let updatedItems = items.filter((item) => item.type == typeValue && item.size == sizeValue)
     fetchProducts(updatedItems)
 })


let apply = document.querySelector('#apply')

apply.addEventListener('click',function(e){
    let cards = document.querySelector('.cards')
    cards.remove()
 
fetchProducts(items)

})