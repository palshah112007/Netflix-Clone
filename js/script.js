const imageBase = 'https://image.tmdb.org/t/p/w500';

const catalogRows = [
    {
        title: 'Only on Netflix',
        titles: [
            { name: 'Money Heist', year: '2017', match: '98%', quality: 'HD', poster: 'reEMJA1uzscCbkpeRJeTT2bjqUp.jpg' },
            { name: 'Stranger Things', year: '2016', match: '97%', quality: '4K', poster: 'uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg' },
            { name: 'Wednesday', year: '2022', match: '96%', quality: '4K', poster: '9PFonBhy4cQy7Jz20NpMygczOkv.jpg' },
            { name: 'The Witcher', year: '2019', match: '95%', quality: '4K', poster: 'zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg' },
            { name: 'Dark', year: '2017', match: '94%', quality: 'HD', poster: 'apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg' },
            { name: 'Mindhunter', year: '2017', match: '93%', quality: 'HD', poster: 'fbKE87mojpIETWepSbD5Qt741fp.jpg' }
        ]
    },
    {
        title: 'Trending Now',
        titles: [
            { name: 'Squid Game', year: '2021', match: '99%', quality: '4K', poster: 'dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg' },
            { name: 'The Queen\'s Gambit', year: '2020', match: '98%', quality: '4K', poster: 'zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg' },
            { name: 'Narcos', year: '2015', match: '96%', quality: 'HD', poster: 'rTmal9fDbwh5F0waol2hq35U4ah.jpg' },
            { name: 'Ozark', year: '2017', match: '95%', quality: '4K', poster: 'pCGyPVrI9Fzw6rE1Pvi4BIXF6ET.jpg' },
            { name: 'Bridgerton', year: '2020', match: '94%', quality: '4K', poster: 'luoKpgVwi1E5nQsi7W0UuKHu2Rq.jpg' },
            { name: 'Emily in Paris', year: '2020', match: '91%', quality: 'HD', poster: 'Ak59Y9bzykmV0wAiwKsqrbORDBo.jpg' }
        ]
    },
    {
        title: 'Action Movies',
        titles: [
            { name: 'Extraction', year: '2020', match: '97%', quality: '4K', poster: 'nygOUcBKPHFTbxsYRFZVePqgPK6.jpg' },
            { name: 'The Old Guard', year: '2020', match: '94%', quality: '4K', poster: 'cjr4NWURcVN3gW5FlHeabgBHLrY.jpg' },
            { name: 'Red Notice', year: '2021', match: '93%', quality: '4K', poster: 'lAXONuqg41NwUMuzMiFvicDET9Y.jpg' },
            { name: '6 Underground', year: '2019', match: '92%', quality: '4K', poster: 'lnWkyG3LLgbbrIEeyl5mK5VRFe4.jpg' },
            { name: 'The Gray Man', year: '2022', match: '91%', quality: '4K', poster: '8cXbitsS6dWQ5gfMTZdorpAAzEH.jpg' },
            { name: 'Heart of Stone', year: '2023', match: '90%', quality: '4K', poster: 'vB8o2p4ETnrfiWEgVxHmHWP9yRl.jpg' }
        ]
    },
    {
        title: 'Dramas',
        titles: [
            { name: 'The Crown', year: '2016', match: '98%', quality: '4K', poster: '1DDE0Z2Y805rqfkEjPbZsMLyPwa.jpg' },
            { name: 'House of Cards', year: '2013', match: '96%', quality: 'HD', poster: 'hKWxWjFwnMvkWQawbhvC0Y7ygQ8.jpg' },
            { name: 'Maid', year: '2021', match: '95%', quality: 'HD', poster: 'mCiEYoZYTKqgCSMSjYlWe62Qbwo.jpg' },
            { name: 'The Diplomat', year: '2023', match: '93%', quality: '4K', poster: 'cOKXV0FalCYixNmZYCfHXgyQ0VX.jpg' },
            { name: 'When They See Us', year: '2019', match: '97%', quality: 'HD', poster: 'oPv3nNtkuc6EPEql5lgdOuQNHuG.jpg' },
            { name: 'Peaky Blinders', year: '2013', match: '96%', quality: 'HD', poster: 'vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg' }
        ]
    },
    {
        title: 'Comedies',
        titles: [
            { name: 'Sex Education', year: '2019', match: '96%', quality: '4K', poster: '8j12tohv1NBZNmpU93f47sAKBbw.jpg' },
            { name: 'Never Have I Ever', year: '2020', match: '95%', quality: 'HD', poster: 'hd5fnBixab6IzfUwjC5wfdbX3eM.jpg' },
            { name: 'The Good Place', year: '2016', match: '94%', quality: 'HD', poster: 'qIhsuhoIYR5yTnDta0IL4senbeN.jpg' },
            { name: 'Orange Is the New Black', year: '2013', match: '93%', quality: 'HD', poster: 'ekaa7YjGPTkFLcPhwWXTnARuCEU.jpg' },
            { name: 'Community', year: '2009', match: '92%', quality: 'HD', poster: '3KUjDt8XY7w2Ku70UE0SECmv1zP.jpg' },
            { name: 'Cobra Kai', year: '2018', match: '94%', quality: '4K', poster: '6POBWybSBDBKjSs1VAQcnQC1qyt.jpg' }
        ]
    },
    {
        title: 'Recently Added',
        titles: [
            { name: '3 Body Problem', year: '2024', match: '96%', quality: '4K', poster: 'ykZ7hlShkdRQaL2aiieXdEMmrLb.jpg' },
            { name: 'The Gentlemen', year: '2024', match: '95%', quality: '4K', poster: 'tw3tzfXaSpmUZIB8ZNqNEGzMBCy.jpg' },
            { name: 'One Day', year: '2024', match: '94%', quality: 'HD', poster: 'smBWt8rHCCavV88C5gQVjh0NUFa.jpg' },
            { name: 'Avatar: The Last Airbender', year: '2024', match: '93%', quality: '4K', poster: 'lzZpWEaqzP0qVA5nkCc5ASbNcSy.jpg' },
            { name: 'Berlin', year: '2023', match: '92%', quality: '4K', poster: '69YuvoiWTtK6oyYH2Jl4Q6SgZ59.jpg' },
            { name: 'Fool Me Once', year: '2024', match: '91%', quality: 'HD', poster: 'Ertv4WLEyHgi8zN4ldOKgPcGAZ.jpg' }
        ]
    }
];

