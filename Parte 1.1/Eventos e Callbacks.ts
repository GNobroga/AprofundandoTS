`
    Lidar com o This em Eventos

`;

const btn = document.querySelector("button");

function handleClick(this: HTMLButtonElement, event: PointerEvent) {
    console.log(event.pageX);
}

btn?.addEventListener("pointerdown", handleClick);