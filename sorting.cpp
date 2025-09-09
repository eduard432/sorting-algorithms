#include "Sort.h"
#include <iostream>

void Sort::swapSort(int arr[], int size) {
    int aux;
    for(int i = 0; i <= size - 2; i++) {
        for(int j = i + 1; j <= size - 1; j++) {
            if(arr[i] > arr[j]) {
                aux = arr[i];
                arr[i] = arr[j];
                arr[j] = aux;
            }
        }
    }
}

void Sort::bubbleSort(int arr[], int size) {
    bool hasMadeSwap = true;
    int temp;
    for (int i = 0; (i < size - 1 && hasMadeSwap); i++) {
        hasMadeSwap = false;
        for(int j = 0; j < size - 1 - i; j++ ) {
            if(arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                hasMadeSwap = true;
            }
        }
    }
}

void Sort::selectionSort(int arr[], int size) {
    int biggestI;
    int aux;
    for (int i = 0; i < size - 1; i++) {
        biggestI = i;
        for (int j = i + 1; j < size; j++) {
            if(arr[j] < arr[biggestI]) {
                biggestI = j;
            }
        }

        if(i != biggestI) {
            aux = arr[i];
            arr[i] = arr[biggestI];
            arr[biggestI] = aux;
        }
    }
}

void Sort::insertionSort(int arr[], int size) {
    for (int i = 1; i < size; i++) {
        int j = i;
        int aux = arr[i];
        while(j > 0 && aux < arr[j-1]) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = aux;
    }
}

void Sort::mergeSort(int arr[], int size) {
    int* aux = new int[size];
    mergeSort(arr, 0, size - 1, aux);
    delete[] aux;
}

void Sort::mergeSort(int arr[], int start, int end, int* aux) {
    if(start < end) {
        int middle = (start + end) / 2;
        Sort::mergeSort(arr, start, middle, aux);
        Sort::mergeSort(arr, middle + 1, end, aux);
        Sort::merge(arr, start, middle, end, aux);
    }
}

void Sort::merge(int arr[], int start, int middle, int end, int* aux) {
    int i = start;
    int j = middle + 1;
    int k = start;



    while(i <= middle && j <= end) {
        if (arr[i] < arr[j]) {
            aux[k] = arr[i];
            i++;
        } else {
            aux[k] = arr[j];
            j++;
        }
        k++;

    }

    if(i > middle) {
        for(; j <= end; j++) {
            aux[k] = arr[j];
            k++;
        }
    } else {
        for(; i <= middle; i++) {
            aux[k] = arr[i];
            k++;
        }
    }

    for(int m = start; m <= (end); m++) {
        arr[m] = aux[m];
    }
}

void Sort::quickSort(int arr[], int size) {
    if(size<=1) return;
    Sort::quickSort(arr, 0, size - 1);
}

void Sort::quickSort(int arr[], int start, int end) {
    if(start < end) {
        int pivot = partition(arr, start, end);
        quickSort(arr, start, pivot - 1);
        quickSort(arr, pivot + 1, end);
    }
}

int Sort::partition(int arr[], int start, int end) {
    int pivot = arr[start];
    int index = start - 1;
    for (int i = start; i < end; i++) {
        if(arr[i] <= pivot) {
            index++;
        }
    }

}

void Sort::printArray(int arr[], int size) {
    std::cout << "[";

    for (int i = 0; i < size; i++) {
        std::cout << " " << arr[i] << ", ";
    }

    std::cout << " ]";
    
}