function renderCatalog() {
    const catalog = document.querySelector('#catalog');
    if (!catalog) return;

    catalog.innerHTML = catalogRows.map(row => `
        <section class="section-container">
            <h2 class="section-title">${row.title}</h2>
            <div class="carousel-container">
                <div class="carousel">
                    ${row.titles.map(title => `
                        <article class="movie-card" tabindex="0" aria-label="${title.name}">
                            <img src="${imageBase}/${title.poster}" alt="${title.name} poster" class="movie-image" loading="lazy">
                            <div class="movie-overlay">
                                <div class="movie-title">${title.name}</div>
                                <div class="movie-meta">
                                    <span class="movie-match">${title.match} Match</span>
                                    <span>${title.year}</span>
                                    <span class="movie-quality">${title.quality}</span>
                                </div>
                            </div>
                        </article>
                    `).join('')}
                </div>
            </div>
        </section>
    `).join('');
}

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 10);
});

document.addEventListener('DOMContentLoaded', function() {
    renderCatalog();

    const profileIcon = document.querySelector('.profile-icon');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    if (profileIcon && dropdownMenu) {
        profileIcon.addEventListener('click', function() {
            dropdownMenu.classList.toggle('active');
        });

        document.addEventListener('click', function(event) {
            if (!profileIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.classList.remove('active');
            }
        });
    }

    document.querySelectorAll('.carousel').forEach(carousel => {
        let isDown = false;
        let startX = 0;
        let scrollLeft = 0;

        carousel.addEventListener('mousedown', event => {
            isDown = true;
            startX = event.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
        });

        carousel.addEventListener('mouseleave', () => {
            isDown = false;
        });

        carousel.addEventListener('mouseup', () => {
            isDown = false;
        });

        carousel.addEventListener('mousemove', event => {
            if (!isDown) return;
            event.preventDefault();
            const x = event.pageX - carousel.offsetLeft;
            carousel.scrollLeft = scrollLeft - ((x - startX) * 1.2);
        });
    });

    document.querySelectorAll('.nav-left a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelectorAll('.nav-left a').forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });

    document.querySelectorAll('.movie-card').forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('.movie-title')?.textContent || 'This title';
            alert(`${title} details would open here.`);
        });
    });
});
