  var toDoListe = ["kurs", "bhg", "middag", "turn", "handle"];

    function visListe() {
        var toDo = document.getElementById('liste');
        toDo.innerHTML=''
        for (var i = 0; i < toDoListe.length; i++) {
            var tekst = toDoListe[i];
            toDo.innerHTML += '<li>' + tekst + '</li>';
        }
        console.log(toDoListe[i])
    }

    function pushListe() {
        toDoListe.push(document.getElementById('test').value)
        visListe() 
    }

    function removeListe() {
        toDoListe.splice(-1, 1)
        visListe()    
    }





    function displayPyramid(n) {
        for (var i = 0; i < n; i++) {
            var str = '';
            for (var j = 1; j < n-i; j++){
                str = str + ' ';
            }
            for (var k = 1; k <= (2*i+1); k++) {
                str = str + '$';
            }
            console.log(str);
        }
    }
 

   document.write("<table border=1>")
    for (row=1; row<=4; row++) {
        document.write("<tr>")
    for (col=1; col<=4; col++) {
        document.write("<td>Cato" + row + "<br>jau" + col + "</td>")
    }   
    document.write("</tr>") 
    }
    document.write("</table>")

    function move() {
        var elem = document.getElementById('myBar');
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
            } else {
                width++;
                elem.style.width = width + '%';
                elem.innerHTML = width * 1 + '%';
            }    
        }
    }
    
   