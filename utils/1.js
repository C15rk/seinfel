export function scrollToElement(route) {
    if (route.hash) {
        console.log(route.hash)
        const element = document.querySelector(route.hash);
        console.log(element)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}