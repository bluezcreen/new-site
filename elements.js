class Panel extends HTMLElement {
  connectedCallback() {
    const content = this.innerHTML;   
    const title = this.getAttribute("title") || "";

    this.innerHTML = `
      <article class="window">
        <nav class="wbar"><div class="ico">—</div> ${title} <div class="ico">┏</div></nav>
        ${content}
      </article>
    `;
  }
}

class Pbar extends HTMLElement {
  connectedCallback() {
    const contentPB = this.innerHTML;

    this.innerHTML = `
        <nav class="sbar">${contentPB}</nav>
    `;
  }
}

class Navbar extends HTMLElement {
  connectedCallback() {
    this.classList.add("navb")

    this.innerHTML = `
      <div class="dr1">
        <button class="drb1">☰</button>
        <div class="drc1">
          <a href="/references/">About This Site</a><br>
          <hr>
          <a href="/home/">Home</a><br>
          <a href="/me/">Biography</a><br>
          <a href="/blog/">Thoughts</a><br>
          <a href="/stuff/">Box of Many Things</a><br>
          <a href="/tunes/">Music Player</a><br>
    
          <hr>
            
          <span style="opacity: 0.5;">Themes (soon!)</span>
        </div>
      </div>
    
    <span>bluezcreen.github.io</span>
    `;
  }
}

/*<div class="dr2">
            <button class="drb2">Theme</button>
            <div class="drc2">
              <button id="light">Light</button><br>
              <button id="bdark">Dark</button><br>
              <button id="classic">Classic</button><br>
            </div>
          </div>*/

class Footer extends HTMLElement {
  connectedCallback() {
    this.classList.add("badgeapple")
    
    this.innerHTML = `
    <div class="footer">
      <div>bluezcreen.github.io | 2025</div>
      <hr>
      <div class="badges">
        <img src="../visuals/imgs/badge_githubio.png">
        <img src="../visuals/imgs/badge_git.png">
        <img src="../visuals/imgs/badge_github.png">
        <img src="../visuals/imgs/badge_apple.gif">
    
        <img src="../visuals/imgs/badge_neocities.png">
        <img src="../visuals/imgs/badge_honeocities.png">
        <img src="../visuals/imgs/badge_intellect.gif" style="width: 88px; height: 31px;">
        <img src="../visuals/imgs/badge_html.png">
      </div>
    </div>
  </main>
    `;
  }
}

customElements.define("n-avbar", Navbar);
customElements.define("p-bar", Pbar);
customElements.define("f-ooter", Footer);
customElements.define("p-anel", Panel);