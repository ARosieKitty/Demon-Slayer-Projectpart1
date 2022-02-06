class Form{
    constructor() {
        this.playButton = createButton ("Play");
        this.titleImg = createImg ("Demon Slayer Logo.png" , "Demon Slayer");
        this.greeting = createP (" Welcome to the demon slayer corporation, you are currently at the lowest rank. To get more powerful and upgrade your ranking you will need to defeat higher-level demons. Farewell demon-slayer, and I wish you the best of luck on your journey.");
        this.nextButton = createButton ("Next");
        background2= loadImage ('background2.png')
        //this.greeting = createElement("h2");
    }

    setElementsPosition(){
        this.playButton. position(950, height / 2 -20);
        this.titleImg.position (120,50);
        //this.greeting.position (width/2 -120, 50);
    }

    setElementsStyle(){
        this.titleImg.class ("gameTitle");
        this.playButton.class ("customButton");
        this.greeting.class("greeting");
        this.nextButton.class("nextButton");
        // this.background1Img.class("background");
    }

    hide(){
        this.playButton.hide();
        //this.background1Img.hide();
        this.titleImg.hide();
        this.greeting.hide();
        this.nextButtong.hide();
    }

    handleMousePressed(){
        this.playButton.mousePressed(() =>{
                this.playButton.hide();
                this. titleImg.hide();
                this.greeting.position (350,height/2-100);
                this.nextButton.position (950,height/2+200)
            });
        this.nextButton.mousePressed(() =>{
            this.greeting.hide();
            this.nextButton.hide();
            this.background2.position (windowWidth, windowHeight)


        });
        
    }

    display(){
        this.setElementsPosition();
        this.setElementsStyle();
        this.handleMousePressed();
    }
}


