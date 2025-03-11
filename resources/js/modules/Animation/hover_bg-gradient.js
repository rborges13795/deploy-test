export default function HoverBackgroundGradient() {
    const navigation = navigator.userAgent.indexOf('Chrome')

    // If not chrome
    if (navigation == -1) {
        // it code will change all classes
        const buttonGradient = document.querySelectorAll(".gradient")
        
        try {
            buttonGradient.forEach((button) => {
                button.classList.remove('gradient')
                button.classList.add('gradient-anothers-browsers')
            })
        } catch (error) {
            console.log(error)
        }
    }

}