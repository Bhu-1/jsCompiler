
function compiler(){
        var html = document.getElementById("html-code").value
        var css = document.getElementById("css-code").value
        var js = document.getElementById("js-code").value
        
        document.getElementById("user").srcdoc=html +  "<style>" + css +"</style>" +"<script>" + js +"</script>"
}

function showHtml(){
        x = document.getElementById("html-container")
        y = document.getElementById("css-container")
        z = document.getElementById("js-container")
        if(x.style.display === "none"){
            x.style.display = "block"
            document.getElementById("html-btn").style["boxShadow"]= "1px 1px white"
            document.getElementById("css-btn").style["boxShadow"]= ""
            document.getElementById("js-btn").style["boxShadow"]= ""
            y.style.display = "none"
            z.style.display = "none"
        }
}
function showCss(){
    
    x = document.getElementById("css-container")
    let theCSSprop = window.getComputedStyle(x, null).getPropertyValue("display")
    // console.log(theCSSprop)
    y = document.getElementById("html-container")
    z = document.getElementById("js-container")
    if(theCSSprop === "none"){
        x.style.display = "block"
        document.getElementById("css-btn").style["boxShadow"]= "1px 1px white"
        document.getElementById("html-btn").style["boxShadow"]= ""
        document.getElementById("js-btn").style["boxShadow"]= ""
        y.style.display = "none"
        z.style.display = "none"
    }
}

function showJs(){

    x = document.getElementById("js-container")
    y = document.getElementById("html-container")
    z = document.getElementById("css-container")
    let theCSSprop = window.getComputedStyle(x, null).getPropertyValue("display")
    if(theCSSprop === "none"){
        x.style.display = "block"
        document.getElementById("js-btn").style["boxShadow"]= "1px 1px white"
        document.getElementById("html-btn").style["boxShadow"]= ""
        document.getElementById("css-btn").style["boxShadow"]= ""
        y.style.display = "none"
        z.style.display = "none"
    }
}