
 // Import GSAP and ScrollTrigger these are plugins that help move the header all over the place
 //the gsap is something for CDN (content delivery network)
 import { gsap } from "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
 import { ScrollTrigger } from "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js";
 
 // Register ScrollTrigger plugin
 gsap.registerPlugin(ScrollTrigger);
 
 // Log a message to confirm the script is running
 console.log("this thing works. If I dont show up something has gone really wrong");
 
 // Header animation: This is that 1 second swoop down it does
 gsap.from("header", {
   duration: 1,
   y: '-100%',
   ease: "bounce"
 });
 
 // Navigation links animation: Think of this as a continuation of the one above its an animation that will only happen for like 1 second with the rest of the header
 gsap.from("nav a", {
   duration: 1,
   opacity: 0,
   delay: 0.5,
   stagger: 0.2,
   y: -20
 });
 
 //this is the part that moves while we scroll down and up the page. But disappears when we get to the Hero section of the program
 gsap.from(".menu-section", {
   duration: 1,
   opacity: 0,
   y: 50,
   stagger: 0.3,
   scrollTrigger: {
     trigger: ".menu-section",
     scroller: window,
     start: "top 80%",
     end: "bottom 20%",
     scrub: 1,
   }
 });