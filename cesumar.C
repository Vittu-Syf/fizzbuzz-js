#include <stdio.h>

void shellSort(int arry[], int n) {
    int gap, i, j, temp;

    // Começa com um gap grande
    for (gap = n / 2; gap > 0; gap /= 2) { //gap = n/2, enquanto o gap for maior que 0, até chegar a 1, o gap é dividido por 2 a cada iteração

        // Faz um insertion sort com esse gap
        for (i = gap; i < n; i++) { //começa a partir do índice igual ao gap, até o final do array
            temp = arry[i];

            // Move os elementos anteriores que estão fora de ordem
            for (j = i; j >= gap && arry[j - gap] > temp; j -= gap) {  //enquanto j for maior ou igual ao gap e o elemento na posição j - gap for maior que temp, o loop continua
                arry[j] = arry[j - gap];
            }

            arry[j] = temp;
        }
    }
}

int main() { // Exemplo de uso
    int arry[] = {45, 23, 78, 12, 56, 89, 67, 34};
    int n = sizeof(arry) / sizeof(arry[0]); //calcula o número de elementos no array dividindo o tamanho total do array pelo tamanho de um elemento

    shellSort(arry, n); //chama a função shellSort passando o array e o número de elementos como argumentos

    printf("Vetor ordenado:\n"); //imprime o vetor ordenado
    for (int i = 0; i < n; i++) { //imprime cada elemento do array ordenado
        printf("%d ", arry[i]);
    }

    return 0;
}