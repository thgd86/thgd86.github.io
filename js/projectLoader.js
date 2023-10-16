const projects = [
    {
        title: "PaletteCraft (W.I.P.)",
        description: "Um site para gerar de paleta de cores",
        image: "images/palettecraft.png",
        link: "PaletteCraft"
    }
];

const projectGrid = document.getElementById('project-grid');

projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');

    projectDiv.innerHTML = `
        <h2>${project.title}</h2>
        <img src="${project.image}" alt="${project.title}">
        <p class="project-description">${project.description}</p>
        <a " href="${project.link}" target="_blank">Ver mais</a>
    `;
    projectGrid.appendChild(projectDiv);
});
