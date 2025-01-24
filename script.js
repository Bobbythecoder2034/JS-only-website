// https://i.redd.it/2tuay0z91uyc1.jpeg 
// https://m.media-amazon.com/images/M/MV5BYmU5ZmE3ODUtNGI0NS00MGYxLWE1NmUtMDgyMDM4NGM2OTA2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg
// https://upload.wikimedia.org/wikipedia/en/e/e7/Helldivers2cover.png
// https://cdn.britannica.com/67/183767-050-23D72392/World-Data-Locator-Map-Sweden.jpg
const siteData = {
    header: "Welcome to Arrowhead Studios",
    bannerImage:  
    {
        image:"https://i.redd.it/2tuay0z91uyc1.jpeg",
        width: "300px",
        height: "150px",
    },
    navLinks:["Home", "About", "Gallery"],
    mainContent:[
        {
            title: "Helldivers 2",
            image: "https://upload.wikimedia.org/wikipedia/en/e/e7/Helldivers2cover.png",
            description: "Our biggest game yet, with the largest audience we have ever seen."
        },{
            title: "Helldivers",
            image: "https://m.media-amazon.com/images/M/MV5BYmU5ZmE3ODUtNGI0NS00MGYxLWE1NmUtMDgyMDM4NGM2OTA2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" ,
            description: "Our first game was when we really became well known and popular."
        
        },{
            title: "Sweden",
            image: "https://cdn.britannica.com/67/183767-050-23D72392/World-Data-Locator-Map-Sweden.jpg" ,
            description: "We are based in Sweden",
        }
    ],
    footer:"Arrowhead Studios © 2025. All rights reserved"
}

//Create and append elements dynamically

const createAndAppend = (tag, parent, attributes = {}, content ="")=>{
    const element = document.createElement(tag);
    Object.keys(attributes).forEach(key=>element.setAttribute(key,attributes[key]));//(backgroundColor, "Pink") changes for each new element to add every attribute to the element
    //looks at the attributes and sets attributes to the name in key and its then given the value
    
    element.innerHTML = content;
    parent.appendChild(element);
    return element;
}
//keys are names like backgroundColor, width, color

// createAndAppend("p","body"); //This will have no attributes and no content
// createAndAppend("p","body", {}, "Loremfadkjfjdsahgjkda fhjsahkhfjhjadfhjsa"); // <p> fjdakfljakdhsf <p>
// createAndAppend("p","body", {className:"nav bar square"}, "Loremfadkjfjdsahgjkda fhjsahkhfjhjadfhjsa"); // <p> fjdakfljakdhsf <p> but fancy
//You can use document.getElementByID instead of parent as a parameter to append it to a certain element instead of the bottom of the parent

const header = createAndAppend("header", document.body, {class:"site-header"});


//Create banner Image
const banner = createAndAppend("div", document.body, {class: "site-banner"})
createAndAppend('img', banner, {src:siteData.bannerImage.image, alt:siteData.bannerImage.alt})

//Create Navigation

const nav = createAndAppend("nav", document.body, {class:"site-nav"})
const ul = createAndAppend("ul",nav)
siteData.navLinks.forEach((link)=>{
    console.log(link)
    createAndAppend("li", ul ,{}, `<a href="#">${link}</a>`)
})

//Create Main Content and Box for Gallery

const main = createAndAppend("main", document.body, {class:"site-main"})


const gallery = createAndAppend("div", main, {class:"site-gallery"})
siteData.mainContent.forEach(section =>{
    
    const article = createAndAppend("article", gallery, {class:"content-section"})
    // const space1 = createAndAppend("div", article, {class:"site-div"})
    // const space2 = createAndAppend("div", article, {class:"site-div"}) 
    // const space3 = createAndAppend("div", article, {class:"site-div"}) 
    createAndAppend("h2", article, {},section.title)
    createAndAppend("img", article, {src:section.image, alt:section.title})
    createAndAppend("p",article,{},section.description)
});
const words = "a"
const summary = createAndAppend("p", document.body, {class:"site-summary"},words)
const footer = createAndAppend("footer", document.body, {class:"site-footer"})
createAndAppend("p", footer,{},siteData.footer)

//Create some Styling
const style = `
body{font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; margin:0; padding:1px; line-height:1.6; background-color:#fff;}
header{ background-color:#333; color:#fff; padding:1rem; text-align:center;}
.site-banner img{width:50%; display:block; margin-left:25%;}

nav ul{list-style:none; padding:12px; margin:0; display:flex; justify-content:space-evenly;
background-color:#555;}
nav ul li{margin: 0 1rem;}
nav ul li a{color: #fff; text-decoration:none;}
a:hover{color:#9AE85A;}
h2{display: block;}
main{padding:1rem; display:flex; flex-direction:row; justify-content:space-evenly;}
.site-gallery{ display:flex; flex-direction:row;}
.content-section {margin-bottom:2rem; display:flex; margin:10px; flex-direction:column; align-items:center; width:32%; border-radius:6px; background-color:grey; }
.content-section img{width:100%; height:auto; float:left;}
.content-section h2:hover{color:green;}
.content-section p{}
footer{ background-color:#333; color:#fff; text-align:center;padding:1rem; position:sticky; bottom:0;}
.site-summary{background-color:#333; color:white; margin-bottom:2rem; margin:2%; padding:15px; width:94%; border-radius:6px; text-align:center}
`
createAndAppend("style", document.head,{},style)