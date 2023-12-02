function calcularEquacao() {
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var c = parseFloat(document.getElementById('c').value);

    var delta = b * b - 4 * a * c;

    if (delta < 0) {
        document.getElementById('resultado').innerText = 'A equação não possui raízes reais.';
    } else if (delta === 0) {
        var x = -b / (2 * a);
        document.getElementById('resultado').innerText = 'A equação possui uma raiz real: x = ' + x;
    } else {
        var x1 = (-b + Math.sqrt(delta)) / (2 * a);
        var x2 = (-b - Math.sqrt(delta)) / (2 * a);
        document.getElementById('resultado').innerText = 'A equação possui duas raízes reais: x1 = ' + x1 + ' e x2 = ' + x2;
    }

    
}

function limpar() {
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("c").value = "";
    document.getElementById("resultado").innerText = "";
  }