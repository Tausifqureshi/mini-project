document.querySelectorAll('.see-more-btn').forEach(button => {
    button.addEventListener('click', () => {
        const description = button.previousElementSibling;
        console.log(description);
        
        const dots = description.querySelector('.dots');
        const moreText = description.querySelector('.more');
        
        if (moreText.style.display === "none" || moreText.style.display === "") {
            dots.style.display = "none";
            moreText.style.display = "inline";
            description.style.maxHeight = description.scrollHeight + "px";
            button.textContent = "See Less";
        } else {
            dots.style.display = "inline";
            moreText.style.display = "none";
            description.style.maxHeight = "40px";
            button.textContent = "See More";
        }
    });
});
