var data = location.search;
// document.write(data);

var searchSplitted = location.search.split("&");

document.write("<div>");
for (var i = 0; i < searchSplitted.length; i++) {
    var spl1 = searchSplitted[i].split("=");//["txtName","Nadia"]
    document.write("<p>" + spl1[0] + ": <span>" + spl1[1] + "</span></p>");
}
document.write("</div>");
