function Sky(option) {
    this.ctx = option.ctx;
    this.skyImg=option.skyImg;
    this.skyX = option.skyX;

    this.skyW=this.skyImg.width;
    this.skySpeed = 2;
}
Sky.prototype = {
    drawSky: function () {
        this.skyX-=this.skySpeed;
        if(this.skyX<-this.skyW){
            this.skyX+=2*this.skyW
        }
         this.ctx.drawImage(this.skyImg, this.skyX, 0);
    }
}