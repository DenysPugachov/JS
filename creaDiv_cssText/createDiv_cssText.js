class Options {
  constructor(heigth, width, bg, fontSize, textAlign) {
    (this.heigth = heigth),
      (this.width = width),
      (this.bg = bg),
      (this.fontSize = fontSize),
      (this.textAlign = textAlign);
  }
  createDiv(test) {
    let div = document.createElement("div");
    div.innerHTML = test;
    document.body.append(div);
    div.style.cssText = `height: ${this.heigth}; width: ${this.width};background-color: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign}`;
  }
}

const t = new Options("50%", "79%", "red", "55px", "center");
t.createDiv("Some text");

const t2 = new Options("30%", "80%", "pink", " 30px", " left");
t2.createDiv("newDiv");
