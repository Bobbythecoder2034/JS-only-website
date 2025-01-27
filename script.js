// https://4kwallpapers.com/images/wallpapers/minecraft-8k-video-7680x4320-16364.png
// https://m.media-amazon.com/images/I/810E0pAjpiL._AC_UF1000,1000_QL80_.jpg
// https://https://upload.wikimedia.org/wikipedia/en/b/b6/Minecraft_2024_cover_art.png
// https://i.scdn.co/image/ab67616d0000b273ded18b66b44176024247bcfd
const siteData = {
    header: "Welcome to Arrowhead Studios",
    bannerImage:  
    {
        image:"https://4kwallpapers.com/images/wallpapers/minecraft-8k-video-7680x4320-16364.png",
        width: "300px",
        height: "150px",
    },
    navLinks:["Home", "About", "Gallery"],
    mainContent:[
        {
            title: "Minecraft",
            image: "https://upload.wikimedia.org/wikipedia/en/b/b6/Minecraft_2024_cover_art.png",
            description: "Released May 17, 2009, Minecraft instantly took off, selling countless copies on desktops. When it was released on Xbox 360, millions of copies were sold on the first day. It has remained relevant in the gaming industry for all these years. It was also the first game to win game of the year without any other awards."
        },{
            title: "Minecraft Dungeons",
            image: "https://m.media-amazon.com/images/I/810E0pAjpiL._AC_UF1000,1000_QL80_.jpg" ,
            description: "Minecraft Dungeons was released on May 26, 2020. It was a dungeon crawler filled with creative variations of the vanilla creatures and weapons. The game received several DLCs and was very popular for a time. It didn't become as timeless as its predecessor, but it is a good game."
        
        },{
            title: "Minecraft Legends",
            image: "https://i.scdn.co/image/ab67616d0000b273ded18b66b44176024247bcfd" ,
            description: "Minecraft Legends, released April 18, 2023, was another game that focused on the combat side of Minecraft, but it became a real-time strategy. The creatures of the overworld united against the Nether, forcing the player to act the part of a general in a war between dimensions.",
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
const words = "Minecraft is the most successful games ever, with over 300 million downloads across the world. Its a sandbox world where anything can be created, with more possibilites being added through regular updates and mods from the community. It has also been reimagined into two more games since Microsoft purchased Mojang from Notch, expanding its horizons. Neither of these games were as popular as the original, which stands the test of time as an enjoyable game for all ages."
const summary = createAndAppend("p", document.body, {class:"site-summary"},words)
const footer = createAndAppend("footer", document.body, {class:"site-footer"})
createAndAppend("p", footer,{},siteData.footer)


//Create some Styling
const style = `
body{font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; margin:0; padding:1px; line-height:1.6; background-color:#53a334;}
header{ background-color:#800E3D; padding:1rem; text-align:center;}
.site-banner img{width:40%; display:block; margin-left:30%;}

nav ul{list-style:none; padding:12px; margin:0; display:flex; justify-content:space-evenly;
background-color:#800E3D;}
nav ul li{margin: 0 1rem;}
nav ul li a{color: #fff; text-decoration:none;}
a:hover{color:#53a334;}
h2{display: block;}
main{padding:1rem; display:flex; flex-direction:row; justify-content:space-evenly;}
.site-gallery{ display:flex; flex-direction:row;}
.content-section {margin-bottom:2rem; display:flex; margin:10px; flex-direction:column; align-items:center; width:32%; border-radius:6px; background-color:#115614; height:55rem; color:aquamarine;}
.content-section img{width:100%; height:auto; float:left;}
.content-section h2:hover{color:black;}
.content-section p{}
footer{ background-color:#800E3D; color:#fff; text-align:center;padding:1rem; position:sticky; bottom:0;}
.site-summary{background-color:#800E3D; color:#53a334; margin-bottom:2rem; margin:2%; padding:15px; width:94%; border-radius:6px; text-align:center;}
`
createAndAppend("style", document.head,{},style)
