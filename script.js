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
    window.scrollTo(0, 0);
};

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

document.addEventListener('DOMContentLoaded', function () {
    var clicked = false;
    var clicked2 = false;
    var clicked3 = false;

    new TypeIt(".auto", {
        speed: 20,
        waitUntilVisible: true,
        afterComplete: function (instance) {
            instance.getElement().classList.add('hide-cursor');
        }
    })

        .pause(1000)
        .type("<span class='bluey'>nao@chwy:</span>", {
            instant: true
        })
        .type("<span class='grey'>~/$ </span>", {
            instant: true
        })
        .pause(200)
        .options({ speed: 40 })
        .type("cd fun").break()
        .pause(200)

        .type("<span class='bluey'>nao@chwy:</span><span class='grey'>~/fun$</span> ", { instant: true })
        .pause(200)
        .type("cat about_me.txt")

        .options({ speed: 20 })
        .pause(200).break().break()
        .type("hi, i'm a writer")
        .pause(200).delete(6).pause(200)
        .type("program")
        .pause(200).delete(9).pause(200)
        .type("just chwy.").break()

        .options({ speed: 20 })
        .type(".╱|、").break()
        .type("(˚ˎ。7   ♪ ").break()
        .type(" .|、˜〵  ♬  ").break()
        .type(" .じしˍ,)ノ").break()

        .type("---------------------------", { instant: true }).break()

        .options({ speed: 20 })
        .type("&emsp; i like many things...").break()

        .options({ speed: 50 })
        .type("&emsp; many <i>many</i> fa-vo-rites!").break().break()

        .options({ speed: 20 })
        .type("i'm bilingual, 19, and i use [<u>she/her</u>]").break().break()

        .type("i'm a 3rd year computer science student").break()

        .type("<3 writing, programming (sometimes), and reading").break()

        .type("&emsp;--> talk to me about books!").break().break()

        .type("currently learning").break()
        .type("&emsp;• russian").break()
        .type("&emsp;• dart").break()
        .type("&emsp;• typescript").break()

        .type("a reader. fan of literature, theology, and math!").break().break().pause(200)

        .type("<span class='bluey'>nao@chwy:</span><span class='grey'>~/fun$</span> ", { instant: true }).pause(200)
        .type("tree ./fun_stuff/")
        .pause(200).break()

        .type("<span class='grey'>./fun_stuff/ </span>", { instant: true })
        .pause(200).break()
        .type('├── <a target="_blank" href="https://medium.com/@naolyst">blog</a>', { instant: true }).break()
        .type('├── <a target="_blank" href="https://open.spotify.com/user/085694381757?si=2202903e7647408c">spotify</a>', { instant: true }).break()
        .type('└── <a href="#" id="clickableText">my book list! (click :3)</a>', { instant: true }).break().break()
        .go();


    var typeitInstance = new TypeIt('.textTarget', {
        strings: [],
        speed: 20,
        waitUntilVisible: true,
    });

    document.body.addEventListener('click', function (event) {
        if (event.target.id === 'clickableText') {
            if (!clicked) {
                typeitInstance
                    .type("<span class='bluey'>nao@chwy:</span><span class='grey'>~/fun$</span> ", { instant: true })
                    .pause(200)
                    .type("tree ./book_list/").break()
                    .type("<span class='grey'>./book_list/</span>", { instant: true })
                    .pause(200).break()
                    .options({ speed: 20 })
                    .type("├── the art of happiness by epicurus", { instant: true }).break()
                    .type("└── the collected poems by sara teasdale", { instant: true })
                    .go();
                clicked = true;
            }
        }
    });

    var typeitInstance2 = new TypeIt('.textTarget2', {
        strings: [],
        speed: 20,
        waitUntilVisible: true,
        afterComplete: function (instance) {
            instance.getElement().classList.add('hide-cursor');
        }
    });

    document.querySelector('.tab[data-tab="tab2"]').addEventListener('click', function (event) {
        if (!clicked2) {
            console.log(event.target);
            typeitInstance2
                .type("<span class='bluey'>nao@chwy:</span><span class='grey'>~/fun$</span> ", { instant: true }).pause(200)
                .type("tree ./melodies/").break()
                .type("<span class='grey'>./melodies/</span>", { instant: true }).pause(200).break()
                .options({ speed: 20 })
                .type("├── taylor swift", { instant: true }).break()
                .type("├── pierce the veil", { instant: true }).break()
                .type("└── phoebe bridgers", { instant: true }).break().break()
                .type('loading album')
                .options({ speed: 450 })
                .type("....")
                .options({ speed: 20 })
                .delete(17, { instant: true })
                .go()
            var typeitInstance3 = new TypeIt('.textTarget3', {
                strings: [],
                speed: 20,
                waitUntilVisible: true,
            });
            setTimeout(function () {
                document.getElementById('spotifyIframe').style.opacity = 1;
                typeitInstance3
                    .break().pause(500)
                    .type("<span class='bluey'>nao@chwy:</span><span class='grey'>~/fun$</span> ", { instant: true }).pause(200)
                    .type("sudo apt-get install timg").break().pause(200)
                    .type("<span class='bluey'>nao@chwy:</span><span class='grey'>~/fun$</span> ", { instant: true }).pause(200)
                    .type("timg 88x31.gif").break().break().pause(600)
                    .type("<span class='bluey'>nao@chwy:</span><span class='grey'>~/fun$</span> ", { instant: true }).pause(200).break()
                    .type('<div class="button-container">')
                    .type('<a href="#" class="button"><img src="https://cyber.dabamos.de/88x31/angellovebox.gif" alt="Button 1" width="88" height="31"></a>')
                    .type('<a href="#" class="button"><img src="https://cyber.dabamos.de/88x31/anythingbut.gif" alt="Button 2" width="88" height="31"></a>')
                    .type('<a href="#" class="button"><img src="https://cyber.dabamos.de/88x31/candyshop.gif" alt="Button 3" width="88" height="31"></a>')
                    .type('<a href="#" class="button"><img src="https://cyber.dabamos.de/88x31/neonlove_lani.gif" alt="Button 3" width="88" height="31"></a>')
                    .type('<a href="#" class="button"><img src="https://cyber.dabamos.de/88x31/sanehtml.gif" alt="Button 3" width="88" height="31"></a>')
                    .type('<div class="button-container">')
                    .type('<a href="#" class="button"><img src="https://cyber.dabamos.de/88x31/gaywebring.gif" alt="Button 4" width="88" height="31"></a>')
                    .type('<a href="#" class="button"><img src="https://cyber.dabamos.de/88x31/child.gif" alt="Button 5" width="88" height="31"></a>')
                    .type('<a href="#" class="button"><img src="https://cyber.dabamos.de/88x31/blink-0.gif" alt="Button 6" width="88" height="31"></a>')
                    .type('<a href="#" class="button"><img src="https://cyber.dabamos.de/88x31/valid-css.gif" alt="Button 3" width="88" height="31"></a>')
                    .type('<a href="#" class="button"><img src="https://cyber.dabamos.de/88x31/webpassion.gif" alt="Button 3" width="88" height="31"></a>')
                    .type('<div class="button-container">')
                    .type('<a href="#" class="button"><img src="https://cyber.dabamos.de/88x31/css.gif" alt="Button 4" width="88" height="31"></a>')
                    .type('<a href="#" class="button"><img src="https://cyber.dabamos.de/88x31/beyes.gif" alt="Button 5" width="88" height="31"></a>')
                    .type('<a href="#" class="button"><img src="https://cyber.dabamos.de/88x31/cocksuckingfaggot.gif" alt="Button 6" width="88" height="31"></a>')
                    .type('<a href="#" class="button"><img src="https://cyber.dabamos.de/88x31/acab.gif" alt="Button 3" width="88" height="31"></a>')
                    .type('<a href="#" class="button"><img src="https://cyber.dabamos.de/88x31/ecchi.gif" alt="Button 3" width="88" height="31"></a>')
                    .type('<div class="button-container">')
                    .type('<a href="#" class="button"><img src="https://cyber.dabamos.de/88x31/gamercat.gif" alt="Button 5" width="88" height="31"></a>')
                    .type('<a href="#" class="button"><img src="https://cyber.dabamos.de/88x31/get_java.gif" alt="Button 6" width="88" height="31"></a>')
                    .type('<a href="#" class="button"><img src="https://cyber.dabamos.de/88x31/hello_kitty.gif" alt="Button 3" width="88" height="31"></a>')
                    .type('<a href="#" class="button"><img src="https://cyber.dabamos.de/88x31/forteahouse.gif" alt="Button 3" width="88" height="31"></a>')
                    .type('<a href="#" class="button"><img src="https://cyber.dabamos.de/88x31/knopnbk.gif" alt="Button 3" width="88" height="31"></a>')
                    .type('</div>').break().break().pause(750)
                    .type('i made this web myself! visit the source code <a target="_blank" href="https://github.com/chwwy/nao-port">here</a> ♡')
                    .go();
            }, 4000);
        }
        clicked2 = true;
    })

    var typeitInstance4 = new TypeIt('.textTarget4', {
        strings: [],
        speed: 20,
        waitUntilVisible: true,
        afterComplete: function (instance) {
            instance.getElement().classList.add('hide-cursor');
        }
    });

    document.querySelector('.tab[data-tab="tab3"]').addEventListener('click', function (event) {
        if (!clicked3) {
            console.log(event.target);
            typeitInstance4
                .type("<span class='bluey'>nao@chwy:</span><span class='grey'>~/fun$</span> ", { instant: true }).pause(200)
                .type("tree ./things_of_interest/").break()
                .type("<span class='grey'>./things_of_interest/</span>", { instant: true }).pause(200).break()
                .options({ speed: 20 })
                .type("├── taylor swift", { instant: true }).break()
                .type("├── mystery novels", { instant: true }).break()
                .type("├── lyrical writing", { instant: true }).break()
                .type("├── project managing", { instant: true }).break()
                .type("├── romance literature", { instant: true }).break()
                .type("└── design/illustration", { instant: true }).break()
                .type('finding more info... ').break().pause(200)
                .options({ speed: 200 })
                .type("[ □ □ □ □ □ □ □ □ □ □ ] - 0%", { instant: true }).pause(100).delete(28, { instant: true })
                .type("[ ■ □ □ □ □ □ □ □ □ □ ] - 10%", { instant: true }).pause(100).delete(29, { instant: true })
                .type("[ ■ ■ □ □ □ □ □ □ □ □ ] - 20%", { instant: true }).pause(100).delete(29, { instant: true })
                .type("[ ■ ■ ■ □ □ □ □ □ □ □ ] - 20%", { instant: true }).pause(100).delete(29, { instant: true })
                .type("[ ■ ■ ■ ■ □ □ □ □ □ □ ] - 40%", { instant: true }).pause(100).delete(29, { instant: true })
                .type("[ ■ ■ ■ ■ ■ □ □ □ □ □ ] - 50%", { instant: true }).pause(100).delete(29, { instant: true })
                .type("[ ■ ■ ■ ■ ■ ■ □ □ □ □ ] - 60%", { instant: true }).pause(100).delete(29, { instant: true })
                .type("[ ■ ■ ■ ■ ■ ■ ■ □ □ □ ] - 70%", { instant: true }).pause(100).delete(29, { instant: true })
                .type("[ ■ ■ ■ ■ ■ ■ ■ ■ □ □ ] - 80%", { instant: true }).pause(100).delete(29, { instant: true })
                .type("[ ■ ■ ■ ■ ■ ■ ■ ■ ■ □ ] - 90%", { instant: true }).pause(100).delete(29, { instant: true })
                .type("[ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ] - 100%", { instant: true }).pause(200).delete(30, { instant: true })
                .type("[ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ] - done!", { instant: true }).break().pause(1000)
                .options({ speed: 20 })
                .delete(42, { instant: true })
                .break().break()
                .type("more_info.txt found!").break()
                .go()
            var typeitInstance5 = new TypeIt('.textTarget5', {
                strings: [],
                speed: 10,
                waitUntilVisible: true,
            });
            setTimeout(function () {
                typeitInstance5
                    .break().pause(500)
                    .type("<span class='bluey'>nao@chwy:</span><span class='grey'>~/fun$</span> ", { instant: true }).pause(200)
                    .type("cat more_info.txt").break().pause(200).break()
                    .type("ok! so for the more lesser-known part about myself...").break()
                    .type("i've been doing computer-related stuff since i was six-ish.").break()
                    .type("i've always been the typical high functioning autistic kid, and that's aite :3 i mostly write about things i see fit (everything, actually). ")
                    .type("thing is!.. i tend to hyperfixate and that makes me a bit of a workaholic. but people love it, people love that i work hard~ ").break().break()
                    .type("i'm a HUGE control freak but a below average communicator. i do not communicate well at all and i cba to work on it. so... uh, either you adapt or you'll find yourself thinking what did you do wrong (nothing, i just keep to myself not because im awkward but because i like being quiet :3)").break().break()
                    .type("english is my first language, it's not something that i learned or unnaturally picked up on. it is my first language, i just speak in gibberish sometimes because i like to speak fast to keep up with my thoughts. pls forgive me in advance.").break().break().pause(200)
                    .type('<a target="_blank" href="https://github.com/chwwy/">github</a> ')
                    .type('<a target="_blank" href="https://www.youtube.com/channel/UCN_a2EJvk2A_OruBVCusDKw">youtube</a> ')
                    .type('<a target="_blank" href="https://open.spotify.com/user/085694381757?si=e3c33539f7f94eb5">spotify</a> ')
                    .type('<a target="_blank" href="https://www.twitch.tv/naolyst">twitch</a> ')
                    .type('<a target="_blank" href="https://steamcommunity.com/id/naolyst/">steam</a> ')
                    .type('<a target="_blank" href="https://twitter.com/ccchwyy">twitter</a>')
                    .go();
            }, 5000);
        }
        clicked3 = true;
    })
}
)