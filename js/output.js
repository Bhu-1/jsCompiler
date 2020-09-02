function compiler(){
    var html = document.getElementById("html-code").value
    var css = document.getElementById("css-code").value
    var js = document.getElementById("js-code").value
    
    document.getElementById("user").srcdoc=html +  "<style>" + css +"</style>" +"<script>" + js +"</script>"
}