export function getProjectCardCSS() {
    return `
                .project {
                    display: flex;
                    align-items: center;
                    margin-bottom: 3rem;
                    padding: 2rem;
                    border-radius: 1rem;
                    background-color: color-mix(in srgb, var(--background-color) 70%, var(--dark-green));
                }

                .project img {
                    max-width: 100%;
                    height: auto;
                    border-radius: 0.5rem;
                }

                hgroup {
                    text-align: center;
                    padding-bottom: 20px;
                }

                .project-desc {
                    margin: 0 40px;
                }
                `;
}