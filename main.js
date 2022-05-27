window.addEventListener("scroll",function(){
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const scrollToTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
  scrollToTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollToTopBtn.addEventListener("click", ()=>{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});


window.addEventListener("scroll", ()=>{
  const sections = document.querySelectorAll("section");
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    let sectionHeight = current.offsetHeight;
    let sectionTop = cur̥rent.offsetTop - 50;
    let id = current.getAttribute("id");

    if(scrollY > sectionTop && scrollY <= sectionTop){
      document.querySelector(".nav-items a[href *=" + id + "]").classList.add("active");
    }
    else{
      document.querySelector(".nav-items a[href *=" + id + "]").classList.remove("active");
    }
  });
});

const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", ()=>{
  navigation.classList.add("active");
});

closeBtn.addEventListener("click", ()=>{
  navigation.classList.remove("active");
});

navItems.forEach((navItem) =>{
  navItem.addEventListener("click", () =>{
    navigation.classList.remove("active");
  });
});
