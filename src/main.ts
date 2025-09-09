import { initGraph, shuffleArray } from "./lib";
import { bubbleSort, swapSort } from "./sorting";
import "./style.css";

const swapSortEl = document.getElementById("swap-sort");
const bubbleSortEl = document.getElementById("bubble-sort");

const arr = shuffleArray(Array.from({length: 10}, (_, i) => i + 1))

if(swapSortEl){
  initGraph(arr, swapSortEl)
  swapSort(swapSortEl)
}
if(bubbleSortEl){
  initGraph(arr, bubbleSortEl)
  bubbleSort(bubbleSortEl)
}