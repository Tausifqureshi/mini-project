function toggleText() {
    var moreText = document.getElementById("moreText");
    var seeMoreLink = document.getElementById("seeMoreLink");

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        seeMoreLink.innerHTML = "See Less";
    } else {
        moreText.style.display = "none";
        seeMoreLink.innerHTML = "See More";
    }
}