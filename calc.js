var buttons = document.querySelectorAll('button');
var screen = document.getElementById('screen');

var str = "";
var flag = 0;
if (flag == 0) {
    screen.innerText = '';
}
buttons.forEach(function (i) {
    i.addEventListener('click', function (elem) {
        console.log(elem.target.innerText);
        var data = elem.target.innerText;
        var on = document.getElementById('on');

        if (data == 'ON' && flag == 0) {
            flag = 1;
            screen.innerText = 0;
        }
        else if (data == 'OFF') {
            flag = 0;
            screen.innerText = '';
            str = "";
        }

        else if (data == 'AC' && flag == 1) {
            screen.innerText = '0';
            str = "";

        }
        else if (data == 'DEL' && flag == 1 && str != "") {
            str = str.substring(0, str.length - 1);
            if (str != "")
                screen.innerText = str;
            else
                screen.innerText = '0';
        }
        else if (data != '=' && flag == 1) {
            str += data;
            screen.innerText = str;

        }

        else {
            if (flag == 1) {
                try {
                    // alert(eval(str));

                    str = eval(str);

                    screen.innerText = str;
                }
                catch (e) {
                    //    both the below syntaxes are correct
                    screen.innerText = e.name;
                    //    screen.innerText = console.error(e.name);
                }
            }

        }

    })

})