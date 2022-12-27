var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

//Task 1

let mainE1 = document.querySelector("main");
mainE1.style.backgroundColor = "var(--main-bg)";
mainE1.innerHTML = "<h1>SEI Rocks!</h1>";
mainE1.classList.add("flex-ctr");

// Task 2

let topMenuE1 = document.getElementById("top-menu");
topMenuE1.style.backgroundColor = "var(--top-menu-bg)";
topMenuE1.style.height = "100%";
topMenuE1.classList.add("flex-around");

// Task 3

menuLinks.forEach(function (link) {
  // console.log(link);
  let a = document.createElement("a");
  a.setAttribute("href", "_link");
  a.textContent = link.text;

if(link.text !== 'about'){
  a.setAttribute('link','memenuLinks.subLinks')
}


  topMenuE1.appendChild(a);




});

// Task 4

let subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

// task 5

 let sub=document.querySelector('nav a')

let showingSubMenu = false;
let topMenuLinks = document.querySelectorAll("nav a"); //Task 5

topMenuE1.addEventListener("click", function (evt) { //task 5.2
   evt.preventDefault();

  let el =document.querySelector('.active');

  //if (evt.target.classList.contains('active')==true)
if(el)
{     evt.target.classList.remove(".active");
    showingSubMenu = false
    subMenuEl.style.top = "0";
    return;
}

//console.log(topMenuLinks[0]);

  for (let i of topMenuLinks){

    // i.classList.remove("active");
    // evt.raeget.classList.remove("active");
  
  }
  evt.target.classList.add("active");

  // the event listener, if the clicked <a>link has a class of active:
  

  let links = [];
  for (let j in menuLinks) {
    links.push(menuLinks[j].subLinks);
    //links[menuLinks[j].text] = menuLinks.subLinks;
  }

  console.log(links);

  let link = evt.target.hasAttribute("link");

  if (link) {
    showingSubMenu = true;
  } else {
    showingSubMenu = false;
  }

  if (showingSubMenu == true) {

    function buildSubMenu(links) {

      subMenuEl.textContent = "";

      for (let i = 0; i < links.length; i++) {
        for (let j = 0; j < links.length; j++) {
          if (evt.target.text == menuLinks[i].text) {
            let a1 = document.createElement('a');
            // a1.setAttribute("href", "link");

            a1.textContent = links[i][j].text;     

            subMenuEl.appendChild(a1);
          }
        }
      }

      }
    

    subMenuEl.style.top = "100%";
  } 
  else{
    subMenuEl.style.top = '0';
}
    buildSubMenu(links)

})

subMenuEl.addEventListener('click',function(evt){
evt.preventDefault();
showingSubMenu=false;
subMenuEl.style.top = '0';
for(let i in topMenuLinks){
     //topMenuLinks[i].classList.remove('active');
 //    evt.target.classList.remove('active');
     
     
    }
    mainEl.innerHTML = `<h1>${evt.target.text}</h1>`


})