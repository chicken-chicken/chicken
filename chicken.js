
// <h1></h1>
class ChickenChicken extends HTMLElement {
  constructor() {
    super()
    console.log('yay')
    this.attachShadow({mode: 'open'})
  }

  connectedCallback() {
    console.log(this, '!')
    const text = this.textContent
    const out = document.createElement('h1')
    out.innerHTML = '<slot></slot>'
    this.textContent = ''
    this.shadowRoot.appendChild(out)
  }
}

// drawer menu
class ChickenChickenChicken extends HTMLElement {
  constructor() {
    super()

    this.template = `
      <style>
        body {
          padding-top: 32px;
        }
        aside {
          position: absolute;
          top: 0;
          right: -200px;
          width: 200px;
          height: 100vh;
          box-sizing: border-box;
          background: skyblue;
          transition: right 1.2s ease;
        }

        aside.active {
          right: 0;
        }

        ul {
          list-type: none;
          margin: 0;
          padding: 0;
        }

        li {
          display: block;
          padding: 1em;
          border-bottom: 1px solid gray;
          backgrond: white;
          color: black;
          transition: background 1s, color 1s;
        }

        li:hover {
          background: black;
          color: white;
        }

        button {
          position: absolute;
          top: 5px;
          left: 5px;
        }
      </style>
      <aside>
        <nav>
          <ul>
            <li>Chicken</li>
            <li>Chicken Chicken</li>
            <li>Chicken Chick</li>
            <li>Chick Chick Chicken</li>
          </ul>
        </nav>
      </aside>
      <button onclick="this.parentNode.querySelector('aside').classList.toggle('active')">Chicken</button>
    `
    this.attachShadow({mode: 'open'})
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = this.template
  }
}

customElements.define('chicken-chicken', ChickenChicken)
customElements.define('chicken-chicken-chicken', ChickenChickenChicken)