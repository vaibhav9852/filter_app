let items = [ 
    {
        name:'Tshirt-1',
        type:'tshirt',
        size: 's',
        img:'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/j/p/v/l-os-100-vdorgnl-nvy-veirdo-original-imah256cvtzjwn5r.jpeg?q=70'
    },
    {
        name:'Tshirt-2',
        type:'tshirt',
        size: 'm',
        img:'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/j/j/p/s-jj-oversize-s-houseofcommon-original-imah3zztsgbgrun4.jpeg?q=70'
    },
    {
        name:'Tshirt-3',
        type:'tshirt',
        size: 'l',
        img:'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/o/z/u/l-mickey-3008-veirdo-original-imah4gzg2ndznd24.jpeg?q=70'
    },
    {
        name:'Jeans-1',
        type:'jeans',
        size: 's',
        img:'https://rukminim2.flixcart.com/image/612/612/xif0q/jean/b/g/m/36-dl-men-baggy-01-denim-look-original-imahffwvmvy7bgwp.jpeg?q=70'
    },
    {
        name:'Jeans-2',
        type:'jeans',
        size: 'm',
        img:'https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-jean/y/g/x/28-spy-dl-men-baggy-14-denim-look-original-imah2gfabus6cnzh.jpeg?q=70'
    },
    
    {
        name:'Jeans-3',
        type:'jeans',
        size: 'l',
        img:'https://rukminim2.flixcart.com/image/612/612/k70spzk0/jean/g/y/y/30-hljn000880-highlander-original-imafpchpcbyy79zh.jpeg?q=70'
    },
    {
        name:'Tshirt-4',
        type:'tshirt',
        size: 's',
        img:'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/h/s/l/l-kaezri-bl-tshirt-l-kaezri-original-imagyvjhvbdgdutg.jpeg?q=70'
    },
    {
        name:'Tshirt-5',
        type:'tshirt',
        size: 'm',
        img:'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/d/v/q/s-os-100-navy-veirdo-original-imahfpkkzj2hrjyw.jpeg?q=70'
    },
    {
        name:'Tshirt-6',
        type:'tshirt',
        size: 'l',
        img:'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/b/n/z/xl-men-waffle-knit-ds-beige-madfrog-original-imahfhszza4phwa6.jpeg?q=70'
    },
    {
        name:'Jeans-4',
        type:'jeans',
        size: 's',
        img:'https://rukminim2.flixcart.com/image/612/612/xif0q/jean/f/x/k/30-phjn000054-highlander-original-imah3fw3bhgasfw5.jpeg?q=70'
    },
    {
        name:'Jeans-5',
        type:'jeans',
        size: 'm',
        img:'https://rukminim2.flixcart.com/image/612/612/xif0q/jean/o/p/a/42-fmjen4054b-flying-machine-original-imah3g4cyegxrgre.jpeg?q=70'
    },
    
    {
        name:'Jeans-6',
        type:'jeans',
        size: 'l',
        img:'https://rukminim2.flixcart.com/image/612/612/xif0q/jean/o/v/v/32-udjeno0660-u-s-polo-association-original-imaggjjuh2fncwvk.jpeg?q=70'
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