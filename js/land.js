function Land(option){
    this.ctx=option.ctx;
    this.landImg=option.landImg;
    this.landX=option.landX;
    this.c=option.c;

    this.landW=this.landImg.width;
    this.landH=this.landImg.height;
    this.landSpeed=2;
}
Land.prototype={
    drawLand:function(){
        this.ctx.drawImage(this.landImg,this.landX,this.c.height-this.landH);
        this.landX-=this.landSpeed;
        if(this.landX<-this.landW){
           this.landX+=this.landW*4; 
        }
    }
}