const remover2 = document.querySelector("#x2");
const remover3 = document.querySelector("#x3");
const remover4 = document.querySelector("#x4");
const remover5 = document.querySelector("#x5");
const remover6 = document.querySelector("#x6");
const remover7 = document.querySelector("#x7");
const remover8 = document.querySelector("#x8");
const accounts02 = document.querySelector(".accounts-02");
const accounts03 = document.querySelector(".accounts-03");
const accounts04 = document.querySelector(".accounts-04");
const accounts05 = document.querySelector(".accounts-05");
const accounts06 = document.querySelector(".accounts-06");
const accounts07 = document.querySelector(".accounts-07");
const accounts08 = document.querySelector(".accounts-08");
const moon = document.querySelector("#moon");
const sun = document.querySelector("#sun");
const home = document.querySelector("#home");
const group = document.querySelector("#group");
const TV = document.querySelector("#TV");
const bell = document.querySelector("#bell");
const bar = document.querySelector("#bar");
const firstpage  = document.querySelector(".first-page");
const secondpage = document.querySelector(".second-page");
const thirdpage  = document.querySelector(".third-page");
const fourthpage = document.querySelector("#fourth-page");
const fifthpage  = document.querySelector("#fifth-page");
const searchingplace = document.querySelector(".searching-place");
const lupa = document.querySelector("#lupa");
const backer = document.querySelector("#backer");
const linerunder01 = document.querySelector(".liner-under01");
const linerunder02 = document.querySelector(".liner-under02");
const linerunder03 = document.querySelector(".liner-under03");
const linerunder04 = document.querySelector(".liner-under04");
const linerunder05 = document.querySelector(".liner-under05");
const yoqotish1 = document.querySelector(".yoq-qilish01");
const yoqotish2 = document.querySelector(".yoq-qilish02");
const yoqotish3 = document.querySelector(".yoq-qilish03");
const yoqotish4 = document.querySelector(".yoq-qilish04");
const yoqotish5 = document.querySelector(".yoq-qilish05");
const yoqotish6 = document.querySelector(".yoq-qilish06");
const yoqotish7 = document.querySelector(".yoq-qilish07");
const yoqotish8 = document.querySelector(".yoq-qilish08");
const adfriend1 = document.querySelector(".ad-friend01");
const name01 = document.querySelector(".name01");
const qoshish01 = document.querySelector(".qoshish01");
const adfriend2 = document.querySelector(".ad-friend02");
const name02 = document.querySelector(".name02");
const qoshish02 = document.querySelector(".qoshish02");
const adfriend3 = document.querySelector(".ad-friend03");
const malumotlar03 = document.querySelector(".malumotlar03");
const adfriend4 = document.querySelector(".ad-friend04");
const malumotlar04 = document.querySelector(".malumotlar04");
const adfriend5 = document.querySelector(".ad-friend05");
const malumotlar05 = document.querySelector(".malumotlar05");
const adfriend6 = document.querySelector(".ad-friend06");
const malumotlar06 = document.querySelector(".malumotlar06");
const adfriend7 = document.querySelector(".ad-friend07");
const malumotlar07 = document.querySelector(".malumotlar07");
const adfriend8 = document.querySelector(".ad-friend08");
const malumotlar08 = document.querySelector(".malumotlar08");
const naglass = document.querySelector("#na-glass");
const searchingplace01 = document.querySelector(".searching-place01");
const backer01 = document.querySelector("#backer01");
const navbarvideo = document.querySelector(".navbar-video");
const nauser = document.querySelector("#na-user");
const videowatch01 = document.querySelector(".video-watch01");
const videowatch02 = document.querySelector(".video-watch02");
const videowatch03 = document.querySelector(".video-watch03");
const batafsil = document.querySelector(".batafsil");




remover2.addEventListener("click", ()=>{
    accounts02.style = "display:none;";
})
remover3.addEventListener("click", ()=>{
    accounts03.style = "display:none;";
})
remover4.addEventListener("click", ()=>{
    accounts04.style = "display:none;";
})
remover5.addEventListener("click", ()=>{
    accounts05.style = "display:none;";
})
remover6.addEventListener("click", ()=>{
    accounts06.style = "display:none;";
})
remover7.addEventListener("click", ()=>{
    accounts07.style = "display:none;";
})
remover8.addEventListener("click", ()=>{
    accounts08.style = "display:none;";
})

