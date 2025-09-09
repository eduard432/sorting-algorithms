import { BarElement, height, sleep } from "./lib";

export const swapSort = async (rootElement: HTMLElement) => {
  const elements = Array.from(rootElement.children) as HTMLElement[];
  let auxH: number;

  for (let i = 0; i < elements.length - 1; i++) {
    const elementI = new BarElement(elements[i]);
    elementI.color = "swapping";
    for (let j = i + 1; j < elements.length; j++) {
      const elementJ = new BarElement(elements[j]);
      elementJ.color = "comparing";
      if (elementI.height > elementJ.height) {
        auxH = elementI.height;
        elementI.height = elementJ.height;
        elementJ.height = auxH;
      }
      await sleep(0.2);
      elementJ.removeColor("comparing");
    }
    elementI.removeColor("swapping");
  }
};

export const bubbleSort = async (element: HTMLElement) => {
  const elements = Array.from(element.children) as HTMLElement[];

  let hasMadeSwap = true;
  let auxH: number;

  for (let i = 0; i < elements.length && hasMadeSwap; i++) {
    hasMadeSwap = false;
    const elementI = new BarElement(elements[i]);
    elementI.color = "swapping";
    for (let j = 0; j < elements.length - 1; j++) {
      const elementJ = new BarElement(elements[j]);
      elementJ.color = "comparing";
      const elementJ1 = new BarElement(elements[j + 1]);
      if (elementJ.height > elementJ1.height) {
        auxH = elementJ.height;
        elementJ.height = elementJ1.height;
        elementJ1.height = auxH;
        hasMadeSwap = true;
      }
      await sleep(0.2);
      elementJ.removeColor("comparing");

    }
    elementI.removeColor("swapping");
  }
};

export const selectionSort = async (element: HTMLElement) => {
  const elements = Array.from(element.children) as HTMLElement[];

  let biggestI: number;
  let auxH: number;
  for (let i = 0; i < elements.length - 1; i++) {
    biggestI = i;
    const elementI = new BarElement(elements[i]);
    elementI.color = "swapping";
    for (let j = i + 1; j < elements.length; j++) {
      const elementJ = new BarElement(elements[j]);
      elementJ.color = "comparing";
      const elementBiggest = new BarElement(elements[biggestI]);
      if (elementJ.height < elementBiggest.height) {
        biggestI = j;
      }
      await sleep(0.2);
      elementJ.removeColor("comparing");
    }

    if (i !== biggestI) {
      const elementBiggest = new BarElement(elements[biggestI]);
      auxH = elementI.height;
      elementI.height = elementBiggest.height;
      elementBiggest.height = auxH;
    }
    elementI.removeColor("swapping");
  }
};

export const insertionSort = async (element: HTMLElement) => {
  const elements = Array.from(element.children) as HTMLElement[];
  
  for (let i = 1; i < elements.length; i++) {
    let j = i;
    const elementI = new BarElement(elements[i]);
    const auxHeight = elementI.height;
    elementI.color = "swapping";
    while (j > 0) {
      const elementJ1 = new BarElement(elements[j - 1]);
      elementJ1.color = "comparing";
      if (auxHeight >= elementJ1.height) {
        await sleep(0.2);
        elementJ1.removeColor("comparing");
        break
      }
      
      const elementJ = new BarElement(elements[j]);
      elementJ.height = elementJ1.height;
      j--;
      await sleep(0.2);
      elementJ1.removeColor("comparing");
    }
    
    new BarElement(elements[j]).height = auxHeight;

    elementI.removeColor("swapping");
  }
};