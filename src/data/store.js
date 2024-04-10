import {reactive} from 'vue';

export const store = reactive({
 headerMenu:['Order Online', 'About', 'News', 'Contact Us',],

 menuDropdown:['Menu food', 'Menu drinks','Extra'],
 
 footerFont:['fa-brands fa-facebook-f', 'fa-brands fa-twitter', 'fa-brands fa-instagram', 'fa-brands fa-linkedin-in', 'fa-solid fa-wifi', 'fa-brands fa-youtube', 'fa-regular fa-envelope'],

 threecolumn:[
  
    {
      title: "INFORMATION",
      listone: "My account",
      listtwo: "Terms Of Service",
      listthree: "Privacy Policy",
      firstlogo: "../public/images/app-store-badge-200x67.png",
      secondlogo: "../public/images/play-store-badge-200x67.png",  
      
    }
  
  ],

 fivecolumn:[
  
    {
      title: "VOUCHER",
      logo: "../public/images/footer-coupon.png",
      listone: "Just Use The Code",
      listtwo: "FIRSORDER",
      listthree: "AtCheckout",
 
      
    }
  
  ]
})