const btnParent = document.querySelector('.intro__bottom');
const btnMove   = btnParent.querySelector('.intro__btn');

btnMove.addEventListener('click', (e) => {
  e.preventDefault();
  const move   = btnMove.getAttribute('href').replace('#', '');
  const moveTo = document.getElementById(move);
  moveTo.scrollIntoView({
    behavior: 'smooth'
  });
});

let tl = gsap.timeline();

tl.from(".intro__title", {duration: 0.8, y: 120, opacity: 0})
  .from(".intro__subtitle", {duration: 0.6, y: 50, opacity: 0}, "-=0.2")
  .from(".header", {duration: 0.8, y: -160, opacity: 0}, "-=0.2")
  .from("._deco-1", {duration: 0.7, x: 80, scaleX: 0}, "-=0.2")
  .from("._deco-2", {duration: 0.7, x: 0, scale: 0}, "-=0.4")
  .from(btnParent, {duration: 0.8, rotation: 360, scale: 0, onComplete: function() {
    if (window.innerHeight < 750) {
      btnParent.classList.add('_active-sml');
    } else {
      btnParent.classList.add('_active');
    }
  }}, "-=0.3")

gsap.registerPlugin(ScrollTrigger);

let new2Tl = gsap.timeline({defaults: {duration: 1}, scrollTrigger: {
  trigger: ".benefits",
  start: "top bottom-=350px"
}})
  .from(".benefits__top-title", {
    x: -200,
    opacity: 0
  })
  .from(".benefits__top-anth-lang ", {
    x: 200,
    opacity: 0
  }, "-=0.5")
  .from(".benefits__item",  {
    y: 50,
    opacity: 0,
    stagger: 0.4
  }, "-=0.5")
  .from(".benefits__bottom",  {
    opacity: 0,
    height: 0
  }, "-=0.5")

let new3Tl = gsap.timeline({defaults: {duration: 2}, scrollTrigger: {
  trigger: ".old-man__body",
  start: "top bottom-=250px"
}})
  .from(".old-man__body",  {
      opacity: 0,
      width: 0
  })
  .from(".old-man__title",  {
      opacity: 0,
      skewX: 25
  }, "-=0.5")
  .from(".old-man__text",  {
      opacity: 0,
      x: 50
  }, "-=1.5")
  .from(".old-man__author",  {
      opacity: 0,
      y: 40
  }, "-=1.5")
  .from(".old-man__details",  {
      opacity: 0,
  }, "-=1.5")