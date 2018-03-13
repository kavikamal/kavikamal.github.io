


function flipCoin() {
    var coinString = "Flip Coins Result :  ";
    var coin = {
        state: 0,
        flip: function () {
            this.state = Math.round(Math.random());
            console.log(this.state);
        },
        toString: function () {
            // return “H” or “T” depending on whether this.state is 0 or 1
            let coinSide;
            (this.state == 0) ? coinSide = "H" : coinSide = "T";
            return coinSide;
        },
        toHTML: function () {
            var img = document.createElement("img");
            // set the properties of the image element to show either heads or tails
            (this.state == 0) ? img.src = "coinhead.png" : img.src = "cointail.png"
            return img;
        }
    };
    var coinImage = document.getElementById("coinImage");
    coinImage.innerHTML="";
    for (let i = 0; i < 20; i++) {
        coin.flip();
        coinString = coinString + coin.toString() + " ";
        coinImage.appendChild(coin.toHTML());
    }
    
    document.getElementById("coinString").textContent = coinString;

}