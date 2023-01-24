const createBubble = () => {
    const section = document.querySelector(`section`);
    const bubble = document.createElement(`div`);
    let size = Math.random() * 60;

    bubble.style.width = 20 + size + `px`;
    bubble.style.height = 20 + size + `px`;
    bubble.style.left = Math.random() * innerWidth + "px";

    section.appendChild(bubble);

    bubble.addEventListener("click", () => {
        bubble.classList.add("explode");

        setTimeout(() => {
            bubble.remove();
        }, 50);
    });

    setTimeout(() => {
        bubble.remove();
    }, 9000);
};

setInterval(createBubble, 200);

const boutonsPoissons = document.querySelectorAll(".bar div");

boutonsPoissons.forEach((boutonPoisson) => {
    boutonPoisson.addEventListener("click", () => {
        const poissonImage = boutonPoisson.querySelector("img");
        createPoisson(poissonImage.src);
    });
});

const createPoisson = (poissonSrc) => {
    const poisson = document.createElement(`img`);
    poisson.src = poissonSrc;
    poisson.classList.add("poisson");

    poisson.style.width = Math.random() * 75 + 50 + "px";

    const move = () => {
        poisson.style.top = Math.random() * window.innerHeight + "px";
        poisson.style.left = Math.random() * window.innerWidth + "px";
    };

    document.body.appendChild(poisson);

    setInterval(move, Math.random() * 3000 + 2000);
    setTimeout(move);
    move();

    poisson.addEventListener("click", () => {
        poisson.remove(poisson);
    });
};
