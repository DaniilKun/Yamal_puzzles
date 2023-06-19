// Сердечки
    function createIcon(x, y, frame, icon, rollIcon) {
        if (zot(x)) x = 30;
        if (zot(y)) y = 30;
        if (zot(frame)) frame = zimDefaultFrame;
        if (zot(icon)) icon = frame.makeIcon(null,darker).alp(.8).centerReg({add:false});
        if (zot(rollIcon)) rollIcon = frame.makeIcon(null,darker).alp(1).centerReg({add:false});
        return new Button({
            label:"",
            width:icon.width,
            height:icon.height,
            backing:icon,
            rollBacking:rollIcon,
            style:false
        }).sca(.5).pos(x, y, RIGHT, BOTTOM).alp(0).animate({alpha:1}, zim.TIME=="seconds"?.7:700).tap(()=>{zgo("", "_blank")});
    }

    function createGreet(x, y, frame) {
        if (zot(frame)) frame = zimDefaultFrame;
        
        if (zot(x)) x = 40;
        if (zot(y)) y = 30;
        
        // if (zot(x)) x = 80;
        // if (zot(y)) y = 40;
        // const greet = new Button({
        //     width:400,
        //     label:"VIEW GREETING",
        //     backgroundColor:blue,
        //     rollBackgroundColor:green,
        //     corner:0
        // }).centerReg({add:false}).sca(.5).pos(x,y,false,true).tap(go);
        // const greetRings = greet.rings = frame.makeCircles(30, true).loc(greet).mov(-greet.width/2-20);
        // greetRings.getChildAt(0).sha().tap(go);
        // function go() {
        //     zgo("https://codepen.io/zimjs/details/QPeVRX", "_blank");
        // }
        // frame.stage.update();
        
        var greet = new Button({
            width:220,
            height:200,
            label:"MORE\nCREATIVE\nCODING",
            corner:0,
            color:lighter,
            backgroundColor:black,
            rollBackgroundColor:purple,
            borderColor:silver,
            borderWidth:2
        }).sca(.3).alp(0).pos(x,y,LEFT,BOTTOM).animate({wait:1, time:.5, props:{alpha:1}}).tap(()=>{
            zgo("", "_blank")
        });	
        greet.rings = new Circle(); // just for backwards compatibility
        
        return greet;
    }

    function createCode(x, y, frame, wait) {
        if (zot(frame)) frame = zimDefaultFrame;
        if (zot(x)) x = 120;
        if (zot(y)) y = 110;
        if (zot(wait)) wait = 1000;
        const creative = new Container(100,70)
            .pos(x,y,LEFT,BOTTOM)
            .animate({props:{alpha:0}, from:true, wait:wait})
            .tap(()=>{
                zgo("", "_blank")
            });
        const rect = new Rectangle(65,40,"red",null,null,8)
            .pos(0,0,CENTER,TOP,creative)
            .sha("rgba(0,0,0,.2)",3,3,3)
            .alp(.6)
            .hov(1);
        new Triangle(20,20,20,white).rot(90).center(rect).mov(3).addTo(creative);
        new Label("CREATIVE CODING", 14, null, white).alp(.8).pos(0,0,CENTER,BOTTOM,creative)
        return creative;
    }
    
    function createNFT(url, backgroundColor) {
        
        if (zot(url)) url = "";
        if (backgroundColor===true) backgroundColor = darker;
        // Make letters from Rectangle parts
        
        // each time colors is called it will get the next in this series (wraps too)
        const colors = series(blue, green, pink, orange, pink, yellow);
        
        // make the vertical stems with Tile just for convenience
        const letters = new Tile(new Rectangle(100,300,colors), 4, 1, 150);
        
        // add rectangles based on location of stems and adjust one of the stems
        new Rectangle(100,320,colors())
            .reg(100) // makes rotating from top right corner easier
            .rot(-44) // just eyeballed ;-)
            .loc(letters.items[0], null, letters) // using loc(obj,null) rather than loc(x,y)
            .mov(100); 
        letters.items[2].mov(-100); // move stem of F back
        new Rectangle(250,100,colors()) // F top
            .loc(letters.items[2], null, letters);    
        new Rectangle(100,100,colors())
            .loc(letters.items[2], null, letters)
            .mov(99.5,99.5);
        new Rectangle(125,100,colors())
            .loc(letters.items[3], null, letters)
            .mov(-75);
        new Rectangle(125,100,colors())
            .loc(letters.items[3], null, letters)
            .mov(50);
            
        letters.loop(letter => {
            letter.alp(0);
        });
        letters.items[2].mov(0,1);
        letters.items[3].mov(0,1);
        letters.items[3].color = blue
        letters.getChildAt(letters.numChildren-2).color = green;
        letters.getChildAt(letters.numChildren-1).color = orange;
        
        letters.resetBounds();
        letters.animate({
            wait:.75,
            props:{alpha:1},
            time:.3,
            sequence:.06
        });
        
        const holder = new Container();
        letters.sca(.12).addTo(holder);
        if (backgroundColor) {
            new Rectangle(holder.width+12, holder.height+12, backgroundColor)
                .addTo(holder)
                .bot()
                .alp(0)
                .animate({
                    wait:.75,
                    props:{alpha:1},
                    time:.8
                });
            letters.mov(6,6);
        }
        holder.expand().tap(()=>{
            zgo(url, "_blank")
        }); 
        
        return holder;
    }
    
    setTimeout(()=>{
        if (rand()>.5) {
            const emitter = new Emitter({
                obj:new Label(series("🤍","🤍","🤍","🤍","🤍","🤍","🤍","🤍","🤍","🤍","❤️","❤️","❤️","❤️","❤️","❤️","❤️","❤️","❤️","❤️","❤️","❤️")),
                width:50,
                height:50,
                life:2,
                interval:.06,
                angle:{min:120, max:190},
                force:{min:1, max:5},
                gravity:3
            }).spurt(20).pos(10,10,RIGHT);
        } else {		
            let e = new Label("🤍", 50)
                .alp(0)
                .reg(CENTER)
                .pos(40,40,RIGHT)
                .animate({alpha:1}, .7);					 
            timeout(2, ()=>{
                new Label("❤️", 50).reg(CENTER).loc(e).animate({
                    props:{scale:2},
                    time:.3,
                    rewind:true, 
                    call:target=>{
                        timeout(1, ()=>{
                            target.animate({alpha:0}, 2, null, target=>{
                                target.dispose();
                                target = null;
                            })
                        });
                    }
                });
                e.dispose();
                e = null;
            });
        }				
    }, 3000);
