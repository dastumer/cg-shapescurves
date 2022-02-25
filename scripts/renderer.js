class Renderer {
    // canvas:              object ({id: __, width: __, height: __})
    // num_curve_sections:  int
    constructor(canvas, num_curve_sections, show_points_flag) {
        this.canvas = document.getElementById(canvas.id);
        this.canvas.width = canvas.width;
        this.canvas.height = canvas.height;
        this.ctx = this.canvas.getContext('2d');
        this.slide_idx = 0;
        this.num_curve_sections = num_curve_sections;
        this.show_points = show_points_flag;
    }

    // n:  int
    setNumCurveSections(n) {
        this.num_curve_sections = n;
        this.drawSlide(this.slide_idx);
    }

    // flag:  bool
    showPoints(flag) {
        this.show_points = flag;
        this.drawSlide(this.slide_idx);
    }
    
    // slide_idx:  int
    drawSlide(slide_idx) {
        this.slide_idx = slide_idx;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        switch (this.slide_idx) {
            case 0:
                this.drawSlide0(this.ctx);
                break;
            case 1:
                this.drawSlide1(this.ctx);
                break;
            case 2:
                this.drawSlide2(this.ctx);
                break;
            case 3:
                this.drawSlide3(this.ctx);
                break;
        }
    }

    // ctx:          canvas context
    drawSlide0(ctx) {
        let left_bottom = {x:100, y:100};
        let right_top = {x:700, y:500};
        this.drawRectangle(left_bottom,right_top,[255,0,0,255],ctx);
    }

    // ctx:          canvas context
    drawSlide1(ctx) {
        let center = {x:400, y:300};
        let radius = 200;
        this.drawCircle(center, radius, [0,255,0,255],ctx);
    }

    // ctx:          canvas context
    drawSlide2(ctx) {
        let pt0 = {x:100, y:300};
        let pt1 = {x:300, y:500};
        let pt2 = {x:400, y:100};
        let pt3 = {x:700, y:300};
        this.drawBezierCurve(pt0, pt1, pt2, pt3, [255,0,255,255], ctx);
    }

    // ctx:          canvas context
    drawSlide3(ctx) {
        let color = [52, 113, 235,255];
        //P
        this.drawLine({x:20, y:500}, {x:20, y:100}, color,ctx);
        this.drawBezierCurve({x:20, y:500}, {x:250, y:500}, {x:250, y:300}, {x:20, y:300}, color,ctx);

        //e
        //this.drawBezierCurve({x:300, y:200}, {x:300, y:400}, {x:0, y:100}, {x:300, y:100}, color,ctx);

        this.drawCircle({x:250, y:200}, 100, color, ctx);
        this.drawLine({x:150, y:200}, {x:350, y:200}, color, ctx);

        this.drawBezierCurve({x:250, y:100}, {x:250+0.55191502449351*100, y:100}, {x:350, y:200-0.55191502449351*100}, {x:350, y:200}, [255,255,255,255], ctx);
        this.drawBezierCurve({x:250, y:101}, {x:250+0.55191502449351*100, y:101}, {x:350, y:201-0.55191502449351*100}, {x:350, y:201}, [255,255,255,255], ctx);
        this.drawBezierCurve({x:250, y:99}, {x:250+0.55191502449351*100, y:99}, {x:350, y:199-0.55191502449351*100}, {x:350, y:199}, [255,255,255,255], ctx);
        this.drawBezierCurve({x:251, y:100}, {x:251+0.55191502449351*100, y:100}, {x:351, y:200-0.55191502449351*100}, {x:351, y:200}, [255,255,255,255], ctx);
        this.drawBezierCurve({x:249, y:100}, {x:249+0.55191502449351*100, y:100}, {x:349, y:200-0.55191502449351*100}, {x:349, y:200}, [255,255,255,255], ctx);

        this.drawBezierCurve({x:250, y:100}, {x:250+0.55191502449351*100, y:100}, {x:340, y:180-0.55191502449351*100}, {x:340, y:130}, color, ctx);

        //t
        this.drawLine({x:400, y:500}, {x:400, y:100}, color,ctx);
        this.drawLine({x:325, y:400}, {x:475, y:400}, color,ctx);

        //e
        this.drawCircle({x:550, y:200}, 100, color, ctx);
        this.drawLine({x:450, y:200}, {x:650, y:200}, color, ctx);

        this.drawBezierCurve({x:550, y:100}, {x:550+0.55191502449351*100, y:100}, {x:650, y:200-0.55191502449351*100}, {x:650, y:200}, [255,255,255,255], ctx);
        this.drawBezierCurve({x:550, y:101}, {x:550+0.55191502449351*100, y:101}, {x:650, y:201-0.55191502449351*100}, {x:650, y:201}, [255,255,255,255], ctx);
        this.drawBezierCurve({x:550, y:99}, {x:550+0.55191502449351*100, y:99}, {x:650, y:199-0.55191502449351*100}, {x:650, y:199}, [255,255,255,255], ctx);
        this.drawBezierCurve({x:551, y:100}, {x:551+0.55191502449351*100, y:100}, {x:651, y:200-0.55191502449351*100}, {x:651, y:200}, [255,255,255,255], ctx);
        this.drawBezierCurve({x:549, y:100}, {x:549+0.55191502449351*100, y:100}, {x:649, y:200-0.55191502449351*100}, {x:649, y:200}, [255,255,255,255], ctx);

        this.drawBezierCurve({x:550, y:100}, {x:550+0.55191502449351*100, y:100}, {x:640, y:180-0.55191502449351*100}, {x:640, y:130}, color, ctx);
        
        //r
        this.drawLine({x:700, y:300}, {x:700, y:100}, color,ctx);
        this.drawBezierCurve({x:700, y:250}, {x:720, y:280}, {x:740, y:300}, {x:780, y:280}, color,ctx);
    }

    // left_bottom:  object ({x: __, y: __})
    // right_top:    object ({x: __, y: __})
    // color:        array of int [R, G, B, A]
    // ctx:          canvas context
    drawRectangle(left_bottom, right_top, color, ctx) {
        let left_top = {x:left_bottom.x, y:right_top.y};
        let right_bottom = {x:right_top.x, y:left_bottom.y};
        this.drawLine(left_bottom, left_top, color, ctx);
        this.drawLine(left_top, right_top, color, ctx);
        this.drawLine(right_top, right_bottom, color, ctx);
        this.drawLine(right_bottom, left_bottom, color, ctx);
        if(this.show_points){
            this.drawPoint(left_bottom,color,ctx);
            this.drawPoint(right_bottom,color,ctx);
            this.drawPoint(left_top,color,ctx);
            this.drawPoint(right_top,color,ctx);
        }
    }

    // center:       object ({x: __, y: __})
    // radius:       int
    // color:        array of int [R, G, B, A]
    // ctx:          canvas context
    drawCircle(center, radius, color, ctx) {
        let theta = 0;
        let increment = 2*Math.PI/this.num_curve_sections;
        let thispoint = {x:center.x+radius, y:center.y};
        let nextpoint = {x:0,y:0};
        for (let i=0; i<this.num_curve_sections; i++){
            theta = theta + increment;
            nextpoint.x=center.x+radius*Math.cos(theta);
            nextpoint.y=center.y+radius*Math.sin(theta);
            this.drawLine(thispoint,nextpoint,color,ctx);
            if(this.show_points){
                this.drawPoint(thispoint,color,ctx);
            }
            thispoint = {x:nextpoint.x, y:nextpoint.y};
        }
    }

    // pt0:          object ({x: __, y: __})
    // pt1:          object ({x: __, y: __})
    // pt2:          object ({x: __, y: __})
    // pt3:          object ({x: __, y: __})
    // color:        array of int [R, G, B, A]
    // ctx:          canvas context
    drawBezierCurve(pt0, pt1, pt2, pt3, color, ctx) {
        let theta = 0;
        let increment = 1/this.num_curve_sections;
        let thispoint = {x:pt0.x, y:pt0.y};
        let nextpoint = {x:0,y:0};
        for (let i=0; i<this.num_curve_sections; i++){
            theta = theta + increment;
            nextpoint.x=Math.pow((1-theta),3)*pt0.x+3*Math.pow((1-theta),2)*theta*pt1.x+3*(1-theta)*Math.pow(theta,2)*pt2.x+Math.pow(theta,3)*pt3.x;
            nextpoint.y=Math.pow((1-theta),3)*pt0.y+3*Math.pow((1-theta),2)*theta*pt1.y+3*(1-theta)*Math.pow(theta,2)*pt2.y+Math.pow(theta,3)*pt3.y;
            this.drawLine(thispoint,nextpoint,color,ctx);
            if(this.show_points){
                this.drawPoint(thispoint,color,ctx);
            }
            thispoint = {x:nextpoint.x, y:nextpoint.y};
        }
        if(this.show_points){
            this.drawPoint(thispoint,color,ctx);
            this.drawPoint(pt1, [255-color[0], 255-color[1], 255-color[2], 255], ctx);
            this.drawPoint(pt2, [255-color[0], 255-color[1], 255-color[2], 255], ctx);
        }
    }

    // pt0:          object ({x: __, y: __})
    // pt1:          object ({x: __, y: __})
    // color:        array of int [R, G, B, A]
    // ctx:          canvas context
    drawLine(pt0, pt1, color, ctx)
    {
        ctx.strokeStyle = 'rgba(' + color[0] + ',' + color[1] + ',' + color[2] + ',' + (color[3]/255.0) + ')';
        ctx.beginPath();
        ctx.moveTo(pt0.x, pt0.y);
        ctx.lineTo(pt1.x, pt1.y);
        ctx.stroke();
    }

    drawPoint(pt0, color, ctx)
    {
        this.drawLine({x:pt0.x-1,y:pt0.y-1}, {x:pt0.x-1,y:pt0.y+1},color,ctx);
        this.drawLine({x:pt0.x-1,y:pt0.y+1}, {x:pt0.x+1,y:pt0.y+1},color,ctx);
        this.drawLine({x:pt0.x+1,y:pt0.y+1}, {x:pt0.x+1,y:pt0.y-1},color,ctx);
        this.drawLine({x:pt0.x+1,y:pt0.y-1}, {x:pt0.x-1,y:pt0.y-1},color,ctx);
    }
};
