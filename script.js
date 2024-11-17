const carouselItem=document.querySelectorAll(".carousel-wrapper")


document.addEventListener('DOMContentLoaded', function() {
let options= {
  duration: 200,
  dist: -100,
  shift: 200,
  padding: 200,
  numnVisble: 5,
  fullWidth: false,
  indicators:true,
  noWrap: false,
  onCycleTo: null
}

  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems,options);
});

//Navigation
function toggleMenu() {
  const toggleMenu = document.querySelector(".toggleMenu")
  const navigation = document.querySelector(".navigation")
  toggleMenu.classList.toggle("active");
  navigation.classList.toggle("active");
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


fetch("product.json")
    .then((response) => response.json())
    .then((json) => {  
        for(let i=0; i<15; i++){
        //   carouselItem[i].textContent = json[i].name;
            let productName=document.createElement("p")
            let productPrice = document.createElement('p');
            let buyNowBtn = document.createElement('button')
        
            productName.textContent= json[i].name
            carouselItem[i].appendChild(productName)

            productPrice.textContent = json[i].price
            carouselItem[i].appendChild(productPrice)

            buyNowBtn.textContent = 'BUY NOW!'
            carouselItem[i].appendChild(buyNowBtn)

            }
    })
    .catch((error) => console.error("Error loading products:", error));


        

    