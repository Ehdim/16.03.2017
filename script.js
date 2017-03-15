document.getElementById('demo').addEventListener('keydown', function(event) {
    if (event.which >= 48 && event.which <= 57) {
        return true;
    } else {
        event.preventDefault();
        return false;
    }
});
document.getElementById('demo').addEventListener('focus', function(event) {
    this.value = "+994-";
})
document.getElementById('demo').addEventListener('keydown', function(event) {
    this.value.length
    if (this.value.length == 7) {
        this.value += "-";
    }
    if (this.value.length == 11) {
        this.value += "-";
    }
    if (this.value.length == 14) {
        this.value += "-";
    }
});