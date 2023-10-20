const container = document.querySelector(".dotContainer");

const createDot = (event) => {
    const dot = document.createElement('div');
    const randomColor = Math.floor(Math.random() * (10 - 1)) + 1;
    dot.classList.add("dot");
    dot.classList.add(`color${randomColor}`);
    container.appendChild(dot);
    dot.style.left = `${event.clientX}px`;
    dot.style.top = `${event.clientY}px`;
   
}

container.addEventListener('click', createDot);

