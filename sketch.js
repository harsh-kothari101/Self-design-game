const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var gameState=0;
var state = 0

var bgI,bg,bgI2;

var gS = "serve";

//buttons...............................................
var setting,settingI,for1,for2,forward,forwardI,backward,back1,backwardI;
var sound,soundI,music,musicI,info,infoI,mark,markI;
var sound2,soundI2,music2,musicI2;
var pause,pauseI,reload,reloadI;
var info1,info1I;

//countries...............................................................................
var bang,bangI,china,chinaI,india,indiaI,korea,koreaI,pak,pakI,sri,sriI,usa,usaI,eng,engI;

//logo.......
var angI,ang;

//characters................................................................................................................................................
var shin,shinI,chan,chanI,doraemon,doraemonI,nobi,nobiI,nobita,nobitaI,player1,player1I,player2,player2I,player3,player3I,player4,player4I,player5,player5I,player6,player7;

//levels.....................................
var norf,norf1,norf2,norf3,norf4,norfI;
var bricf,bricf1,bricf2,bricf3,bricf4,bricfI;
var silf,silf1,silf2,silf3,silf4,silfI
var golf,golf1,golf2,golf3,golf4,golfI;

//footballs..........................................
var football,bricFootball,silFootball,goldenFootball;

//music...............................................
var bts,bts1;

var ff,ff1;

var f,fI

var b,b1,b2,b3

var goal,goalImage;

function preload() {
    //background...................................
    bgI = loadImage("stadiums/s2.jpg");
    bgI2 = loadImage("stadiums/changing room.jpg");

    //buttons..............................
    settingI = loadImage("buttons/b1.png");
    forwardI=loadImage("buttons/a2.png");
    backwardI = loadImage("buttons/a1.png");
    soundI = loadImage("buttons/s1.png");
    musicI = loadImage("buttons/m1.png");
    infoI = loadImage("buttons/Info.png");
    markI = loadImage("buttons/mark.png")
    soundI2 = loadImage("buttons/s2.png");
    musicI2 = loadImage("buttons/m2.png");
    pauseI = loadImage("buttons/pause button.png")
    reloadI = loadImage("buttons/r.png")

    //logo.................................
    angI = loadImage("stadiums/start.png");
    info1I = loadImage("info/info1.png");

    //countries...............................
    bangI = loadImage("flags/Bangladesh.png");
    chinaI = loadImage("flags/China.png");
    indiaI = loadImage("flags/India.png");
    koreaI = loadImage("flags/Korea.png");
    pakI = loadImage("flags/Pak.png");
    sriI = loadImage("flags/Sri Lanka.png");
    usaI = loadImage("flags/USA.png");
    engI = loadImage("flags/England.png")

    //characters.................................
    shinI = loadImage("playingObj/C1/c1.1.png");
    chanI = loadImage("playingObj/C2/c2.1.png");
    doraemonI = loadImage("playingObj/C3/c3.1.png");
    nobiI = loadImage("playingObj/C8/c8.1.png");
    nobitaI = loadImage("playingObj/C5/c5.1.png");
    player1I=loadImage("playingObj/C6/c6.1.png")
    player2I = loadImage("playingObj/C7/c7.1.png");
    player3I = loadImage("playingObj/C8/c8.1.png");
    player4I = loadImage("playingObj/C9/c9.1.png");
    player5I = loadImage("playingObj/C10/c10.1.png");

    //footballs.....................................
    norfI = loadImage("footballs/F.png")
    bricfI = loadImage("footballs/BF.png")
    silfI = loadImage("footballs/SF.png")
    golfI = loadImage("footballs/GF.png")

    //music...........................................
    bts = loadSound("music/IDOL.mp3")
    bts1 = loadSound("music/MIC Drop.mp3")

    goalImage=loadImage("playingObj/GP.png")

    fI = loadImage("footballs/F.png")
}

