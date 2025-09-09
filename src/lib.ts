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

const barColors = {
  default: "bg-amber-400",
  comparing: "bg-blue-500",
  swapping: "bg-red-500",
  extra: "bg-green-500",
} as const; // 'as const' para mayor precisión

type BarColorKeys = keyof typeof barColors;

export class BarElement {
  element: HTMLElement;
  constructor(element: HTMLElement) {
    this.element = element;
  }

  get height() {
    return parseInt(this.element.style.height);
  }

  set height(h: number) {
    this.element.style.height = `${h}px`;
  }

  set color(color: BarColorKeys) {
    this.element.classList.add(barColors[color]);
  }

  removeColor(color: BarColorKeys) {
    this.element.classList.remove(barColors[color]);
  }
}

export const height = (elements: HTMLElement[], i: number) => parseInt(elements[i].style.height)