moon.addEventListener("click",()=>{
    sun.style = "display:block;";
    moon.style = "display:none;";
})
sun.addEventListener("click",()=>{
    sun.style = "display:none;";
    moon.style = "display:block;";
})
home.addEventListener("click",()=>{
    firstpage.style = "display:block;"; 
    secondpage.style = "display:none;";
    thirdpage.style = "display:none;"; 
    fourthpage.style = "display:none;";
    fifthpage.style = "display:none;"; 
    linerunder01.style = "display:block;";
    linerunder02.style = "display:none;";
    linerunder03.style = "display:none;";
    linerunder04.style = "display:none;";
    linerunder05.style = "display:none;";
    home.style = "color:blue";
    group.style = "color:black";
    TV.style = "color:black";
    bell.style = "color:black";
    bar.style = "color:black";

})
group.addEventListener("click",()=>{
    firstpage.style = "display:none;"; 
    secondpage.style = "display:block;";
    thirdpage.style = "display:none;"; 
    fourthpage.style = "display:none;";
    fifthpage.style = "display:none;"; 
    linerunder01.style = "display:none;";
    linerunder02.style = "display:block;";
    linerunder03.style = "display:none;";
    linerunder04.style = "display:none;";
    linerunder05.style = "display:none;";
    home.style = "color:black;";
    group.style = "color:blue;";
    TV.style = "color:black;";
    bell.style = "color:black;";
    bar.style = "color:black;";
})
TV.addEventListener("click",()=>{
    firstpage.style = "display:none;"; 
    secondpage.style = "display:none;";
    thirdpage.style = "display:block;"; 
    fourthpage.style = "display:none;";
    fifthpage.style = "display:none;";
    linerunder01.style = "display:none;";
    linerunder02.style = "display:none;";
    linerunder03.style = "display:block;";
    linerunder04.style = "display:none;";
    linerunder05.style = "display:none;";
    home.style = "color:black;";
    group.style = "color:black;";
    TV.style = "color:blue;";
    bell.style = "color:black;";
    bar.style = "color:black;";
})
bell.addEventListener("click",()=>{
    firstpage.style = "display:none;"; 
    secondpage.style = "display:none;";
    thirdpage.style = "display:none;"; 
    fourthpage.style = "display:block;";
    fifthpage.style = "display:none;"; 
    linerunder01.style = "display:none;";
    linerunder02.style = "display:none;";
    linerunder03.style = "display:none;";
    linerunder04.style = "display:block;";
    linerunder05.style = "display:none;";
    home.style = "color:black;";
    group.style = "color:black;";
    TV.style = "color:black;";
    bell.style = "color:blue;";
    bar.style = "color:black;";
})
bar.addEventListener("click",()=>{
    firstpage.style = "display:none;"; 
    secondpage.style = "display:none;";
    thirdpage.style = "display:none;"; 
    fourthpage.style = "display:none;";
    fifthpage.style = "display:block;";
    linerunder01.style = "display:none;";
    linerunder02.style = "display:none;";
    linerunder03.style = "display:none;";
    linerunder04.style = "display:none;";
    linerunder05.style = "display:block;";
    home.style = "color:black;";
    group.style = "color:black;";
    TV.style = "color:black;";
    bell.style = "color:black;";
    bar.style = "color:blue;";
})
lupa.addEventListener("click",()=>{
    searchingplace.style = "display:block;";
})
backer.addEventListener("click",()=>{
    secondpage.style = "display:block;";
    searchingplace.style = "display:none;";
})
yoqotish1.addEventListener("click",()=>{
    name01.style.display = "none";
    qoshish01.style.display = "none";
    adfriend1.style.display = "none";
    yoqotish1.style.display = "none";
})
yoqotish2.addEventListener("click",()=>{
    name02.style.display = "none";
    qoshish02.style.display = "none";
    adfriend2.style.display = "none";
    yoqotish2.style.display = "none";
})
yoqotish3.addEventListener("click",()=>{
    malumotlar03.style.display = "none";
    adfriend3.style.display = "none";
})
yoqotish4.addEventListener("click",()=>{
    malumotlar04.style.display = "none";
    adfriend4.style.display = "none";
})
yoqotish5.addEventListener("click",()=>{
    malumotlar05.style.display = "none";
    adfriend5.style.display = "none";
})
yoqotish6.addEventListener("click",()=>{
    malumotlar06.style.display = "none";
    adfriend6.style.display = "none";
})
yoqotish7.addEventListener("click",()=>{
    malumotlar07.style.display = "none";
    adfriend7.style.display = "none";
})
yoqotish8.addEventListener("click",()=>{
    malumotlar08.style.display = "none";
    adfriend8.style.display = "none";
})