import { getProjectCardCSS } from './project-card-css.js';

class ProjectCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const style = document.createElement("style");
        style.textContent = getProjectCardCSS();

        const title = this.getAttribute("title") || "Untitled Project";
        const image = this.getAttribute("image") || "";
        const description = this.getAttribute("description") || "No description available.";
        const link = this.getAttribute("link") || "";

        // template for component content
        this.innerHTML = "";
        this.appendChild(style);
        this.innerHTML += `
            <section class="project">
                <picture>
                    <img src=${image} alt=${title} width="250" height="250">
                </picture>
                <div class="project-desc">
                    <hgroup>
                        <h2>${title}</h2>
                        <a href="${link}" target="_blank">Learn More</a>
                    </hgroup>
                    <p>${description}</p>
                </div>
            </section>
        `;
    }
}

customElements.define("project-card", ProjectCard);