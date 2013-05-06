function toc(deepest_level, parent_id){
    var levels = ['H2', 'H3', 'H4', 'H5', 'H6'];
    levels = levels.slice(0,deepest_level);

    var parent = document.getElementById(parent_id);
    var tocHolder = createTocHolder(levels, parent);
    var toc = createToc(levels, parent);

    tocHolder.innerHTML = toc;
}

function createTocHolder(levels, parent){
    var tocHolder = document.createElement("ul");
    tocHolder.setAttribute("id", "toc");
    parent.insertBefore(tocHolder, parent.getElementsByTagName('h1').item(0).nextSibling);
    return tocHolder;
}


function createToc(levels, parent){
    var tocContent = "";
    var nodes = parent.childNodes;
    for(var i = 0; i < nodes.length; i++){
        if(nodes[i].tagName != null && levels.indexOf(nodes[i].tagName.toString()) != -1)
            tocContent += '<li><a href="#' + nodes[i].id + '">' + nodes[i].innerHTML + '</a></li>';
    }
    return tocContent;
}