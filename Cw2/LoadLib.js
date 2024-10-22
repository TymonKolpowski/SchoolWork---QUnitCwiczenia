
function LoadLib(tagName, elementType, pathToFile, fileName, rel = null, version = null){
    if(elementType == "script" || elementType == "SCRIPT"){
        let node = document.createElement(elementType);
        let ver = version != null ? '?ver=' + version: '';
        node.setAttribute("src",pathToFile+fileName+ver); 
        if(tagName == "head" || tagName == "HEAD"){
            let head = document.getElementsByTagName(tagName)[0];
            head.appendChild(node);
        }
        else if(tagName == "body" || tagName == "BODY"){
            let body = document.getElementsByTagName(tagName)[0];
            body.appendChild(node);
        }
        else{
            console.log("Wrong tag target")
        }
    }else if(elementType == "link" || elementType == "LINK"){
        let node = document.createElement(elementType);
        let ver = version != null ? '?ver=' + version: '';
        if(rel != null){
            node.setAttribute("rel",rel);
        }
        node.setAttribute("href",pathToFile+fileName+ver); 
        if(tagName == "head" || tagName == "HEAD"){
            let head = document.getElementsByTagName("head")[0];
            head.appendChild(node);
        }
        else{
            console.log("Wrong tag target")
        }
        
    }else{
        console.log("Nieobsługiwany tag");
    }
    
}