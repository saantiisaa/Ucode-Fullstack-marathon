document.addEventListener('DOMContentLoaded', function() {
    const filmButtons = document.querySelectorAll('.film-button');
    const filmTitle = document.getElementById('film-title');
    const filmPoster = document.getElementById('film-poster');
    const filmProductionDate = document.getElementById('film-production-date');
    const filmInformation = document.getElementById('film-information');
    const filmActors = document.getElementById('film-actors');
    const filmMessage = document.getElementById('film-message');

    const films = [
        {
            title: 'Fullmetal Alchemist: Brotherhood\n',
            poster: 'assets/images/1.jpg',
            productionDate: '2009',
            information: 'After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutation, the boys attempted to bring their recently deceased mother back to life. Instead, they suffered brutal personal loss: Alphonse\'s body disintegrated while Edward lost a leg and then sacrificed an arm to keep Alphonse\'s soul in the physical realm by binding it to a hulking suit of armor.\n' +
                '\n' +
                'The brothers are rescued by their neighbor Pinako Rockbell and her granddaughter Winry. Known as a bio-mechanical engineering prodigy, Winry creates prosthetic limbs for Edward by utilizing "automail," a tough, versatile metal used in robots and combat armor. After years of training, the Elric brothers set off on a quest to restore their bodies by locating the Philosopher\'s Stone—a powerful gem that allows an alchemist to defy the traditional laws of Equivalent Exchange.\n' +
                '\n' +
                'As Edward becomes an infamous alchemist and gains the nickname "Fullmetal," the boys\' journey embroils them in a growing conspiracy that threatens the fate of the world.',
            characters: 'Elric, Edward; Elric, Alphonse'
        },
        {
            title: 'Bleach: Sennen Kessen-hen\n',
            poster: 'assets/images/2.jpg',
            productionDate: '2022',
            information: 'Substitute Soul Reaper Ichigo Kurosaki spends his days fighting against Hollows, dangerous evil spirits that threaten Karakura Town. Ichigo carries out his quest with his closest allies: Orihime Inoue, his childhood friend with a talent for healing; Yasutora Sado, his high school classmate with superhuman strength; and Uryuu Ishida, Ichigo\'s Quincy rival.\n' +
                '\n' +
                'Ichigo\'s vigilante routine is disrupted by the sudden appearance of Asguiaro Ebern, a dangerous Arrancar who heralds the return of Yhwach, an ancient Quincy king. Yhwach seeks to reignite the historic blood feud between Soul Reaper and Quincy, and he sets his sights on erasing both the human world and the Soul Society for good.\n' +
                '\n' +
                'Yhwach launches a two-pronged invasion into both the Soul Society and Hueco Mundo, the home of Hollows and Arrancar. In retaliation, Ichigo and his friends must fight alongside old allies and enemies alike to end Yhwach\'s campaign of carnage before the world itself comes to an end.\n',
            characters: 'Kurosaki, Ichigo; Kuchiki, Rukia; Inoue, Orihime; Abarai, Renji; Ishida, Uryuu; Sado, Yasutora'
        },
        {
            title: 'Your Name\n' +
                '\n',
            poster: 'assets/images/3.jpg',
            productionDate: '2016',
            information: 'Mitsuha Miyamizu, a high school girl, yearns to live the life of a boy in the bustling city of Tokyo—a dream that stands in stark contrast to her present life in the countryside. Meanwhile in the city, Taki Tachibana lives a busy life as a high school student while juggling his part-time job and hopes for a future in architecture.\n' +
                '\n' +
                'One day, Mitsuha awakens in a room that is not her own and suddenly finds herself living the dream life in Tokyo—but in Taki\'s body! Elsewhere, Taki finds himself living Mitsuha\'s life in the humble countryside. In pursuit of an answer to this strange phenomenon, they begin to search for one another.\n' +
                '\n' +
                'Kimi no Na wa. revolves around Mitsuha and Taki\'s actions, which begin to have a dramatic impact on each other\'s lives, weaving them into a fabric held together by fate and circumstance.',
            characters: 'Miyamizu, Mitsuha; Tachibana, Taki'
        }
    ];

    function updateFilmDetails(filmIndex) {
        if (filmIndex >= 0 && filmIndex < films.length) {
            const film = films[filmIndex];
            filmTitle.textContent = film.title;
            filmPoster.src = film.poster;
            filmProductionDate.textContent = film.productionDate;
            filmInformation.textContent = film.information;
            filmActors.textContent = film.characters;
            filmMessage.style.display = 'none';
        } else {
            filmTitle.textContent = '';
            filmPoster.src = '';
            filmProductionDate.textContent = '';
            filmInformation.textContent = '';
            filmActors.textContent = '';
            filmMessage.style.display = 'block';
        }
    }

    filmButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const filmIndex = parseInt(button.getAttribute('data-film')) - 1;
            updateFilmDetails(filmIndex);
        });
    });

    updateFilmDetails(0);
});