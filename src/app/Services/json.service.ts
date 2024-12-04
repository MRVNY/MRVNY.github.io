import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonService {
  UntitledCameraGame = {
    "title": "Untitled Camera Game (Coming Soon)",
    "id": "ucg",
    "tags": ["Game", "Unity" ,"PersonalProject" ,"Ongoing"],
    "text1": "A 3D visual novel + photographer simulator where a photographer takes photos of models while talking to them to stir up emotions.",
    "text2": "Story: The photographer is known for his technique of exchanging stories with the model and capture expressions on their face. He also recycles stories of models to use it for future shooting sessions. One time his story matched up with a model's story.<br> Gameplay: The player take photos in order to advance the conversation or choose the dialog to say to the model.The player would be able to rotate, zoom, and change focus on the camera in order to get different compositions.When it's time to pick what to say to the model, two key phrases would appear on the screen, the player would then need to focus on the phrase they want to express and click the shutter. This would result different composition of the photo for each choice.",
    "image": "ucg.jpg",
    buttons: {
    // "code": "https://github.com/MRVNY/Untitled-Camera-Game",
    "pitch": "https://berry-samba-6ff.notion.site/Pitch-fb6c62363c7d4bf58c20e4dc5efa3bbc?pvs=4"
    }
  }

  zhuiyi = {
    "title": "追忆 - In Search Of Lost Words",
    "id": "zhuiyi",
    "tags": ["Game", "Unity" ,"SchoolProject"],
    "text1": "A 3D first-person perspective game that follows the story of a young person on their journey to recover their mother tongue.",
    "text2": "Main project of the course Highly Interactive EnVironment (EVHI) <br> The game teaches people to write 5 simple Chinese characters, it takes a Wacom graphic tablet with a Nintendo Switch Joycon, or keyboard with mouse as input methods.We have implemented the $P recognizer for character recognition, and Bayesian Knowledge Tracing(BKT) for player modeling and adaptation.",
    youtube: "3nW_ubSfw1I",
    buttons: {
      "play": "https://mrvny.itch.io/zhuiyi",
    "code": "https://github.com/MRVNY/Zhuiyi"
    }
  }

  floop = {
    "title": "Grand Gathering in Floop Town",
    "id": "floop",
    "tags": ["Game", "UnrealEngine" ,"GameJam" ,"C++", "Blueprint"],
    "text1": "It's Christmas in Floop Town and every one is celebrating. You're a giant snowball that wants to reunite everybody... by absorbing them all to make one big ball of Floops.",
    "text2": "Made in 72 hours with Unreal Engine 5.3 for the Cozy Winter Jam 2023.",
    youtube: "IJTClHkSyns",
    buttons: {
    "play": "https://baloouis.itch.io/grand-gathering-in-floop-town",
    "code": "https://github.com/MRVNY/Grand-Gathering-In-Floop-Town"
    }
  }

  spy = {
    "title": "SPY (2023)",
    "id": "spy",
    "tags": ["Game", "Unity" ,"SeriousGame" ,"SchoolProject"],
    "text1": "Enhancement of the serious game SPY that teaches children basic programming notions.",
    "text2": "Project of the course Engineering of Serious Games (ISG) <br> Our team added a level editor, a visual novel UI, a map that implements the Competence-based Knowledge Space Theory (CbKST), as well as a tracing mechanism using xAPI.",
    "image": "SPY.jpg",
    buttons: {
    "report": "assets/pdfs/Report_SPY_YAO_HU_HUANG.pdf",
    "code": "https://github.com/MRVNY/SPY"
    }
  }

  chamois = {
    "title": "Chamois",
    "id": "chamois",
    "tags": ["Game", "Unity" ,"SeriousGame" ,"Internship"],
    "text1": "A serious game that raises awareness of the living conditions of chamois in the Bauges as well as the impact of human activities. It is set out to show the research result of the project HUMANI at the University of Savoie.",
    "text2": "I was the solo developer of the game. The internship is based on the prototype already developed by a previous team of students. During the internship, I hugely improved the stability and optimization of the game, while adding new implementations into the game such as a visual novel interface with loadable json, A* pathfinding system, asynchronous execution, and a more extensive save&load system.",
    "image": "Chamois.png",
    buttons: {
    "report": "assets/pdfs/ChamoisRapport.pdf",
    "code": "https://github.com/MRVNY/Chamois"
    }
  }

  dice = {
    "title": "PastelDices",
    "id": "dice",
    "tags": ["Game", "Unity" ,"GameJam" ,"Ongoing"],
    "text1": "A puzzle game where the player memorizes the colors on a dice in order to flip onto the right side and fill the spaces with required colors.",
    "text2": "Made in 48 hours with Unity for the GMTK Game Jam 2022, Currently under revisions for a commercial release",
    "image1": "dice1.png",
    "image2": "dice2.png",
    buttons: {
    "play": "https://itch.io/jam/gmtk-jam-2022/rate/1624541",
    "code": "https://github.com/MRVNY/PastelDices"
    }
  }

  quadravity = {
    "title": "Quadravity",
    "id": "quadravity",
    "tags": ["Game", "Unity" ,"GameJam"],
    "text1": "A puzzle game where the player merges worlds together in order to make objects appear and change the gravity (QWERTY keyboard required)",
    "text2": "Made in 48 hours with Unity for the GMTK Game Jam 2021",
    "image1": "quad1.png",
    "image2": "quad2.png",
    buttons: {
      "play": "https://mrvny.itch.io/quadravity",
    "code": "https://github.com/MRVNY/Quadravity"
    }
  }

  enjmin = {
    "title": "Creative Document",
    "id": "enjmin",
    "tags": ["Game", "GameDesign"],
    "text1": "Conceptualization of an educational game on the history of tissue and humanity (made for an entrance exam of ENJMIN)",
    "text2": "Story: Grèce ancienne, Arachné a été transformé en une araignée après avoir perdu à Athéna. 1560, une jeune reine de la France brodait le motif qui lui rappelle de son enfance à Florence. 1836, les peuples sur une ile en Ecosse luttait contre la révolution industrielle. 1960, les panneaux Make love, not war! flottaient dans l’océan de jeans à New York… 2010, Chine moderne, les vêtements en tissu mixte sont produites dans les usines… Une jeune fille découvre que les vêtements qu’elle a acheté lors d’un vide-grenier à Shanghai la transportent dans les mémoires des tissus. Ayant obtenu les indices dans ces mémoires, elle retrouve leur vendeuse Arachné qui ne croit plus à la représentation d’humanité par les tissus à cause de la mondialisation et la surconsommation. La fin dépend des choix du joueur.",
    "image": "gamedoc.jpeg",
    buttons: {
    "report": "assets/pdfs/DossierCreatif.pdf"
    }
  }

  splatable = {
    "title": "Splatable",
    "id": "splatable",
    "tags": ["Game", "BoardGame"],
    "text1": "Adaptation of the game Splatoon to a board game, made on Google Sheets with AppScript",
    "image": "splatable.png",
    buttons: {
    "Sheets": "https://docs.google.com/spreadsheets/d/15OoW_ef7ZwrVi_q_0LZXkE6uZbD2TUHuNcwkhr8i7Vw/edit?usp=sharing"
    }
  }

  zi = {
    "title": "字",
    "id": "zi",
    "tags": ["Game", "BoardGame"],
    "text1": "A 1v1 strategy game that introduce some Chinese characters. Inspired by one of the Chinese input method on iPhone and the systemic mechanic of Breath Of The Wild",
    "image": "zi.png",
    buttons: {
    "Game Design Document": "assets/pdfs/字.pdf"
    }
  }

  flop = {
    "title": "Don't Flop",
    "id": "flop",
    "tags": ["Game", "Unity"],
    "text1": "A music game where the player has to avoid the letters of correspondent lyrics of a song",
    "image": "flop.jpg",
    buttons: {
    "play": "https://play.unity.com/mg/other/don-t-flop"
    }
  }

  qingyuan = {
    "title": "qingyuan.games",
    "id": "qingyuan",
    "tags": ["Dev", "Web" ,"PersonalProject" ,"Portfolio"],
    "text1": "Aka. this website",
    "text2": "Made with HTML, CSS, and pure JavaScript from the zero. Also include a <a href=\"./ILeftANote/index.html\">mini-game</a> where the user have to go to certain locations to unclock messages.",
    "image": "qingyuan.jpg",
  }

  justlmd = {
    "title": "JustLMD - Deep Generative AI",
    "id": "justlmd",
    "tags": ["Dev", "DeepLearning" ,"Internship" ,"PyTorch" ,"Tokyo"],
    "text1": "I worked in the domain of dance synthesis at National Institute of Informatics in Tokyo, my work consited of:",
    "text2": "1. Creating a new dataset of audio-text-motion by extracting motion data from dance videos using existing deep learning models of 3D pose estimation <br> 2. Implementing a Transformer VAE baseline model to showcase the validity of adding lyrics as a condition in the process of dance motion generation.",
    buttons: {
    "report": "assets/pdfs/Internship_Report_YAO.pdf",
    },
    "image": "justlmd.jpg"
  }

  ecotopia = {
    "title": "Multi-Agent Simulation of Ecotopia",
    "id": "ecotopia",
    "tags": ["Dev", "MultiAgentSystem" ,"GAMA"],
    "text1": "Simulation of transport, housing, energy, and electricity in a society based on the book Ecotopia. I worked on the housing section of the developThe game is designed to be fun and engaging, and it is based on real-world environmement in GAML.",
    buttons: {
    "report": "assets/pdfs/Mosima_Rapport_final.pdf",
    },
    "image": "ecotopia.jpg"
  }

  metarl = {
    "title": "Meta-Reinforcement Learning Project",
    "id": "metarl",
    "tags": ["Dev", "ReinforcementLearning" ,"Tensorflow"],
    "text1": "Reproduction and analysis of the paper Prefrontal Cortex as a Meta-Reinforcement Learning System, which consists of the adaptation of a LSTM model with A2C in Tensorflow.",
    buttons: {
    "code": "https://github.com/MRVNY/IAR_Meta_RL",
    "report": "assets/pdfs/Rapport_Meta_RL_YAO_HUANG_HU.pdf",
    },
    "image": "metarl.jpg"
  }

  hcibook = {
    "title": "HCI Project: Immersive Book",
    "id": "hcibook",
    "tags": ["Dev", "HCI" ,"UX" ,"Prototyping"],
    "text1": "A Human-Computer Interaction project where we designed the concept of a holographic interactive book, with the practice of user-centered design while following HCI protocols such as making interviews, defining interaction points, persona, design dimensions, and in the end prototyping a demo video.",
    "image": "hcibook.jpg",
    buttons: {
    "report": "assets/pdfs/hcibook.pdf"
    }
  }

  hcigi = {
    "title": "HCI Project: Gestures vs. Keyboard",
    "id": "hcigi",
    "tags": ["Dev", "HCI" ,"Web" ,"JavaScript"],
    "text1": "Development of a website that collects and compares gestural and keyboard shortcuts under HCI protocols.",
    buttons: {
    "code": "https://github.com/MRVNY/ProjectGI",
    "report": "assets/pdfs/ProjectGI.pdf",
    },
    "image": "hcigi.jpg"
  }

  dedale = {
    "title": "Projet Dedale",
    "id": "dedale",
    "tags": ["Dev", "MultiAgentSystem" ,"Java"],
    "text1": "Project of the course Fundamentals of Multi-Agent Systems where agents work together to collect treasures.",
    buttons: {
    "code": "https://github.com/MRVNY/Fosyma",
    "report": "assets/pdfs/Projet_FoSyMa_2022_CASSAN_YAO.pdf",
    },
    "image": "dedale.jpg"
  }

  drone = {
    "title": "Realtime Vision System for Drones",
    "id": "drone",
    "tags": ["Dev", "System" ,"Image" ,"C" ,"C++"],
    "text1": "The goal was to implementation image processing and computer vision algorithms on a Parrot drone to give it more autonomy. My work consisted of:",
    "text2": "1. Using the Parrot API to control the drones <br>2. Transfering the image data for processing on the computer<br>3. Implementing a failsafe system to save the drone from crashing.",
    "image": "drone.png",
    buttons: {
    "code": "https://github.com/MRVNY/Projet-Drone",
    "report": "assets/pdfs/drone.pdf",
    }
  }

  birdy = {
    "title": "Birdy",
    "id": "web",
    "tags": ["Dev", "Web" ,"JavaScript" ,"HTML" ,"CSS" ,"Node.js"],
    "text1": "Project for the Web dev class - an ugly rip-off of Twitter.",
    buttons: {
    "code": "https://github.com/MRVNY/Server"
    }
  }

  PastelDices2 = {
    "title": "PastelDices 2.0",
  }

  ForetHuberReeves = {
    "title": "Forêt Huber Reeves",
    "text1": "A memorial website for astrophysicist Hubert Reeves with locations of planted ginkgo trees.",
    buttons: {
    website: "https://foret-hubert-reeves.github.io/GoogleEarth/index.html",
    },
    image : "foret.jpg"
  }

  WaNaiSa = {
    "title": "Wa-Nai-Sa",
    "text1": "Portfolio website for an artist.",
    buttons: {
    website: "https://li-shu-meng.github.io/home",
    },
    image : "lsm.jpg"
  }

  KaiSeki = {
    "title": "カイセキ(KaiSeki)",
    "text1": "An app that uses LLM to parse and analyze Japanese sentences with a vertically structured interface",
    youtube: "-3Hgl1rmBFA",
    buttons: {
      code: "https://github.com/MRVNY/KaiSeki"
    }
  }
  
  GoutCha = {
    title: "GoutCha.com",
    text1: "Reproduction of the website gout-cha.com (with the consent from the owner) with Angular with a backend database on Azure for user, admin and purchase management.",
    youtube: "cVbipUWzBG0",
    buttons: {
      code: "https://github.com/MRVNY/gout-cha.com"
    },
  }

  PortfolioV2 = {
    title: "Portfolio V2",
    text1: "This website, made with Angular."
  }

  RespectMe = {
    title: "RespectMe",
    text1: "An app by the association Arborus, that help you respond to sexist and LGBTQ+phobic jokes/agressions with comebacks.",
    "text2": "\"Respect me ! est une APP qui te permet de répondre quand tu ne sais plus quoi répondre face à des propos lourds et inappropriés.<br>C’est une APP pour ne pas perdre la face et pour la faire perdre à celui/celle qui prononce ou agit de façon lourde ou inappropriée. <br>C’est aussi une façon de créer une nouvelle culture du Respect de l’Autre, de l’égalité !<br>Et si tu es témoin, cela te permet aussi d’intervenir !\"",
    image : "respectme.png",
    // buttons: {
    //   "Ministère de l'Égalité": "https://www.education.gouv.fr/respectme",
    //   website: "https://www.arborus.org/respectme",
    //   "app store": "https://apps.apple.com/fr/app/respect-me/id1560000000",
    //   "google play": "https://play.google.com/store/apps/details?id=com.arborus.respect"
    // }
  }

  VariationsSurTroisVersDeMuxing = {
    title: "Variations Sur Trois Vers De Muxing",
    text1: "Collaboration with an artist"
  }

  devs = [this.qingyuan, this.justlmd, this.ecotopia, this.metarl, this.hcibook, this.hcigi, this.dedale, this.drone, this.birdy];
  games = [this.UntitledCameraGame, this.zhuiyi, this.floop, this.spy, this.chamois, this.dice, this.quadravity, this.enjmin, this.splatable, this.zi, this.flop];

  keywords = ["Game", "Unity", "UnrealEngine", "GameJam", "Web", "Dev", "DeepLearning", "HCI", "JavaScript", "HTML", "CSS", "Node.js"];

  projects = [
    this.RespectMe, 
    // this.PastelDices2, 
    this.KaiSeki, this.GoutCha,
    this.ForetHuberReeves, this.WaNaiSa, 
    this.justlmd, this.zhuiyi, this.spy, this.chamois,
    // this.PortfolioV2,
    // this.VariationsSurTroisVersDeMuxing,
    this.UntitledCameraGame, this.floop, this.dice, this.ecotopia, this.metarl, this.hcibook, this.quadravity, this.enjmin, this.splatable, this.zi, this.flop, this.hcigi, this.dedale, this.drone, 
    // this.birdy
  ];


  constructor () { }
}
