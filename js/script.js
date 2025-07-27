/*========== TYPING ANIMATION JS ==========*/
var typed = new Typed(".typing",{
    strings:["Web Design", "Web Developer", "Gaphic Design", "IT Support", "Network Security", "Programer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})
/*========== TYPING ANIMATION JS ==========*/
const nav = document.querySelector(".nav"),
navList = document.querySelectorAll("li"),
totalNavList = navList.length,
allSection = document.querySelectorAll(".section"),
totalSection = allSection.length;
for(let i=0; i<totalNavList; i++)
{
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function()
    {
        removeBackSection();
        for(let j=0; j<totalNavList; j++)
        {
            if(navList[j].querySelector("a").classList.contains("active"))
            {
                addBackSection(j);
                //allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if(window.innerWidth <1200)
        {
            asideSectionTogglerBtn();
        }
    })
}
function removeBackSection()
{
    for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.remove("back-section");
    }
}
function addBackSection(num)
{
    allSection[num].classList.add("back-section");
}
function showSection(element)
{
    for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}
function updateNav(element)
{
    for(let i=0; i<totalNavList; i++)
    {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
        {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click", function()
{
    const sectionIndex = this.getAttribute("data-section-index");
    //consol.log(sectionIndex);
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})
const navTogglerBtn = document.querySelector(".nav-toggler"),
aside = document.querySelector(".aside");
const sidebarBackdrop = document.querySelector('.sidebar-backdrop');

navTogglerBtn.addEventListener("click", () => 
{
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn()
{
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.toggle("open");
    }
    // Mobile sidebar backdrop and body class
    if (window.innerWidth <= 600) {
        if (aside.classList.contains('open')) {
            document.body.classList.add('sidebar-open');
            if (sidebarBackdrop) sidebarBackdrop.classList.remove('hide');
        } else {
            document.body.classList.remove('sidebar-open');
            if (sidebarBackdrop) sidebarBackdrop.classList.add('hide');
        }
    }
}

if (sidebarBackdrop) {
    sidebarBackdrop.addEventListener('click', function() {
        if (aside.classList.contains('open')) {
            asideSectionTogglerBtn();
        }
    });
}





