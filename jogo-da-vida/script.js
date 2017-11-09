document.addEventListener("DOMContentLoaded", function(event) { 
    var table = document.getElementById('table');
    
    for (var i = 0; i < 10; i++) {
        var novaLinha = table.insertRow(i);

        for (var j = 0; j < 10; j++) {
            var novaCelula = novaLinha.insertCell(j);

            novaCelula.innerHTML = '(' + i + ',' + j + ')';
        }
    }

    console.log('table.row[2]: ', table.rows[2].cells[0]);
});