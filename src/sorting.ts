import { height, sleep } from "./lib";

export const swapSort = async (element: HTMLElement) => {
  const elements = Array.from(element.children) as HTMLElement[];
  let auxH: number;

  for (let i = 0; i < elements.length - 1; i++) {
    for (let j = i + 1; j < elements.length; j++) {
      const iH = height(elements, i);
      const jH = height(elements, j);
      if (iH > jH) {
        auxH = iH;
        elements[i].style.height = `${jH}px`;
        elements[j].style.height = `${auxH}px`;

        await sleep(0.2);
      }
    }
  }
};

export const bubbleSort = async (element: HTMLElement) => {
  const elements = Array.from(element.children) as HTMLElement[];

  let hasMadeSwap = true;
  let auxH: number;

  for (let i = 0; i < elements.length && hasMadeSwap; i++) {
    hasMadeSwap = false;
    for (let j = 0; j < elements.length - 1; j++) {
      const jH = height(elements, j);
      const jH1 = height(elements, j + 1);
      if (jH > jH1) {
        auxH = jH;
        elements[j].style.height = `${jH1}px`;
        elements[j + 1].style.height = `${auxH}px`;
        hasMadeSwap = true;

        await sleep(0.2);
      }
    }
  }
};
