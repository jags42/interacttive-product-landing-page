
var modal = document.getElementById('login-modal');

document.getElementById('search-button').onclick = function() {
    document.getElementById('login-modal').style.display = 'block';
};

document.getElementById('close-button').onclick = function() {
    document.getElementById('login-modal').style.display = 'none';
};


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}