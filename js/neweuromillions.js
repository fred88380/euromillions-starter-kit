class Euromillion {
  constructor(numero, forme) {
    this.numero = numero;
    this.forme = forme;
    this.htmlBoule = this.CreationHtmlBoule();
    this.htmlEtoile = this.CreationHtmlEtoile();
  }

  static tableauBoule() {
    let numeroPrincipal = [];
    while (numeroPrincipal.length < 5) {
      const num = Math.ceil(Math.random() * 50);
      if (!numeroPrincipal.includes(num)) {
        numeroPrincipal.push(num);
      }
    }
    return numeroPrincipal;
  }
  static tableauEtoile() {
    let numeroEtoile = [];
    while (numeroEtoile.length < 2) {
      const num = Math.ceil(Math.random() * 12);
      if (!numeroEtoile.includes(num)) {
        numeroEtoile.push(num);
      }
    }
    return numeroEtoile;
  }

  CreationHtmlBoule() {
    const div = document.createElement("div");
    div.textContent = this.numero;
    div.classList.add("zone", "boule");

    return div;
  }
  getHtmlBoule() {
    return this.htmlBoule;
  }
  setVisible(){
    this.htmlBoule.classList.add("show")
    this.htmlEtoile.classList.add("show")
  }

  CreationHtmlEtoile() {
    const div = document.createElement("div");
    div.textContent = this.numero;
    div.classList.add("zone", "etoile");

    return div;
  }
  getHtmlEtoile() {
    return this.htmlEtoile;
  }

}
