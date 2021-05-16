$(function () {
    var bar = '';
    bar += '<!-- Footer -->';
    bar += '    <center><footer class="container-fluid bg-dark my-0 py-3 text-light">';
    bar += '        <a href="https://yourstanmay.github.io/" class="mb-0 text-center" style="color:white;">&copy; YoursTanmay 2020-2021</a>';
    bar += '        <p class="mb-0 text-center">';
    bar += '            <a href=" https://www.facebook.com/tanmay.chowdhury.5688 " target="_blank"><img class="lg"';
    bar += '                    src="https://image.flaticon.com/icons/svg/124/124010.svg " alt=" "> </a>';
    bar += '            <a href=" https://www.instagram.com/yourstanmay/  " target="_blank"><img class="lg"';
    bar += '                    src=" https://image.flaticon.com/icons/svg/2111/2111463.svg " alt=" "> </a>';
    bar += '            <a href=" https://twitter.com/yourstanmay " target="_blank"><img class="lg"';
    bar += '                    src=" https://image.flaticon.com/icons/svg/124/124021.svg " alt=" "> </a>';
    bar += '            <a href=" https://www.linkedin.com/in/tanmay-chowdhury-51530abb/ " target="_blank"><img class="lg"';
    bar += '                    src=" https://image.flaticon.com/icons/svg/1409/1409945.svg " alt=" ">';
    bar += '            </a>';
    bar += '            <a href=" https://www.hackerrank.com/yourstanmay?hr_r=1 " target="_blank"><img class="lg"';
    bar += '                    src=" https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/600px-HackerRank_Icon-1000px.png "';
    bar += '                    alt=" "> </a>';
    bar += '            <a href=" https://www.codechef.com/users/yourstanmay " target="_blank"><img class="lg"';
    bar += '                    src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXBUWY12NOXtKD9UEvtqkKeWAPyJm8GTkgEw&usqp=CAU "';
    bar += '                    alt=" "> </a>';
    bar += '            <a href="https://www.youtube.com/channel/UCIo-AMfrjUrbqVUAj7Jp71w" target="_blank"><img class="lg"';
    bar += '                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJOBvdbXLyjXQSslIGQEColkUcaXUXjc-PuA&usqp=CAU"';
    bar += '                    alt=" "> </a>'; 
    bar += '            <a href="https://github.com/yourstanmay" target="_blank"><img class="lg"'; 
    bar += '                    src="https://pngimg.com/uploads/github/github_PNG83.png"'; 
    bar += '                    alt=" "> </a>  ';           
    bar += '        </p>'; 
    bar += '    </footer></center>'; 
 

    $("#footer").html(bar);

    var id = getValueByName("id");
    $("#" + id).addClass("active");
});

function getValueByName(name) {
    var url = document.getElementById('nav-bar').getAttribute('src');
    var param = new Array();
    if (url.indexOf("?") != -1) {
        var source = url.split("?")[1];
        items = source.split("&");
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var parameters = item.split("=");
            if (parameters[0] == "id") {
                return parameters[1];
            }
        }
    }
}