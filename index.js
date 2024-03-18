//Game entries
zhuiyi = {
    "title" :  "追忆 - In Search Of Lost Words (2023)",
    "text1" : "A 3D first-person perspective game that follows the story of a young person on their journey to recover their mother tongue.",
    "text2": "Main project of the course Highly Interactive EnVironment (EVHI) < br > The game teaches people to write 5 simple Chinese characters, it takes a Wacom graphic tablet with a Nintendo Switch Joycon, or keyboard with mouse as input methods.We have implemented the $P recognizer for character recognition, and Bayesian Knowledge Tracing(BKT) for player modeling and adaptation.",
    "youtube": "https://www.youtube.com/embed/3nW_ubSfw1I",
    "play": "./Zhuiyi/WebGL/index.html",
    "code": "https://github.com/MRVNY/Zhuiyi"
}

floop = {

}


const justlmd = {
    "title":  "JustLMD - Deep Generative AI",
    "id" : "justlmd",
    "tags": "#DeepLearning #Internship #PyTorch #Tokyo",
    "text1": "A deep generative model that can generate music, lyrics, and images.",
    "text2": "The model is based on the Transformer architecture, and it is trained on a large dataset of music, lyrics, and images. The model can generate music, lyrics, and images that are similar to the training dataset. The model can also generate music, lyrics, and images that are similar to the input.",

}

const ecotopia = {
}

const metarl = {
}

const hcibook = {
}

const hcigi = {
}

const dedale = {
}

const drone = {
}

const web = {
}

//Dev entries
const devs = [justlmd, ecotopia, metarl, hcibook, hcigi, dedale, drone, web];

function onLoadGame(){
    var sidebar = document.getElementById("sidebar");
    var headertext = document.getElementById("header-text");

    if (window.innerWidth < window.innerHeight || window.innerWidth / window.innerHeight > 9 / 16){
        //inverse the order of the columns #sidebar and #header-text
        headertext.parentNode.insertBefore(headertext, sidebar);

        //if aspect ratio is wider than 9:16
        // if(window.innerWidth/window.innerHeight < 9/16){
        // //#sidebar starts from 100vh minus #header-text height
        // var margin = window.innerHeight - headertext.clientHeight - headertext.offsetTop;
        // sidebar.style.marginTop = margin + "px";
        // }
    }
}

function onLoadDev(){

    var sidebar = document.getElementById("sidebar");
    var headertext = document.getElementById("header-text");

    if (window.innerWidth < window.innerHeight || window.innerWidth / window.innerHeight > 9 / 16) {
        //inverse the order of the columns #sidebar and #header-text
        headertext.parentNode.insertBefore(headertext, sidebar);
    }

    for (i = 0; i < devs.length; i++){
        var entry = devs[i];
        var block = document.createElement("div");
        block.className = "block";
        block.id = entry.id;
        block.innerHTML = "<h3>" + entry.title + "</h3><p>" + entry.tags + "</p><p>" + entry.text1 + "</p><p>" + entry.text2 + "</p>";
        document.getElementById("blocks").appendChild(block);
    }
}

function jumpTo(block){
    console.log("jump to " + block);
    document.getElementById(block).scrollIntoView({ behavior: 'smooth' });
}