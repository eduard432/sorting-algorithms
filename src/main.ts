import { initGraph, shuffleArray } from "./lib";
import { bubbleSort, insertionSort, selectionSort, swapSort } from "./sorting";
import "./style.css";

const swapSortEl = document.getElementById("swap-sort");
const bubbleSortEl = document.getElementById("bubble-sort");
const selectionSortEl = document.getElementById("selection-sort");
const insertionSortEl = document.getElementById("insertion-sort");

const arr = shuffleArray(Array.from({length: 10}, (_, i) => i + 1))

if(swapSortEl){
  initGraph(arr, swapSortEl)
  swapSort(swapSortEl)
}
if(bubbleSortEl){
  initGraph(arr, bubbleSortEl)
  bubbleSort(bubbleSortEl)
}
if(selectionSortEl) {
  initGraph(arr, selectionSortEl)
  selectionSort(selectionSortEl)
}
if(insertionSortEl) {
  initGraph(arr, insertionSortEl)
  insertionSort(insertionSortEl)
}