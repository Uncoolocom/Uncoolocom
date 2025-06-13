document.addEventListener('DOMContentLoaded', function() {
    let currentOpenDetails = null;
    let lastSummaryInfo = '';
    let switchingDetails = false;

    // Only allow one <details> open at a time and show summary info
    document.querySelectorAll('summary.dButton').forEach(function(summary) {
        summary.addEventListener('click', function() {
    // Mark that we're switching details
            switchingDetails = true;

    // Close all other details
     document.querySelectorAll('details.directory').forEach(function(details) {
        if (details !== summary.parentElement) {
             details.open = false;
            }
         });

    // Show the new summary info
            let info = '';
            switch (summary.textContent.trim()) {
                case 'Toolbox':
                    info = '<span class="summaryLabel">Toolbox</span><br> Quick links and tools for your workflow.';
                    break;
                case 'Workshop':
                    info = 'Workshop: Explore my curated game mod collections.';
                    break;
                case 'Cronika':
                    info = 'Projects: See what I\'m working on, including Cronika.';
                    break;
                case 'Contact':
                    info = 'Contact: Get in touch with me via email or Discord.';
                    break;
                case 'About':
                    info = 'About: Learn more about Uncoolocat and this site.';
                    break;
                default:
                    info = '';
            }

        if (info) {
            lastSummaryInfo = info;
            currentOpenDetails = summary.parentElement;
            document.getElementById('infoContent').innerHTML = info;
            document.getElementById('infoBox').style.display = 'block';
            var defaultBox = document.getElementById('defaultInfoBox');
            if (defaultBox) defaultBox.style.display = 'none';
        }

    // Allow toggle event to run after this
            setTimeout(() => { switchingDetails = false; }, 0);
        });
    });

    // Show dAction info and keep track of parent details
    document.querySelectorAll('.dAction').forEach(function(el) {
        el.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent bubbling to <details> or <summary>
            let info = '';
        switch (el.textContent.trim()) {
            case 'Project Zomboid':
                info = `
                    <img class="wAvatar" src="https://projectzomboid.com/blog/content/uploads/2022/10/Spiffo_Teach_Frame_final.png">
                    <p>All collections are clickable and the ones highlighted in white,<br>
                    are active on the World of Cabbage server!</p>
                    <strong>Core Collections:</strong><br>
                    <div class="coreC cRow">
                        <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3488287180" class="collection" target="_blank">Uncoolocore</a>
                        <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3488614891" class="collection" target="_blank">Maps & Vehicles</a>
                        <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3472758969" class="collection" target="_blank">True Music</a>
                    </div>
                    <strong>Theme Collections:</strong><br>
                    <div class="themeC cRow">
                        <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3487547837" class="collection" target="_blank">S.T.A.L.K.E.R.</a>
                        <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3468692890" class="collection" target="_blank">Playhouse</a>
                        <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2750271179" class="collection" target="_blank">We Are Legend</a>
                    </div>
                `;
                break;
            case 'Darkest Dungeon':
                info = 'Darkest Dungeon is a challenging gothic RPG...';
                break;
            case 'RimWorld':
                info = 'RimWorld is a sci-fi colony sim driven by an intelligent AI storyteller...';
                break;
            case 'The Game':
                info = 'Cronika is an Open World RPG that is set in a Dark Fantasy world, where magic is outlawed and the gods have been forgotten. The game will feature rich lore, character customization, and a dynamic world that reacts to player choices.';
                break;
            case 'The Lore':
                info = 'This is where you will find the lore of Cronika, including the history of the world, its gods, and the magic that once existed.';
                break;
            case 'The Team':
                info = 'Eventually you will find the members of the team here and a way to apply!';
                break;
            case 'The Art':
                info = 'Insert art here!';
                break;
            case 'Color Palette':
                info = '<img src="Pictures/palette.png" alt="Something went wrong!">';
                break;
            case 'Personal':
                info = 'Contact me at: dakotasemailnospaces@gmail.com';
                break;
            case 'Business':
                info = 'Contact me at: Uncoolocom@gmail.com';
                break;
            case 'Who is Uncoolocat':
                info = "Hey, everybody! My name is Dakota; otherwise known as Uncoolocat. I'm an ancient 30-year-old Goblin from Minnesota, but I've lived in Texas, Alaska and currently Florida. I've got my first child on the way, and I've found myself really wondering what I really wanted to do with my life. Not only that, but how can I do what I want and still support a family? I haven't quite figured out that supporting a family while living my dream life, but I feel like starting to do the things that I actually want to do would be a good start. Video games are a huge passion of mine, and I've always dreamed of making my own games. I've had all kinds of ideas, but the idea of a world/campaign setting has always stuck with me the most. Instead of drawing up this world in yet another failed D&D campaign, I decided I'd give coding another go. When I started these projects, I had previously worked with HTML, CSS, and C#, but it had only ever been a little and most of it as a youngster.";
                break;
            case 'What is Uncoolocom':
                info = 'Uncoolocom is a hub for all things related to Uncoolocat. It includes my projects, workshop collections, and contact information. The goal is to create a space where I can share my journey, projects, and everything else with others who share similar interests.';
                break;
            default:
                info = 'More information coming soon!';
        }
            document.getElementById('infoContent').innerHTML = info;
            document.getElementById('infoBox').style.display = 'block';
            var defaultBox = document.getElementById('defaultInfoBox');
            if (defaultBox) defaultBox.style.display = 'none';
        });
    });

        // When info box is closed, show summary info if its details is still open
        var infoClose = document.getElementById('infoClose');
        if (infoClose) {
            infoClose.onclick = function() {
                document.getElementById('infoBox').style.display = 'none';
                var defaultBox = document.getElementById('defaultInfoBox');
        // If a details is open, show its summary info instead of default
                if (currentOpenDetails && currentOpenDetails.open && lastSummaryInfo) {
                    document.getElementById('infoContent').textContent = lastSummaryInfo;
                    document.getElementById('infoBox').style.display = 'block';
                    if (defaultBox) defaultBox.style.display = 'none';
                } else {
                    if (defaultBox) defaultBox.style.display = 'block';
                }
            };
        }

    // When a details is closed, show the default info box (unless switching)
    document.querySelectorAll('details.directory').forEach(function(details) {
            details.addEventListener('toggle', function() {
                if (!details.open) {
    // If we're switching details, don't show the default box
                    if (switchingDetails) return;
                    document.getElementById('infoBox').style.display = 'none';
                    var defaultBox = document.getElementById('defaultInfoBox');
                    if (defaultBox) defaultBox.style.display = 'block';
    // Reset tracking if the closed details was the current one
                    if (currentOpenDetails === details) {
                        currentOpenDetails = null;
                        lastSummaryInfo = '';
                    }
                }
            });
        });
});