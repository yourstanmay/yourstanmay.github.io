const videos = [
    {
        title: "Flexible Search Queries in SAP Commerce (Hybris) | Beginner to Advanced",
        src: "https://www.youtube.com/embed/40GxuH2Hi_8?origin=https://yourstanmay.github.io",
    },
    {
        title: "Impex in SAP Hybris | Insert | Update | Remove | Export | SAP Commerce CX | Tutorial",
        src: "https://www.youtube.com/embed/ePdhMMfnNb4?origin=https://yourstanmay.github.io",
    },
    {
        title: "Create Custom Page From SmartEdit In SAP Hybris | Adding Custom Page in Navigation Node | WCMS",
        src: "https://www.youtube.com/embed/PyHisY7bHkM?origin=https://yourstanmay.github.io",
    },
    {
        title: "Unable to login Smart Edit | SAP Commerce | Resolve Smart Edit Login Issue",
        src: "https://www.youtube.com/embed/k2zKlHgPqc4?origin=https://yourstanmay.github.io",
    },
    {
        title: "SAP Hybris2211 Complete Setup | SAP Commerce | YoursTanmay",
        src: "https://www.youtube.com/embed/z8wJwfLUzGU?origin=https://yourstanmay.github.io",
    },
    {
        title: "Solr in SAP Hybris | Facet | Create Custom Value Provider | Indexing | Searching | SAP Commerce",
        src: "https://www.youtube.com/embed/J9yMb9Cjg6s?origin=https://yourstanmay.github.io",
    },
    {
        title: "Creating Persistence Hooks for Integration Objects in SAP Hybris | SAP Commerce | PrePersistHook",
        src: "https://www.youtube.com/embed/Qc3K4UcquA4?origin=https://yourstanmay.github.io",
    },
    {
        title: "Integration in SAP Hybris | SAP Commerce | Integration Object Modeling | Integration UI Tool",
        src: "https://www.youtube.com/embed/hf8-Gno2vHQ?origin=https://yourstanmay.github.io",
    },
    {
        title: "How to Send Emails in SAP Commerce | A Step-by-Step Guide to Sending Emails with SAP Hybris",
        src: "https://www.youtube.com/embed/vHZj-PLSj0c?origin=https://yourstanmay.github.io",
    },
    {
        title: "Converters & Populators in SAP Hybris | SAP Commerce",
        src: "https://www.youtube.com/embed/fxupnsXcLSs?origin=https://yourstanmay.github.io",
    },
    {
        title: "Custom API | OCC | DTO Mapping | Different Layers in SAP Hybris (Controller, Facades, Service, Dao)",
        src: "https://www.youtube.com/embed/UzNSjUOs4kI?origin=https://yourstanmay.github.io",
    },
    {
        title: "SAP Hybris Backoffice Customization (Part-2)| Advance Search, Filter tree, Column Header & Many more",
        src: "https://www.youtube.com/embed/VJQyg5VxaDI?origin=https://yourstanmay.github.io",
    },
    {
        title: "Install Temporary License in SAP Hybris | Hybris 30 days license expired | Wrapper Stopped issue",
        src: "https://www.youtube.com/embed/gwoF6BhEWSA?origin=https://yourstanmay.github.io",
    },
    {
        title: "Data Modeling | Dynamic Attributes| Interceptor in SAP Hybris | SAP Commerce",
        src: "https://www.youtube.com/embed/-mfUh6uKsRA?origin=https://yourstanmay.github.io",
    },
    {
        title: "Create Custom Extension in Hybris | Debug Configuration | Code Setup in Intellij | SAP Hybris",
        src: "https://www.youtube.com/embed/zEWLnN-r0As?origin=https://yourstanmay.github.io",
    },
    {
        title: "SAP Hybris2205 With Spartacus Complete Setup | SAP Commerce | Spartacus",
        src: "https://www.youtube.com/embed/Q-hRpJXowv4?origin=https://yourstanmay.github.io",
    },
    {
        title: "SAP Hybris Backoffice Customization | Customize Backoffice Theme, Logo and Avatar in SAP commerce",
        src: "https://www.youtube.com/embed/56fkbFF3mAk?origin=https://yourstanmay.github.io",
    },
    {
        title: "SAP Hybris Core | Data Modeling | Product Modeling | Dynamic Attributes | Impex | Use Case Activity",
        src: "https://www.youtube.com/embed/O_DNcbU17l4?origin=https://yourstanmay.github.io",
    },
    {
        title: "Spring MVC Login example | Hibernate",
        src: "https://www.youtube.com/embed/tbHZHVouZAU?origin=https://yourstanmay.github.io",
    },
    {
        title: "MountBlue Technologies HackerRank Sample Exam | Odd Number| Find the Number | Solution",
        src: "https://www.youtube.com/embed/-lfJe24LO9Q?origin=https://yourstanmay.github.io",
    },
    {
        title: "Laravel Project (Restaurant Find) by Tanmay Chowdhury",
        src: "https://www.youtube.com/embed/mATe3UKgt1k?origin=https://yourstanmay.github.io",
    },
    {
        title: "Hackerrank Problem Solving (Basic) | Active Trader",
        src: "https://www.youtube.com/embed/DHF_BDTWj_Q?origin=https://yourstanmay.github.io",
    },
    {
        title: "Hackerrank Problem Solving (Intermediate) | Marketing Strategy",
        src: "https://www.youtube.com/embed/pykkRPuA9_g?origin=https://yourstanmay.github.io",
    },
];

