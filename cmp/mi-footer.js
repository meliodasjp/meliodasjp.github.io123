class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html*/ 
      'Copyright copy; Alvarez Hernández Juan Pablo';
    }
}
customElement.define("mi-footer",MiFooter);