function setup(){
    var canvas = createCanvas(displayWidth-20,displayHeight-40);
    engine = Engine.create();
    world = engine.world;

    //edges.....................................................
    b = createSprite(displayWidth/2+950,displayHeight/2-20,50,1020);
    b.visible = false;

    b1 = createSprite(displayWidth/2-970,displayHeight/2-20,50,1020)
    b1.visible = false;

    b2 = createSprite(displayWidth/2-20,displayHeight/2+500,2000,50)
    b2.visible = false;

    b3 = createSprite(displayWidth/2-20,displayHeight/2-540,2000,50)
    b3.visible = false;

    bg = createSprite(displayWidth/2,displayHeight/2,displayWidth*100,displayHeight*100)
    bg.addImage("bg",bgI);
    bg.velocityX=-2
    bg.scale =3.8
    bgI.scale = 2

    ff = createSprite(displayWidth/2+600,displayHeight/3+430,100,20);
    ff.visible = false; 

    ff1 = createSprite(displayWidth/2+500,displayHeight/3+450,20,100);
    ff1.visible = false; 

    //gp................................................................
    f= createSprite(displayWidth/2-650,displayHeight/2+400,0,50);
    f.addImage("f",fI);
    f.scale = 0.03;    
    
    goal = createSprite(displayWidth/2+650,displayHeight/3+530,0,50);
    goal.addImage("goal",goalImage);
    goal.scale = 1;

    //logo...........................................................
    ang = createSprite(displayWidth/2-500,displayHeight/2+100,50,50);
    ang.addImage("ang",angI);
    ang.scale = 1;
    ang.visible = false;

    //buuttons..........................................................
    pause = createSprite(displayWidth/25,displayHeight/8-50,50,50);
    pause.addImage("pause",pauseI);
    pause.scale=0.18;
    pause.visible = false;

    reload = createSprite(displayWidth/25,displayHeight/8+50,50,50);
    reload.addImage("reload",reloadI);
    reload.scale=0.1;
    reload.visible = false;


    setting = createSprite(displayWidth/2+500,displayHeight/2+300,50,50)
    setting.addImage("setting",settingI);
    setting.scale = 0.1
    setting.visible = false;
    
    forward= createSprite(displayWidth/2+750,displayHeight/2+300,50,50)
    forward.addImage("forward",forwardI);
    forward.scale=0.3;
    forward.visible = false;

    for1 = createSprite(displayWidth/2+850,displayHeight/2+400,50,50)
    for1.addImage("for1",forwardI);
    for1.scale=0.15;
    for1.visible = false;

    for2 = createSprite(displayWidth/2+700,displayHeight/2+400,50,50)
    for2.addImage("for2",forwardI);
    for2.scale=0.15;
    for2.visible = false;

    backward=createSprite(displayWidth/25,displayHeight/20,50,50);
    backward.addImage("backward",backwardI);
    backward.scale=0.15;
    backward.visible = false;

    back=createSprite(displayWidth/25,displayHeight/8,50,50);
    back.addImage("back",backwardI);
    back.scale=0.15;
    back.visible = false;

    back1 = createSprite(displayWidth/25,displayHeight/8+250,50,50);
    back1.addImage("back1",backwardI);
    back1.scale=0.1;
    back1.visible = false;


    sound = createSprite(displayWidth/2-180,displayHeight/2-100,50,50);
    sound.addImage("sound",soundI);
    sound.visible=false;
    sound.scale = 0.08;

    sound2 = createSprite(displayWidth/25,displayHeight/8+150,50,50)
    sound2.addImage("sound2",soundI);
    sound2.visible=false;
    sound2.scale = 0.04

    music=createSprite(displayWidth/2+20,displayHeight/2-100,50,50);
    music.addImage("music",musicI);
    music.visible=false;
    music.scale=0.25;  
    
    music2 = createSprite(displayWidth/2+20,displayHeight/2-100,50,50)
    music2.addImage("music2",musicI2)
    music2.visible=false;
    music2.scale = 0.25

    info=createSprite(displayWidth/2+240,displayHeight/2-100,50,50);
    info.addImage("info",infoI);
    info.visible=false;
    info.scale=0.09;  
    
    info1=createSprite(displayWidth/2,displayHeight/2,0,0);
    info1.addImage("info1",info1I);
    info1.visible=false;
    info1.scale=2;    

    mark = createSprite(displayWidth/2+320,displayHeight/2+150,50,50);
    mark.addImage("mark",markI);
    mark.visible=false;
    mark.scale = 0.3;

    //countries...............................................
    bang = createSprite(displayWidth/4-100,displayHeight/6,0,0);
    bang.addImage("bang",bangI);
    bang.scale = 0.27;

    china = createSprite(displayWidth/2-150,displayHeight/6,0,0);
    china.addImage("china",chinaI);
    china.scale = 0.21;

    india = createSprite(displayWidth/2+300,displayHeight/6,0,0);
    india.addImage("india",indiaI);
    india.scale = 0.25;

    korea = createSprite(displayWidth/2+750,displayHeight/6,0,0);
    korea.addImage("korea",koreaI);
    korea.scale = 0.32;

    pak = createSprite(displayWidth/4-100,displayHeight/3+100,0,0);
    pak.addImage("pak",pakI);
    pak.scale = 0.17;

    sri = createSprite(displayWidth/2+300,displayHeight/3+100,0,0);
    sri.addImage("sri",sriI);
    sri.scale = 0.18;

    eng = createSprite(displayWidth/2-150,displayHeight/3+100,0,50);
    eng.addImage("eng",engI);
    eng.scale = 0.13;

    usa = createSprite(displayWidth/2+750,displayHeight/3+100,0,50);
    usa.addImage("usa",usaI);
    usa.scale = 0.15;

    //characters.....................................................
    shin = createSprite(displayWidth/4+500,displayHeight/3+450,0,50);
    shin.addImage("shin",shinI);
    shin.scale = 1.5;

    chan = createSprite(displayWidth/4+100,displayHeight/3+430,0,50);
    chan.addImage("chan",chanI);
    chan.scale = 4;

    doraemon = createSprite(displayWidth/3+850,displayHeight/3+430,0,50);
    doraemon.addImage("doraemon",doraemonI);
    doraemon.scale = 1.5;

    nobi= createSprite(displayWidth/4+550,displayHeight/3+430,0,50);
    nobi.addImage("nobi",nobiI);
    nobi.scale = 3.82;

    nobita = createSprite(displayWidth/3+800,displayHeight/3+440,0,50);
    nobita.addImage("nobita",nobitaI);
    nobita.scale =0.7; 

    player1 = createSprite(displayWidth/4+100,displayHeight/3+430,0,50);
    player1.addImage("player1",player1I);
    player1.scale = 1;

    //gameState 2 enemy characters............................................
    player2 = createSprite(displayWidth/4+100,displayHeight/3+550,0,50);
    player2.addImage("player2",chanI);
    player2.scale = 1.5;

    player3 = createSprite(displayWidth/3+900,displayHeight/3+550,0,50);
    player3.addImage("player3",doraemonI);
    player3.scale = 0.6;

    player4= createSprite(displayWidth/4+550,displayHeight/6,0,50);
    player4.addImage("player4",nobiI);
    player4.scale = 0.15;

    //gameState 2  characters............................................

    player5 = createSprite(displayWidth/2-800,displayHeight/3+550,0,50);
    player5.addImage("player5",shinI);
    player5.scale = 0.6;

    player6 = createSprite(displayWidth/2-200,displayHeight/2-400,0,50);
    player6.addImage("player6",nobitaI);
    player6.scale =0.2; 

    player7 = createSprite(displayWidth/4+750,displayHeight/3+530,0,50);
    player7.addImage("player7",player1I);
    player7.scale = 0.4;

    //levels..............................................................
    norf = createSprite(displayWidth/2-600,displayHeight/2-350,0,50);
    norf.addImage("norf",norfI);
    norf.scale =0.05; 
    
    norf1 = createSprite(displayWidth/2-300,displayHeight/2-350,0,50);
    norf1.addImage("norf1",norfI);
    norf1.scale =0.05; 

    norf2 = createSprite(displayWidth/2,displayHeight/2-350,0,50);
    norf2.addImage("norf2",norfI);
    norf2.scale =0.05; 

    norf3 = createSprite(displayWidth/2+300,displayHeight/2-350,0,50);
    norf3.addImage("norf3",norfI);
    norf3.scale =0.05; 

    norf4 = createSprite(displayWidth/2+600,displayHeight/2-350,0,50);
    norf4.addImage("norf4",norfI);
    norf4.scale =0.05; 

    bricf = createSprite(displayWidth/2-600,displayHeight/2-150,0,50);
    bricf.addImage("bricf",bricfI);
    bricf.scale =0.15; 
    
    bricf1 = createSprite(displayWidth/2-300,displayHeight/2-150,0,50);
    bricf1.addImage("bricf1",bricfI);
    bricf1.scale =0.15; 

    bricf2 = createSprite(displayWidth/2,displayHeight/2-150,0,50);
    bricf2.addImage("bricf2",bricfI);
    bricf2.scale =0.15; 

    bricf3 = createSprite(displayWidth/2+300,displayHeight/2-150,0,50);
    bricf3.addImage("bricf3",bricfI);
    bricf3.scale =0.15; 

    bricf4 = createSprite(displayWidth/2+600,displayHeight/2-150,0,50);
    bricf4.addImage("bricf4",bricfI);
    bricf4.scale =0.15; 

   
}

