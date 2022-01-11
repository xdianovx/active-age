import Choices from "choices.js";

const select = () => {
    const selects = document.querySelectorAll('select')
    selects.forEach(select => {
        const choices = new Choices(select, {
            searchEnabled: false,
            itemSelectText: ''
        });

    })
}

export default select