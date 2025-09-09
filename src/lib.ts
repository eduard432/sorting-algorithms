export const randomArr = (n = 10, max = 100) =>
  Array.from({ length: n }, () => Math.floor(Math.random() * max) + 1);

export const sleep = (seconds = 1) =>
  new Promise((resolve) => setTimeout(resolve, seconds * 1000));

export const initGraph = (arr: number[], swapSortEl: HTMLElement ) => {
  swapSortEl.innerHTML = "";
  arr.forEach((e) => {
    const div = document.createElement("div");
    div.style.height = `${e * 20}px`;
    div.className = "w-4 bg-amber-400 inline-block mx-[1px]";
    swapSortEl.appendChild(div);
  });
};

export function shuffleArray(array: number[]) {
    // Crear una copia para no modificar el array original
    const shuffled = [...array];
    
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    return shuffled;
}

export const height = (elements: HTMLElement[], i: number) => parseInt(elements[i].style.height)