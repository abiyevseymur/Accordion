var num = true;
function showText() {
    var button = document.getElementById('show1');

    if (num == true) {
        button.style.display = 'block';
        document.getElementById('show2').style.display = 'none';
        document.getElementById('show4').style.display = 'none';
        document.getElementById('show3').style.display = 'none';
    }

}

function showText1() {
    var button = document.getElementById('show2');
    if (num == true) {
        button.style.display = 'block';
        document.getElementById('show1').style.display = 'none';
        document.getElementById('show3').style.display = 'none';
        document.getElementById('show4').style.display = 'none';
    }
}
function showText2() {
    var button = document.getElementById('show3');
    if (num == true) {
        button.style.display = 'block';
        document.getElementById('show1').style.display = 'none';
        document.getElementById('show2').style.display = 'none';
        document.getElementById('show4').style.display = 'none';
    }
}
    function showText3() {
        var button = document.getElementById('show4');
        if (num == true) {
            button.style.display = 'block';
            document.getElementById('show1').style.display = 'none';
            document.getElementById('show2').style.display = 'none';
            document.getElementById('show3').style.display = 'none';
        }
    }

