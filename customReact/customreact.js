function customRender(reactElement,container){
    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML= reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    container.appendChild(domElement)

}

const reactElement = {
    type: 'a',
    props:{
        href: 'www.aifremal.com',
        target: '_blank'
    },
    children:'click to visit'
}
const mainContainer = document.getElementById('#root')

customRender(reactElement,mainContainer)
