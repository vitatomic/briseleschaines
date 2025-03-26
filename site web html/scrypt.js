const fullscreenContents = {
    esclavage: {
        icon: '<i class="fas fa-chain"></i>',
        title: "Esclavage Moderne",
        text: "L’esclavage moderne affecte plus de 40 millions de personnes à travers le monde. Ce phénomène englobe le travail forcé, la traite des êtres humains, l’exploitation sexuelle et les mariages forcés. Malgré les progrès en matière de droits humains, des individus sont toujours réduits en esclavage dans des conditions inhumaines, exploités par des réseaux criminels et des économies informelles. Les zones les plus touchées incluent l’Asie du Sud-Est, l’Afrique subsaharienne et certaines régions du Moyen-Orient, où la pauvreté et l’absence de lois efficaces aggravent le problème.<br><a href='https://www.walkfree.org/global-slavery-index/' target='_blank'>Source : Walk Free - Global Slavery Index</a>",
    },
    travail: {
        icon: '<i class="fas fa-child"></i>',
        title: "Travail des Enfants",
        text: "Plus de 152 millions d’enfants, âgés de 5 à 17 ans, sont contraints de travailler dans des conditions souvent dangereuses à travers le monde. Ils sont exploités dans des secteurs comme l’agriculture, les mines, les usines textiles ou comme domestiques, perdant ainsi leur droit à l’éducation et à une enfance normale. Les industries du cacao, du coton et des métaux précieux reposent encore trop souvent sur cette main-d’œuvre vulnérable. Combattre ce problème exige des lois plus strictes, des campagnes de sensibilisation et des efforts pour réduire la pauvreté structurelle.<br><a href='https://data.unicef.org/topic/child-protection/child-labour/' target='_blank'>Source : UNICEF - Données sur le travail des enfants</a>",
    },
    opposer: {
        icon: '<i class="fas fa-fist-raised"></i>',
        title: "S’opposer",
        text: "S’opposer à l’exploitation humaine, c’est défier les injustices qui maintiennent des millions de personnes dans l’esclavage et le travail forcé. Cela implique des actions concrètes comme boycotter les produits issus de l’exploitation, financer des initiatives de lutte contre ces abus ou sensibiliser les communautés locales. Les mouvements historiques, comme l’abolition de l’esclavage au 19e siècle, prouvent que la résistance collective peut transformer les sociétés. Aujourd’hui, notre engagement individuel et collectif est essentiel pour mettre fin à ces pratiques.<br><a href='https://www.amnesty.org/en/what-we-do/forced-labour/' target='_blank'>Source : Amnesty International - Travail forcé</a>",
    },
    survivre: {
        icon: '<i class="fas fa-heartbeat"></i>',
        title: "Survivre",
        text: "Vivre sous le joug de l’esclavage ou du travail forcé exige une force exceptionnelle. Des millions de victimes subissent des violences physiques, des privations de nourriture et des traumatismes psychologiques profonds au quotidien. Les récits des survivants mettent en lumière leur courage face à l’oppression, mais aussi les séquelles durables de ces expériences. Les aider à se reconstruire nécessite des programmes de soutien psychologique, des formations professionnelles et une réintégration dans des environnements sécurisés.<br><a href='https://humanrightsfirst.org/library/human-trafficking-by-the-numbers/' target='_blank'>Source : Human Rights First - Traite humaine</a>",
    },
    revolter: {
        icon: '<i class="fas fa-bullhorn"></i>',
        title: "Se Révolter",
        text: "Se révolter contre l’injustice est une démarche essentielle pour restaurer la liberté et la dignité humaine. Des soulèvements historiques, comme celui de Spartacus ou les rébellions dans les colonies, ont démontré le pouvoir de la résistance face à l’oppression. À l’ère moderne, cela se traduit par des manifestations, des pétitions ou des campagnes numériques pour alerter et mobiliser. Une révolte efficace repose sur l’éducation, la solidarité et une action concertée pour démanteler les systèmes d’exploitation.<br><a href='https://www.freedomunited.org/advocate/end-modern-slavery/' target='_blank'>Source : Freedom United - Fin de l’esclavage moderne</a>",
    },
    action: {
        icon: '<i class="fas fa-hands-helping"></i>',
        title: "Agir",
        text: "Agir contre l’esclavage moderne et le travail des enfants commence par des décisions conscientes : soutenir les organisations actives sur le terrain, adopter une consommation responsable ou exiger des politiques transparentes de la part des entreprises et des gouvernements. Chaque personne peut jouer un rôle, que ce soit par des dons, du bénévolat ou la diffusion d’informations cruciales. Unis, nous pouvons briser les chaînes de l’exploitation et bâtir un avenir plus équitable pour tous.<br><a href='https://www.antislavery.org/what-we-do/' target='_blank'>Source : Anti-Slavery International - Nos actions</a>",
    }
};

