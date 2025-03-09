$(function () {
    var bar = '';
    bar += '<!-- Navbar -->';
    bar += ' <nav class="navbar navbar-expand-lg navbar-dark bg-dark">';
    bar += '    <a class="navbar-brand" href="/"><img style="width: 40px;height: 40px; margin-right: 8px; border-radius: 178px;"';
    bar += '            src="https://yourstanmay.github.io/Asset/img/logo.jpg">YoursTanmay</a>';
    bar += '    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"';
    bar += '        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">';
    bar += '        <span class="navbar-toggler-icon"></span>';
    bar += '    </button>';
    bar += '    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">';
    bar += '        <div class="navbar-nav ml-auto">';
    
    function createDropdown(id, icon, text, links) {
        bar += '            <div class="nav-item dropdown">';
        bar += '                <a class="nav-link dropdown-toggle neon-nav-hover" href="#" id="' + id + '" role="button"';
        bar += '                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';
        bar += '                    <i class="' + icon + ' mr-1"></i> ' + text;
        bar += '                </a>';
        bar += '                <div class="dropdown-menu bg-secondary" aria-labelledby="' + id + '">';
        links.forEach(link => {
            bar += '                    <a class="dropdown-item neon-nav-hover" href="' + link.href + '">' + link.text + '</a>';
        });
        bar += '                </div>';
        bar += '            </div>';
    }

    createDropdown("navbarDropdownMenuLink1", "fas fa-graduation-cap", "Courses", [
        { href: "/Content/py.html", text: "Python" },
        { href: "/Content/java/java.html", text: "Java" },
        { href: "/Content/mysql/mysql.html", text: "MySQL" },
        { href: "/Content/c.html", text: "C" },
        { href: "/Content/c++.html", text: "C++" },
        { href: "/Content/php.html", text: "PHP" },
        { href: "/Content/ds.html", text: "Data Structure" },
        { href: "/Content/springMVC.html", text: "Spring MVC" },
        { href: "/Content/Hybris_Core.html", text: "SAP Hybris" }
    ]);

    createDropdown("navbarDropdownMenuLink2", "fas fa-compass", "Explore More", [
        { href: "https://yourstanmay.github.io/fitness", text: "YoursTanmay Fitness" },
        { href: "https://yourstanmay.github.io/Site/bhakti.html", text: "YoursTanmay Bhakti" },
        { href: "https://yourstanmay.github.io/Exam", text: "YoursTanmay Exam" }
    ]);
    
    bar += '            <a class="nav-item nav-link neon-nav-hover" href="/Content/video.html"><i class="fas fa-video mr-1"></i> Videos</a>';
    bar += '            <a class="nav-item nav-link neon-nav-hover" href="/Content/store.html"><i class="fas fa-store mr-1"></i> Play Store</a>';
    bar += '            <a class="nav-item nav-link neon-nav-hover" href="https://yourstanmay.github.io/playzone"><i class="fas fa-gamepad mr-1"></i> PlayZone</a>';
    bar += '            <a class="nav-item nav-link neon-nav-hover" href="https://www.onlinegdb.com/" target="_blank"><i class="fas fa-laptop-code mr-1"></i> Compiler</a>';
    bar += '            <a class="nav-item nav-link neon-nav-hover" href="mailto:yourstanmay97@gmail.com"><i class="fas fa-envelope mr-1"></i> Contact Me</a>';
    bar += '        </div>';
    bar += '    </div>';
    bar += '</nav>';

    $("#navbar").html(bar);

    // Close dropdown when clicking outside in mobile view
    $(document).click(function (event) {
        var clickover = $(event.target);
        var navbarOpen = $(".navbar-collapse").hasClass("show");
        if (navbarOpen && !clickover.closest(".navbar").length) {
            $(".navbar-toggler").click();
        }
    });

    // Ensure hover effect works on larger screens
    $(".dropdown").hover(
        function () {
            if ($(window).width() > 992) {
                $(this).find(".dropdown-menu").first().stop(true, true).slideDown(100);
            }
        },
        function () {
            if ($(window).width() > 992) {
                $(this).find(".dropdown-menu").first().stop(true, true).slideUp(100);
            }
        }
    );

    // Ensure dropdown works on click in mobile view
    $(".dropdown-toggle").click(function (e) {
        if ($(window).width() < 992) {
            e.preventDefault();
            var $dropdown = $(this).next(".dropdown-menu");
            $(".dropdown-menu").not($dropdown).slideUp(100);
            $dropdown.stop(true, true).slideToggle(100);
        }
    });
});
