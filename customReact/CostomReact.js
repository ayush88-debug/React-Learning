const customRender=function(reactElement,mainContainer){
    // const domElement=document.createElement(reactElement.type)
    // domElement.setAttribute("href", reactElement.props.href)
    // domElement.setAttribute("target", reactElement.props.target)
    // domElement.innerHTML= reactElement.children

    // mainContainer.appendChild(domElement)

    // optimized
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML= reactElement.children
    for (const prop in reactElement.props) {
        if(prop=="children") continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    mainContainer.appendChild(domElement)

}

const reactElement={  //this is how component which is returned are converted into this
    type:"a",
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:"click me to visit google"
}

const mainContainer=document.getElementById("root")

customRender(reactElement,mainContainer)

