export function gh(e){
    e.preventDefault()
    const color = e.target.children[0].value;
    const opacity = e.target.children[1].value
    e.target.nextElementSibling.style.backgroundColor = `${color}`
    e.target.nextElementSibling.style.opacity = `${opacity}`
    
}