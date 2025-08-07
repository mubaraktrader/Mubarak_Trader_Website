// //Scroll kembali keatas
// let mybutton = document.getElementById("myBtn");

// window.onscroll = function () {
//   scrollFunction();
// };
// function scrollFunction() {
//   if (document.documentElement.scrollTop > 300) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// function topFunction() {
//   document.documentElement.scrollTop = 0;
// }

// //Ketik
// var typed = new Typed(".auto-typed", {
//   strings: ["Reliability","Power","Performance","MTC Quality","Durability"],
//   typeSpeed: 100,
//   backSpeed: 100,
//   loop: true,
// });

// //Scroll muncul satu persatu
// window.addEventListener("scroll", muncul);
// function muncul() {
//   let elements = document.querySelectorAll(".naik");
//   for (let i = 0; i < elements.length; i++) {
//     let tinggiLayar = window.innerHeight;
//     let jarakAtasElemen = elements[i].getBoundingClientRect().top;
//     let ukuranScroll = 5;

//     if (jarakAtasElemen < tinggiLayar - ukuranScroll) {
//       elements[i].classList.add("tampil");
//     } else {
//       elements[i].classList.remove("tampil");
//     }
//   }
// }

// const spans = document.querySelectorAll("h1 span");
// spans.forEach((span) =>
//   span.addEventListener("mouseover", function (e) {
//     span.classList.add("animated", "rubberBand");
//   })
// );
// spans.forEach((span) =>
//   span.addEventListener("mouseout", function (e) {
//     span.classList.remove("animated", "rubberBand");
//   })
// );

// // WhatsApp button handler
// document.addEventListener('DOMContentLoaded', () => {
//   document.querySelectorAll('.btn-primary.btn-rounded').forEach(button => {
//     button.addEventListener('click', function () {
//       // Find the closest parent container with the product name in an h3
//       const parentContainer = this.closest('.row');
//       const productName = parentContainer.querySelector('h3')?.textContent.trim() || 'this product';
//       const phoneNumber = '923203023729'; // Provided WhatsApp number
//       const message = `Hello, what's the price of the product "${productName}"?`;
//       const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
//       window.open(whatsappUrl, '_blank'); // Open WhatsApp in a new tab
//     });
//   });
// });

// //second code
// //Scroll kembali keatas
// let mybutton = document.getElementById("myBtn");

// window.onscroll = function () {
//   scrollFunction();
// };
// function scrollFunction() {
//   if (document.documentElement.scrollTop > 300) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// function topFunction() {
//   document.documentElement.scrollTop = 0;
// }

// //Ketik
// var typed = new Typed(".auto-typed", {
//   strings: ["Reliability","Power","Performance","MTC Quality","Durability"],
//   typeSpeed: 100,
//   backSpeed: 100,
//   loop: true,
// });

// //Scroll muncul satu persatu
// window.addEventListener("scroll", muncul);
// function muncul() {
//   let elements = document.querySelectorAll(".naik");
//   for (let i = 0; i < elements.length; i++) {
//     let tinggiLayar = window.innerHeight;
//     let jarakAtasElemen = elements[i].getBoundingClientRect().top;
//     let ukuranScroll = 5;

//     if (jarakAtasElemen < tinggiLayar - ukuranScroll) {
//       elements[i].classList.add("tampil");
//     } else {
//       elements[i].classList.remove("tampil");
//     }
//   }
// }

// const spans = document.querySelectorAll("h1 span");
// spans.forEach((span) =>
//   span.addEventListener("mouseover", function (e) {
//     span.classList.add("animated", "rubberBand");
//   })
// );
// spans.forEach((span) =>
//   span.addEventListener("mouseout", function (e) {
//     span.classList.remove("animated", "rubberBand");
//   })
// );

// // WhatsApp button handler - Only for "For Price Contact Here" button
// document.addEventListener('DOMContentLoaded', () => {
//   const phoneNumber = '923203023729'; // Your WhatsApp number
  
//   // Handle "For Price Contact Here" buttons only
//   document.querySelectorAll('.btn-primary.btn-rounded').forEach(button => {
//     button.addEventListener('click', function () {
//       // Find the product name in the h4 with class box-title
//       const parentContainer = this.closest('.card-body');
//       const productNameElement = parentContainer.querySelector('h4.box-title');
//       const productName = productNameElement ? productNameElement.textContent.trim() : 'this product';
      
//       // Create message for WhatsApp (this will be automatically sent)
//       const message = `Hello, I'm interested in "${productName}". Please provide the price and availability details.`;
      
//       // Use WhatsApp API URL that sends message directly
//       const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
//       window.open(whatsappUrl, '_blank');
//     });
//   });
// });

//third code
//Scroll kembali keatas
document.addEventListener('DOMContentLoaded', () => {
  // Only run scroll function if myBtn element exists
  let mybutton = document.getElementById("myBtn");
  
  if (mybutton) {
    window.onscroll = function () {
      scrollFunction();
    };
    
    function scrollFunction() {
      if (document.documentElement.scrollTop > 300) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
  }
  
  // Top function - only if button exists
  window.topFunction = function() {
    document.documentElement.scrollTop = 0;
  }

  // Typing animation - only run if Typed library is loaded and element exists
  if (typeof Typed !== 'undefined' && document.querySelector(".auto-typed")) {
    var typed = new Typed(".auto-typed", {
      strings: ["Reliability","Power","Performance","MTC Quality","Durability"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });
  }

  //Scroll muncul satu persatu - only if elements exist
  function muncul() {
    let elements = document.querySelectorAll(".naik");
    if (elements.length > 0) {
      for (let i = 0; i < elements.length; i++) {
        let tinggiLayar = window.innerHeight;
        let jarakAtasElemen = elements[i].getBoundingClientRect().top;
        let ukuranScroll = 5;

        if (jarakAtasElemen < tinggiLayar - ukuranScroll) {
          elements[i].classList.add("tampil");
        } else {
          elements[i].classList.remove("tampil");
        }
      }
    }
  }

  // Add scroll listener only if elements exist
  if (document.querySelectorAll(".naik").length > 0) {
    window.addEventListener("scroll", muncul);
  }

  // Span animation - only if h1 spans exist
  const spans = document.querySelectorAll("h1 span");
  if (spans.length > 0) {
    spans.forEach((span) =>
      span.addEventListener("mouseover", function (e) {
        span.classList.add("animated", "rubberBand");
      })
    );
    spans.forEach((span) =>
      span.addEventListener("mouseout", function (e) {
        span.classList.remove("animated", "rubberBand");
      })
    );
  }

  // WhatsApp button handler - Only for "For Price Contact Here" button
  const phoneNumber = '923203023729'; // Your WhatsApp number
  
  // Handle "For Price Contact Here" buttons only
  const priceButtons = document.querySelectorAll('.btn-primary.btn-rounded');
  if (priceButtons.length > 0) {
    priceButtons.forEach(button => {
      button.addEventListener('click', function () {
        // Find the product name in the h4 with class box-title
        const parentContainer = this.closest('.card-body');
        if (parentContainer) {
          const productNameElement = parentContainer.querySelector('h4.box-title');
          const productName = productNameElement ? productNameElement.textContent.trim() : 'this product';
          
          // Create message for WhatsApp (this will be automatically sent)
          const message = `Hello, I'm interested in "${productName}". Please provide the price and availability details.`;
          
          // Use WhatsApp API URL that sends message directly
          const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
          window.open(whatsappUrl, '_blank');
        }
      });
    });
  }
});