/*========== TYPING ANIMATION JS ==========*/
var typed = new Typed(".typing",{
    strings:["Web Design", "Web Developer", "Gaphic Design", "IT Support", "Network Security", "Programer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})
/*========== TYPING ANIMATION JS ==========*/
const nav = document.querySelector(".nav"),
navList = nav.querySelectorAll(".li"),
totalNavList = navList.length;
for(let i=0; i<totalNavList; i++)
{
    const = navList[i].querySelector(".a");
    a.addEventListener("click", function()
    {
        for(let j=0; j<totalNavList; j++)
        {
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
    })
}




