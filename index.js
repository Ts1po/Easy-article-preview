function showShareOptions() {
    var shareOptions = document.getElementById("shareOptions");
    shareOptions.style.display = "block";
    var shareButtons = document.querySelectorAll("#shareOptions button");
    shareButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            shareOptions.style.display = "none";
        });
    });
}

function shareOnFacebook() {
    var imageUrl = encodeURIComponent("your_image_url.jpg");
    var facebookUrl = "https://www.facebook.com/" + imageUrl;
    window.open(facebookUrl, "_blank");
}

function shareOnTwitter() {
    var imageUrl = encodeURIComponent("your_image_url.jpg");
    var twitterUrl = "https://twitter.com/i/flow/login?redirect_after_login=%2Fintent%2Ftweet%3Furl%3D" + imageUrl;
    window.open(twitterUrl, "_blank");
}

function shareOnPinterest() {
    var imageUrl = encodeURIComponent("your_image_url.jpg");
    var pinterestUrl = "https://www.pinterest.com/" + imageUrl;
    window.open(pinterestUrl, "_blank");
}


  
  