function draw(){ 

    Engine.update(engine);

    if(bg.x<displayWidth/2-240){
        bg.x=bg.width/2+900
    }

    if(mousePressedOver(forward)){
        bts1.play()
    }

    if(mousePressedOver(sound2) || mousePressedOver(sound)){
        bts1.stop()
    }

    //gameState=0
    if(gameState === 0){
        background(bgI)

        

        strokeWeight(18)
        stroke("blue")
        fill("Lightblue");
        textFont("pristina")
        textStyle(BOLD)
        textSize(200)
        text("!!Foot - Fighters!!",displayWidth/2-620,displayHeight/6)

        bg.visible = false;

        //flags
       
        bang.visible = false;
        china.visible = false;
        india.visible = false;
        korea.visible = false;
        pak.visible = false;
        sri.visible = false;
        usa.visible = false;
        eng.visible = false;

        //characters
        shin.visible = false;
        chan.visible = false;
        doraemon.visible = false;
        nobi.visible = false;
        nobita.visible = false;
        player1.visible = false;

        //buttons
        for1.visible = false;
        for2.visible = false;
        backward.visible = false;
        pause.visible = false;
        reload.visible = false;
        back1.visible = false;

        //logo & buttons
        ang.visible = true;
        setting.visible = true;
        forward.visible = true;
        sound2.visible = false;
        
        //levels
        norf.visible = false;
        norf1.visible = false;
        norf2.visible = false;
        norf3.visible = false;
        norf4.visible = false;

        bricf.visible = false;
        bricf1.visible = false;
        bricf2.visible = false;
        bricf3.visible = false;
        bricf4.visible = false;

        player2.visible = false;
        player3.visible = false;
        player4.visible = false;  
        player5.visible = false;
        player6.visible = false;
        player7.visible = false;  
        goal.visible = false; 
        f.visible = false;        

        if(mousePressedOver(setting)){
        sound.visible = true;
        music.visible = true;
        mark.visible = true;
        info.visible = true;
        }

        if(mousePressedOver(info)){
            info1.visible = true
            info.visble = false
            sound.visible = false;
            music.visible = false;
        }

        if(mousePressedOver(mark)){
            sound.visible = false;
            music.visible = false;
            mark.visible = false;
            info.visible = false;
            info1.visible = false;
        }

        if(mousePressedOver(forward) ){
            gameState = 1
        }
    }

    //gameState=1
    if(gameState === 1){
        background(bgI2)
        bg.visible = false;

        strokeWeight(8)
        stroke("white")
        fill("green");
        textFont("pristina")
        textStyle(BOLD)
        textSize(80)
        text("Bangl",displayWidth/2-750,displayHeight/3-30)
        fill("red");
        text("adesh",displayWidth/2-580,displayHeight/3-30)

        fill("red");
        text("Ch",displayWidth/2-250,displayHeight/3-10)
        fill("yellow");
        text("ina",displayWidth/2-165,displayHeight/3-10)

        fill("darkorange");
        text("In",displayWidth/2+220,displayHeight/3-10)
        fill("green");
        text("dia",displayWidth/2+290,displayHeight/3-10)

        fill("darkorange");
        text("In",displayWidth/2+220,displayHeight/3-10)
        fill("green");
        text("dia",displayWidth/2+290,displayHeight/3-10)

        fill("Red");
        text("Ko",displayWidth/2+650,displayHeight/3-10)
        fill("Blue");
        text("rea",displayWidth/2+745,displayHeight/3-10)

        fill("Green");
        text("Pakistan",displayWidth/2-720,displayHeight/2+100);

        fill("Blue");
        text("Eng",displayWidth/2-285,displayHeight/2+100);
        fill("Red");
        text("land",displayWidth/2-165,displayHeight/2+100);

        fill(237,209,10);
        text("Sri ",displayWidth/2+150,displayHeight/2+100)
        fill(120,24,29);
        text("Lanka",displayWidth/2+260,displayHeight/2+100)

        
        fill("Red");
        text("Ame",displayWidth/2+605,displayHeight/2+100)
        fill("Blue");
        text("rica",displayWidth/2+745,displayHeight/2+100)
        

        ang.visible = false;
        setting.visible = false;
        forward.visible = false; 
        back.visible = false;  
        pause.visible = false;
        reload.visible = false;
        back1.visible = false;
        sound2.visible = false;

        player2.visible = false;
        player3.visible = false;
        player4.visible = false;  
        player5.visible = false;
        player6.visible = false;
        player7.visible = false;
        goal.visible = false;
        
        sound.visible = false;
        music.visible = false;
        mark.visible = false;
        info.visible = false;
        info1.visible = false;
        
        backward.visible = true;
        
        bang.visible = true;
        china.visible = true;
        india.visible = true;
        korea.visible = true;
        pak.visible = true;
        sri.visible = true;
        usa.visible = true;
        eng.visible = true;
        f.visible = false;

        if(mousePressedOver(backward) ){
            gameState = 0;
        }

        if(mousePressedOver(bang) || mousePressedOver(pak) || mousePressedOver(india) || mousePressedOver(usa) || mousePressedOver(china) || mousePressedOver(eng)|| mousePressedOver(korea)|| mousePressedOver(sri)){
            for1.visible = false;
            for2.visible = true;
            chan.visible = false;
            doraemon.visible = false;
            nobi.visible = false;  
            
            shin.visible = true;
            nobita.visible = true;
            player1.visible = true;

         }

         if(mousePressedOver(for2)){
            gameState = 2;
        
        }



    }

    if(gameState === 2){

       
        createEdgeSprites();
        f.bounceOff(b);
        f.bounceOff(b1);
        f.bounceOff(b2);
        f.bounceOff(b3);

        bg.visible = true;
        pause.visible = true;

        player5.visible = true;
        player6.visible = true;
        player7.visible = true;
        

        //buttons
        backward.visible = false;
       

        back.visible = false;
        for1.visible = false;
        for2.visible = false;
        

        //flags
        bang.visible = false;
        china.visible = false;
        india.visible = false;
        korea.visible = false;
        pak.visible = false;
        sri.visible = false;
        usa.visible = false;
        eng.visible = false;

        //characters
        shin.visible = false;
        chan.visible = false;
        doraemon.visible = false;
        nobi.visible = false;
        nobita.visible = false;
        player1.visible = false;

        //levels
        norf.visible = false;
        norf1.visible = false;
        norf2.visible = false;
        norf3.visible = false;
        norf4.visible = false;

        bricf.visible = false;
        bricf1.visible = false;
        bricf2.visible = false;
        bricf3.visible = false;
        bricf4.visible = false;

        //3rd state characters.
        player2.visible = false;
        player3.visible = false;
        player4.visible = false;
        f.visible = true;
        goal.visible = true;
        
  

        

        if (mousePressedOver(pause)) {
            reload.visible = true
            sound2.visible= true;
            back1.visible = true;
        }

        if (mousePressedOver(back1)) {
            gameState = 1
        }

        if (mousePressedOver(sound2)) {
            bts1.stop();
            bts.stop()
        }

        if(gS === "serve"){
            f.velocityX = 1
            f.velocityY = 1

            player2.visible = true;
            player3.visible = true;
            player4.visible = true;

            if(keyDown("space")){
                gS = "play";                
            }
        }

           
           
        if(gS === "play"){
                
           if(keyDown(DOWN_ARROW)){
                f.velocityY = Math.round(random(-20,20))
                f.velocityX = Math.round(random(-20,20))
            }
        
            if(keyDown(UP_ARROW)){
                f.velocityY = Math.round(random(-20,20))
                f.velocityX = Math.round(random(-20,20))
            }

            if(f.isTouching(player5) || f.isTouching(player6) || f.isTouching(player7)){            
                gS = "serve"           
            }

            player2.visible = true;
            player3.visible = true;
            player4.visible = true;
        }
        
        if(f.isTouching(player2)){            
            player2.visible = false;
        }
    
        if(f.isTouching(player3)){            
            player3.visible = false;
        }
    
        if(f.isTouching(player4)){            
            player4.visible = false;
        } 

    }


  

    if(mousePressedOver(for2)){
        bts1.stop()
        bts.play()
    }

    if(mousePressedOver(back1)){
        bts1.play()
        bts.stop()
    }

    if(mousePressedOver(backward)){
        bts1.stop()    
    }

    drawSprites();

    if(gameState === 3){
        bts1.stop();
        bts.stop();

    }

}

function serve(){
    f.velocityY = 5
}


