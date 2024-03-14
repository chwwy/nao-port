function openTab(event, tabName) {
    var i, tabContent, tabLinks;

    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    tabLinks = document.getElementsByClassName("tab");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}

window.onload = function () {
    document.getElementById('tab1').click();
};

document.addEventListener('DOMContentLoaded', function () {
    var clicked = false;
    var clicked2 = false;
    var clicked3 = false;

    fetch('content.json')
        .then(response => response.json())
        .then(data => {
            new TypeIt(".auto", {
                speed: 30,
                waitUntilVisible: true,
                afterComplete: function (instance) {
                    instance.getElement().classList.add('hide-cursor');
                }
            })
            .pause(1500)
            .type(data.aboutMeContent.join('<br>')) // Using aboutMeContent from JSON
            .go();

            var typeitInstance = new TypeIt('.textTarget', {
                strings: [],
                speed: 30,
                waitUntilVisible: true,
                afterComplete: function (instance) {
                    instance.getElement().classList.add('hide-cursor');
                }
            });

            document.body.addEventListener('click', function (event) {
                if (event.target.id === 'clickableText') {
                    if (!clicked) {
                        data.bookListContent.forEach(book => {
                            typeitInstance.type(book).break(); // Using bookListContent from JSON
                        });
                        clicked = true;
                    }
                }
            });

            var typeitInstance2 = new TypeIt('.textTarget2', {
                strings: [],
                speed: 30,
                waitUntilVisible: true,
                afterComplete: function (instance) {
                    instance.getElement().classList.add('hide-cursor');
                }
            });

            document.querySelector('.tab[data-tab="tab2"]').addEventListener('click', function (event) {
                if (!clicked2) {
                    data.melodyContent.forEach(melody => {
                        typeitInstance2.type(melody).break(); // Using melodyContent from JSON
                    });
                    clicked2 = true;
                }
            });

            var typeitInstance3 = new TypeIt('.textTarget3', {
                strings: [],
                speed: 30,
                waitUntilVisible: true,
                afterComplete: function (instance) {
                    instance.getElement().classList.add('hide-cursor');
                }
            });

            document.querySelector('.tab[data-tab="tab3"]').addEventListener('click', function (event) {
                if (!clicked3) {
                    data.thingsOfInterestContent.forEach(interest => {
                        typeitInstance3.type(interest).break(); // Using thingsOfInterestContent from JSON
                    });
                    clicked3 = true;
                }
            });
        })
        .catch(error => console.error('Error fetching content:', error));
});

