let arr = [];
let size = document.getElementById("size");

function build()
{
    let table = document.getElementById("tbody").innerHTML;
    for(let i = 0; i < size.value; i++)
    {
        table += "<tr>\n";
        table += "<td><input id='" + i.toString() + "-0'></td>\n";
        table += "<td><input id='" + i.toString() + "-1'></td>\n";
        for(let j = 0; j < 4; j++)
        {
            let jplus = j + 2;
            table += "<td id='" + i.toString() + "-" + jplus.toString() + "'></td>\n";
        }
        table += "</tr>\n"
    }
    document.getElementById("tbody").innerHTML = table;
}

function solve()
{
    let n = 0;
    for(let i = 0; i < size.value; i++)
    {
        n += parseInt(document.getElementById(i.toString() + "-1").value);
    }
    for(let i = 0; i < size.value; i++)
    {
        let x_i = parseInt(document.getElementById(i.toString() + "-0").value);
        let f_i = parseInt(document.getElementById(i.toString() + "-1").value);
        document.getElementById(i.toString() + "-2").innerHTML = x_i * f_i;        
        document.getElementById(i.toString() + "-3").innerHTML = x_i * x_i * f_i;   
        iminus = i - 1;
        if(i == 0) document.getElementById(i.toString() + "-4").innerHTML = f_i;
        else document.getElementById(i.toString() + "-4").innerHTML = (parseInt(document.getElementById(iminus.toString() + "-4").innerHTML) + f_i);
        document.getElementById(i.toString() + "-5").innerHTML = parseInt(document.getElementById(i.toString() + "-4").innerHTML) * 100 / n;
    }
}

document.getElementById("build").addEventListener("click", build);
document.getElementById("solve").addEventListener("click", solve);