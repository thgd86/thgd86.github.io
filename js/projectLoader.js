const projects = [
    {
        title: "Em breve...",
        description: "Descrição do projeto",
        image: "images/template.png",
        color: "gray",
        link: "#"
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
        <a style="background-color: ${project.color};" href="${project.link}">Ver mais</a>
    `;
    projectGrid.appendChild(projectDiv);
});
