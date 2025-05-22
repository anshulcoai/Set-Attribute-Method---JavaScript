function change()
{
    document.getElementById("para1").setAttribute('class','hell')
    document.getElementById("para1").style.marginTop="16px"
    document.getElementById("para1").style.padding="24px"
    document.getElementById("btn1").setAttribute('class','button')

    
}

document.getElementById("img1").setAttribute("title","This is an image")
document.getElementById("img1").style.animationName="ready"
    document.getElementById("img1").style.animationDuration="3s"
    document.getElementById("img1").style.animationIterationCount="1"


function enable()
{
    document.getElementById("btn3").removeAttribute("disabled");
}

function hello()
{
    document.getElementById("txt1").setAttribute("readonly","readonly");
}

document.getElementById("fly1").setAttribute("class","div1")
document.getElementById("fly2").setAttribute("class","div2")
document.getElementById("fly3").setAttribute("class","div3")
document.getElementById("fly4").setAttribute("class","div4")
document.getElementById("fly5").setAttribute("class","div5")
document.getElementById("fly6").setAttribute("class","div6")
document.getElementById("fly7").setAttribute("class","div7")

function insert()
{
    document.getElementById("op1").setAttribute=('value','Cartoon')
    document.getElementById('op1').innerHTML="Cartoon"
    document.getElementById("op2").setAttribute=('value','Movies')
    document.getElementById("op2").innerHTML="Movies"
    document.getElementById("op3").setAttribute=('value','Series')
    document.getElementById("op3").innerHTML="Series"
}

function execute()
{
    alert("Button Clicked")
}

document.getElementById("para3").setAttribute("onclick","execute()")



document.querySelectorAll("td").setAttribute("id","tables")