function customRender(reactElement,mainContainer){
    const domElement = document.createElement(reactElement.type)
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'htttps://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer =document.querySelector('#root')

customRender(reactElement,mainContainer)