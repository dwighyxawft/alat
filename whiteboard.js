    window.addEventListener("load", function(){
        var sltcolor;
        var canvas = document.querySelector("#canvas");
        var color = document.querySelector(".color");
        var form = document.querySelector("#form");
        form.addEventListener("submit", function(e){
            e.preventDefault();
            sltcolor = color.value;
        }); 
        console.log(sltcolor);
        var ctx = canvas.getContext("2d");
//Resizing
        canvas.height = 500;
        canvas.width = window.innerWidth;
        //Learn about Canvas
        /*ctx.strokeStyle = "blue"; //This changes the border or stroke of the stroked Rect canvas
        ctx.lineWidth = 5;//This changes the width of the strokes in the canvas
        //ctx.fillRect(100, 100, 200, 200);//The 1st two values specify the position absolutely.ie position(hori, vert). The last two values specifies the size ie size(width, height)
        ctx.strokeRect(100, 100, 200, 200);//The values are the same for above. strikeRect only shows the borders of the canvas
        ctx.strokeStyle = "red";
        ctx.strokeRect(100, 100, 200, 200);//The values are the same for above. strikeRect only shows the borders of the canvas
        ctx.beginPath()//This is used to begin a path where to draw.
        ctx.moveTo(100, 100)//This specifies the position where to start the drawing. e.g start drawing from the position 100px horizontal to the left and 100px vertical from the top downwards
        ctx.lineTo(200, 100);//This specifies the how long and high the line will be. i.e 200px long. The reason behind the 100px is because we have the position on the ctx.moveTo to be vertically 100px so the line is already high but wont show. assuming the moveTo(100, 200). and we want to draw a straight line to be 300px long then it will be ctx.lineTo(300, 200)
        ctx.lineTo(200, 150);//This draws a line on the same drawing to be the same width then draw a vertical line 50px downwards joined to it
        ctx.closePath()//This closes the path between the drawn lines to form a triangle
        ctx.stroke();//This gives the line that is drawn a color*/

        //Making the whiteboard
        let paint = false;

        function startPosition(e){
            paint = true;
            draw(e);
        }
        function endPosition(){
            paint = false;
            ctx.beginPath();
        }
        function draw(e){
            if(!paint) return;
            ctx.lineWidth = 5;
            ctx.lineCap = "round";//This is responsible for curving the line the way you want it and making the cap of the line in round form
            ctx.strokeStyle = sltcolor;
            ctx.lineTo(e.clientX, e.clientY);
            ctx.stroke()
            ctx.beginPath()
            ctx.moveTo(e.clientX, e.clientY);
        }
        canvas.addEventListener("mousedown", startPosition);
        canvas.addEventListener("mouseup", endPosition);
        canvas.addEventListener("mousemove", draw);
    })