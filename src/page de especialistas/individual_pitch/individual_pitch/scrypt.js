const profissionais = [
    {
        id: 1,
        nome: "Dr. Augusto",
        especialidade: "Cardiologista",
        foto: "cardiologista-removebg-preview.png",
        descricao: "Especialista em doenças do coração com mais de 15 anos de experiência."
    },
    {
        id: 2,
        nome: "Dra. Sara",
        especialidade: "Pediatra",
        foto: "pediatra-removebg-preview.png",
        descricao: "Atendimento humanizado para crianças e adolescentes."
    },
    {
        id: 3,
        nome: "Dr. Renato",
        especialidade: "Dermatologista",
        foto: "dermatologista-removebg-preview.png",
        descricao: "Tratamentos modernos para pele, cabelo e unhas."
    },
    {
        id: 4,
        nome: "Dr. Vantur",
        especialidade: "Ortopedista",
        foto: "ortopedista-removebg-preview.png",
        descricao: "Atendimento em reabilitação e cirurgias ortopédicas."
    }
];

function exibirPerfis() {
    const container = document.getElementById("perfil-container");

    profissionais.forEach(profissional => {
        const perfilElement = document.createElement("div");
        perfilElement.classList.add("perfil");

        perfilElement.innerHTML = `
            <a href="detalhes.html?id=${profissional.id}" class="link-perfil">
                <img src="${profissional.foto}" alt="Foto de ${profissional.nome}">
                <h3>${profissional.nome}</h3>
                <p>${profissional.especialidade}</p>
            </a>
            <div class="star-rating">
                <span class="star" data-value="1">&#9733;</span>
                <span class="star" data-value="2">&#9733;</span>
                <span class="star" data-value="3">&#9733;</span>
                <span class="star" data-value="4">&#9733;</span>
                <span class="star" data-value="5">&#9733;</span>
            </div>
        `;

        container.appendChild(perfilElement);
    });

    adicionarEventosAvaliacao();
}

function adicionarEventosAvaliacao() {
    const allStarContainers = document.querySelectorAll('.star-rating');

    allStarContainers.forEach(container => {
        let selected = 0;
        const stars = container.querySelectorAll('.star');

        stars.forEach(star => {
            star.addEventListener('mouseover', () => {
                const val = star.dataset.value;
                highlightStars(stars, val);
            });

            star.addEventListener('mouseout', () => {
                highlightStars(stars, selected);
            });

            star.addEventListener('click', () => {
                selected = star.dataset.value;
                highlightStars(stars, selected);
            });
        });

        function highlightStars(stars, val) {
            stars.forEach(s => {
                s.classList.toggle('hover', s.dataset.value <= val);
            });
        }
    });
}

exibirPerfis();
