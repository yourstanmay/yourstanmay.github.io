
const videos = [
    {
        title: "Impex in SAP Hybris | Insert | Update | Remove | Export | SAP Commerce CX | Tutorial",
        src: "https://www.youtube.com/embed/ePdhMMfnNb4",
    },
    {
        title: "Create Custom Page From SmartEdit In SAP Hybris | Adding Custom Page in Navigation Node | WCMS",
        src: "https://www.youtube.com/embed/PyHisY7bHkM",
    },
    {
        title: "Unable to login Smart Edit | SAP Commerce | Resolve Smart Edit Login Issue",
        src: "https://www.youtube.com/embed/k2zKlHgPqc4",
    },
    {
        title: "SAP Hybris2211 Complete Setup | SAP Commerce | YoursTanmay",
        src: "https://www.youtube.com/embed/z8wJwfLUzGU",
    },
    {
        title: "Solr in SAP Hybris | Facet | Create Custom Value Provider | Indexing | Searching | SAP Commerce",
        src: "https://www.youtube.com/embed/J9yMb9Cjg6s",
    },
    {
        title: "Creating Persistence Hooks for Integration Objects in SAP Hybris | SAP Commerce | PrePersistHook",
        src: "https://www.youtube.com/embed/Qc3K4UcquA4",
    },
    {
        title: "Integration in SAP Hybris | SAP Commerce | Integration Object Modeling | Integration UI Tool",
        src: "https://www.youtube.com/embed/hf8-Gno2vHQ",
    },
    {
        title: "How to Send Emails in SAP Commerce | A Step-by-Step Guide to Sending Emails with SAP Hybris",
        src: "https://www.youtube.com/embed/vHZj-PLSj0c",
    },
    {
        title: "Converters & Populators in SAP Hybris | SAP Commerce",
        src: "https://www.youtube.com/embed/fxupnsXcLSs",
    },
    {
        title: "Custom API | OCC | DTO Mapping | Different Layers in SAP Hybris (Controller, Facades, Service, Dao)",
        src: "https://www.youtube.com/embed/UzNSjUOs4kI",
    },
    {
        title: "SAP Hybris Backoffice Customization (Part-2)| Advance Search, Filter tree, Column Header & Many more",
        src: "https://www.youtube.com/embed/VJQyg5VxaDI",
    },
    {
        title: "Install Temporary License in SAP Hybris | Hybris 30 days license expired | Wrapper Stopped issue",
        src: "https://www.youtube.com/embed/gwoF6BhEWSA",
    },
    {
        title: "Data Modeling | Dynamic Attributes| Interceptor in SAP Hybris | SAP Commerce",
        src: "https://www.youtube.com/embed/-mfUh6uKsRA",
    },
    {
        title: "Create Custom Extension in Hybris | Debug Configuration | Code Setup in Intellij | SAP Hybris",
        src: "https://www.youtube.com/embed/zEWLnN-r0As",
    },
    {
        title: "SAP Hybris2205 With Spartacus Complete Setup | SAP Commerce | Spartacus",
        src: "https://www.youtube.com/embed/Q-hRpJXowv4",
    },
    {
        title: "SAP Hybris Backoffice Customization | Customize Backoffice Theme, Logo and Avatar in SAP commerce",
        src: "https://www.youtube.com/embed/56fkbFF3mAk",
    },
    {
        title: "SAP Hybris Core | Data Modeling | Product Modeling | Dynamic Attributes | Impex | Use Case Activity",
        src: "https://www.youtube.com/embed/O_DNcbU17l4",
    },
    {
        title: "Spring MVC Login example | Hibernate",
        src: "https://www.youtube.com/embed/tbHZHVouZAU",
    },
    {
        title: "MountBlue Technologies HackerRank Sample Exam | Odd Number| Find the Number | Solution",
        src: "https://www.youtube.com/embed/-lfJe24LO9Q",
    },
    {
        title: "Laravel Project (Restaurant Find) by Tanmay Chowdhury",
        src: "https://www.youtube.com/embed/mATe3UKgt1k",
    },
    {
        title: "Hackerrank Problem Solving (Basic) | Active Trader",
        src: "https://www.youtube.com/embed/DHF_BDTWj_Q",
    },
    {
        title: "Hackerrank Problem Solving (Intermediate) | Marketing Strategy",
        src: "https://www.youtube.com/embed/pykkRPuA9_g",
    },
];

let videosPerPage = 8;
let currentPage = 1;
let filteredVideos = videos;

function loadVideos() {
    const videoContainer = document.getElementById('video-container');
    const videoCount = document.getElementById('video-count');
    const start = (currentPage - 1) * videosPerPage;
    const end = start + videosPerPage;

    const videosToLoad = filteredVideos.slice(start, end);
    videosToLoad.forEach(video => {
        const card = document.createElement('div');
        card.className = 'col-sm-6';
        card.innerHTML = `
            <div class="card bg-transparent">
                <div class="card-body">
                    <h5 class="card-title">${video.title}</h5>
                    <div class="video-responsive">
                        <iframe src="${video.src}" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        `;
        videoContainer.appendChild(card);
    });

    videoCount.textContent = `Showing ${Math.min(end, filteredVideos.length)} out of ${filteredVideos.length} videos`;

    document.getElementById('load-more').style.display = end >= filteredVideos.length ? 'none' : 'block';
}

function filterVideos() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    filteredVideos = videos.filter(video => video.title.toLowerCase().includes(searchTerm));
    currentPage = 1;
    document.getElementById('video-container').innerHTML = ''; // Clear previous videos
    loadVideos();
}

document.getElementById('load-more').addEventListener('click', () => {
    currentPage++;
    loadVideos();
});

document.getElementById('search-bar').addEventListener('input', filterVideos);

loadVideos(); // Initial load