// Éléments du DOM
const elements = {
    introScreen: document.querySelector('.intro-screen'),
    glassBox: document.querySelector('.glass-box'),
    wrapper: document.querySelector('.wrapper'),
    fullscreenOverlay: document.getElementById('fullscreen-overlay'),
    fullscreenIcon: document.getElementById('fullscreen-icon'),
    fullscreenTitle: document.getElementById('fullscreen-title'),
    fullscreenText: document.getElementById('fullscreen-text-content'),
    closeBtn: document.querySelector('.close-btn'),
    creditsOverlay: document.getElementById('credits-overlay'),
    helpOverlay: document.getElementById('help-overlay'),
    contactOverlay: document.getElementById('contact-overlay'),
    creditsLink: document.getElementById('credits-link'),
    helpLink: document.getElementById('help-link'),
    contactLink: document.getElementById('contact-link'),
    closeCreditsBtns: document.querySelectorAll('.close-credits-btn'),
    burger: document.querySelector('.burger'),
    navLinks: document.querySelector('.nav-links'),
    cards: document.querySelectorAll('.card')
};

// Vérification des éléments essentiels
if (!elements.fullscreenOverlay || !elements.fullscreenTitle || !elements.fullscreenText || !elements.fullscreenIcon) {
    console.error("Erreur : Un ou plusieurs éléments DOM essentiels sont manquants.");
} else {
    // Fonction pour gérer l'affichage des overlays avec animation
    const manageOverlay = (link, overlay, closeSelector) => {
        const closeBtn = overlay?.querySelector(closeSelector);

        if (link && overlay) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                overlay.style.opacity = '0';
                overlay.classList.add('show');
                setTimeout(() => {
                    overlay.style.opacity = '1';
                }, 10);
            });

            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    overlay.style.opacity = '0';
                    setTimeout(() => {
                        overlay.classList.remove('show');
                    }, 500);
                }
            });

            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    overlay.style.opacity = '0';
                    setTimeout(() => {
                        overlay.classList.remove('show');
                    }, 500);
                });
            }
        }
    };

    // Initialisation des overlays Crédits, Aide, Contact
    manageOverlay(elements.creditsLink, elements.creditsOverlay, '.close-credits-btn');
    manageOverlay(elements.helpLink, elements.helpOverlay, '.close-credits-btn');
    manageOverlay(elements.contactLink, elements.contactOverlay, '.close-credits-btn');

    // Gestion de l'intro screen
    if (elements.glassBox) {
        elements.glassBox.addEventListener('click', () => {
            elements.introScreen.classList.add('hidden');
            setTimeout(() => {
                elements.introScreen.style.display = 'none';
                elements.wrapper.classList.add('visible');
            }, 1000);
        });
    }

    // Gestion des cartes avec animation d’entrée
    elements.cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = `rotateY(calc((360deg / 6) * ${index})) translateZ(400px) scale(0.8) translateY(50px)`;
        setTimeout(() => {
            card.style.transition = 'all 0.8s ease';
            card.style.opacity = '1';
            card.style.transform = `rotateY(calc((360deg / 6) * ${index})) translateZ(400px) scale(1) translateY(0)`;
        }, index * 200);

        card.addEventListener('click', () => {
            const key = card.dataset.fullscreen;
            const content = fullscreenContents[key];
            if (content) {
                elements.fullscreenIcon.innerHTML = content.icon;
                elements.fullscreenTitle.textContent = content.title;
                elements.fullscreenText.innerHTML = content.text;
                elements.fullscreenOverlay.style.background = 'none'; // Garde l’overlay transparent
                elements.fullscreenOverlay.style.opacity = '0';
                elements.fullscreenOverlay.classList.add('show');
                setTimeout(() => {
                    elements.fullscreenOverlay.style.opacity = '1';
                }, 10);
            } else {
                console.error(`Clé non trouvée : ${key}`);
            }
        });

        // Accessibilité : clic via clavier
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });

    // Fermeture du fullscreen
    if (elements.fullscreenOverlay) {
        elements.fullscreenOverlay.addEventListener('click', (e) => {
            if (e.target === elements.fullscreenOverlay) {
                elements.fullscreenOverlay.style.opacity = '0';
                setTimeout(() => {
                    elements.fullscreenOverlay.classList.remove('show');
                }, 500);
            }
        });
    }

    if (elements.closeBtn) {
        elements.closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            elements.fullscreenOverlay.style.opacity = '0';
            setTimeout(() => {
                elements.fullscreenOverlay.classList.remove('show');
            }, 500);
        });
    }

    // Gestion du burger menu
    if (elements.burger && elements.navLinks) {
        elements.burger.addEventListener('click', () => {
            elements.navLinks.classList.toggle('active');
            elements.burger.classList.toggle('toggle');
        });

        // Fermeture du menu burger après clic sur un lien
        elements.navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                elements.navLinks.classList.remove('active');
                elements.burger.classList.remove('toggle');
            });
        });
    }

    // Initialisation de Particles.js
    particlesJS("particles-js", {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#00d4ff" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#00d4ff", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
        },
        retina_detect: true
    });

    // Gestion de la fin de la vidéo (optionnel)
    document.getElementById('myVideo').addEventListener('ended', () => {
        elements.introScreen.classList.add('hidden');
        setTimeout(() => {
            elements.introScreen.style.display = 'none';
            elements.wrapper.classList.add('visible');
        }, 1000);
    });

    // Log de chargement
    window.addEventListener('load', () => {
        console.log('Page chargée avec succès');
    });
}