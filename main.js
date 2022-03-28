const ratinContainer = document.querySelector(".rating");
let currentValue = 0;
const limit = 6;

const html = Array.from(Array(limit)).map( (_, i) =>{
    return`<div class="item item-${i}" data-pos="${i}"></div>`
});

ratinContainer.innerHTML = html.join("");


document.querySelectorAll('.item').forEach(item =>{
    item.addEventListener('mouseover', e =>{
        
        const pos = item.getAttribute("data-pos");

        if (currentValue === parseInt(pos) + 1) {
            return;
        }

        document.querySelectorAll('.item').forEach(it =>{
            if(it.classList.contains('item-full')){
                it.classList.remove('item-full');
            }
        });

        for(let i = 0; i <= pos; i++){
            const squere = document.querySelector(`.item-${i}`);
            if (!squere.classList.contains("item-full")) {
                squere.classList.add("item-full");
            }
        }
        currentValue = parseInt(pos) + 1;
    }
    );

    item.addEventListener("click", (e) =>{
        const pos = item.getAttribute("data-pos");
        currentValue = parseInt(pos) + 1;
        console.log(currentValue);
    })
});
