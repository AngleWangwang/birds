function Bird(option) {
    this.ctx = option.ctx;
    this.birdImg = option.birdImg;
    this.canvasX = option.canvasX;
    this.canvasY = option.canvasY;

    this.birdW = this.birdImg.width / 3;
    this.birdH = this.birdImg.height;
    this.birdIndex = 0;
    this.birdSpeed = 0;
    this.maxAgl = 45;
    this.maxSpeed = 0.5;
    this.distanceY = 0;
    this.currentAgl = 0
    this.g = 0.0003;
    
}
Bird.prototype = {
    drawBird: function (temT) {
        /*重力加速度*/
        this.birdSpeed = this.birdSpeed + this.g * temT;
        this.distanceY = this.birdSpeed * temT + this.g * temT * temT / 2;

        /*小鸟头部旋转角度*/

        this.currentAgl = this.birdSpeed * this.maxAgl / this.maxSpeed;
        if (this.currentAgl >= this.maxAgl) {
            this.currentAgl = this.maxAgl;
        }
        this.ctx.save();
        this.ctx.translate(this.canvasX + this.birdW / 2, this.canvasY + this.birdH / 2)
        this.ctx.rotate(Math.PI / 180 * this.currentAgl);
        this.ctx.drawImage(this.birdImg, this.birdW * this.birdIndex, 0, this.birdW, this.birdH, -this.birdW / 2, -this.birdH / 2, this.birdW, this.birdH);
        this.canvasY += this.distanceY;
        this.ctx.restore();

        this.birdIndex++;
        if (this.birdIndex > 2) {
            this.birdIndex = 0;
        }
       
    }
}