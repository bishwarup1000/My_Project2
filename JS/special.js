function myFunction()
{
var Blank= document.getElementById("blank");
var moreText= document.getElementById("more");
var btn =document.getElementById("myBtn");

if(Blank.style.display == "none")

{
    Blank.style.display = "inline";
    btn.innerHTML= "Know More";
    moreText.style.display = "none";
}

else
{   
    Blank.style.display = "none";
    btn.innerHTML= "Know less";
    moreText.style.display = "inline";
}

}

function myFunction2()
{
var Blank= document.getElementById("blank");
var moreText= document.getElementById("more");
var btn =document.getElementById("myBtn");

if(Blank.style.display == "none")

{
    Blank.style.display = "inline";
    btn.innerHTML= "Click Here";
    moreText.style.display = "none";
}

else
{   
    Blank.style.display = "none";
    btn.innerHTML= "Close";
    moreText.style.display = "inline";
}

}