let videosPerPage = 8;
let currentPage = 1;
let filteredVideos = videos;

// Add DOMContentLoaded event listener to ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Initialize the video page
        initVideoPage();
    } catch (error) {
        console.error("Error initializing video page:", error);
    }
});

function initVideoPage() {
    const loadMoreButton = document.getElementById('load-more');
    const searchBar = document.getElementById('search-bar');
    
    if (!loadMoreButton || !searchBar) {
        console.error("Required elements not found: load-more or search-bar");
        return;
    }
    
    // Add event listeners
    loadMoreButton.addEventListener('click', () => {
        currentPage++;
        loadVideos();
    });
    
    searchBar.addEventListener('input', filterVideos);
    
    // Initial load
    loadVideos();
}

function loadVideos() {
    try {
        const videoContainer = document.getElementById('video-container');
        const videoCount = document.getElementById('video-count');
        
        if (!videoContainer || !videoCount) {
            console.error('Required elements not found: video-container or video-count');
            return;
        }
        
        const start = (currentPage - 1) * videosPerPage;
        const end = start + videosPerPage;

        const videosToLoad = filteredVideos.slice(start, end);
        videosToLoad.forEach(video => {
            const card = document.createElement('div');
            card.className = 'col-sm-6';
            card.innerHTML = `
                <div class="card bg-transparent">
                    <div class="card-body">
                        <h5 class="video-card-title">${video.title}</h5>
                        <div class="video-responsive">
                            <iframe src="${video.src}" allowfullscreen loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            `;
            videoContainer.appendChild(card);
        });

        videoCount.textContent = `Showing ${Math.min(end, filteredVideos.length)} out of ${filteredVideos.length} videos`;

        const loadMoreButton = document.getElementById('load-more');
        if (loadMoreButton) {
            loadMoreButton.style.display = end >= filteredVideos.length ? 'none' : 'block';
        }
    } catch (error) {
        console.error('Error loading videos:', error);
    }
}

function filterVideos() {
    try {
        const searchBar = document.getElementById('search-bar');
        if (!searchBar) {
            console.error('Search bar element not found');
            return;
        }
        
        const searchTerm = searchBar.value.toLowerCase();
        filteredVideos = videos.filter(video => video.title.toLowerCase().includes(searchTerm));
        currentPage = 1;
        
        const videoContainer = document.getElementById('video-container');
        if (videoContainer) {
            videoContainer.innerHTML = ''; // Clear previous videos
            loadVideos();
        } else {
            console.error('Video container element not found');
        }
    } catch (error) {
        console.error('Error filtering videos:', error);
    }
}