function Pipe(option){
    this.ctx=option.ctx;
    this.pipeImgUp=option.pipeImgUp;
    this.pipeImgDown=option.pipeImgDown;
    this.pipeH=this.pipeImgUp.height;
    this.pipeW=this.pipeImgUp.width;
    this.pipeX=option.pipeX;
    this.pipeY=0;
    this.space=150;

    
    this.pipeSpeed=2;
    this.random();
}
Pipe.prototype={
    drawPipe:function(){
        /*绘制上管道*/
        this.ctx.drawImage(this.pipeImgUp,this.pipeX,this.pipeY);
        /*绘制上管道对应的路径*/
        this.ctx.rect(this.pipeX,this.pipeY,this.pipeW,this.pipeH);
        /*绘制下管道*/
        this.ctx.drawImage(this.pipeImgDown,this.pipeX,this.pipeY+this.pipeH+this.space);
        /*绘制下管道对应的路径*/
        this.ctx.rect(this.pipeX,this.pipeY+this.pipeH+this.space,this.pipeW,this.pipeH);
        this.pipeX-=this.pipeSpeed;
        if(this.pipeX<-this.pipeW){
            this.pipeX+=6*3*this.pipeW;
            this.random();
        }
    },
    random:function(){
        this.pipeY=-(Math.random() * 250 + 120);
    }
   
}