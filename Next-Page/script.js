document.addEventListener('DOMContentLoaded', function () {
    const nextPageBtn = document.getElementById('nextPageBtn');
    const prevPageBtn = document.getElementById('prevPageBtn');

    if (nextPageBtn) {
        nextPageBtn.addEventListener('click', function () {
            window.location.href = 'page2.html';
        });
    }

    if (prevPageBtn) {
        prevPageBtn.addEventListener('click', function () {
            window.location.href = 'index.html';
        });
    }
});
