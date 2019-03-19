#include <stdio.h>
#include <stdlib.h>

int main()
{

    int num = 10;
    int num2 = 23;
    char letra = 'a';
    float pi = 3.14;
    int suma;
    float promedio;

    printf("La variable num vale: %d\n", num);  // "%d" para mostrar en decimal
    printf("La variable letra vale: %c\n", letra);  //
    printf("La variable pi vale: %f\n", pi);
    printf("La variable pi con dos numeros despues de la coma vale %.2f\n", pi);
    printf("num vale %d y num2 vale %d\n", num, num2);

    printf("Hola mundo\n");   // "\n" sirve para hacer un salto de linea
    printf("Chau mundo\n");
    printf("\tHola mundo\n");  // "\t" Sirve para tabular
    printf("Hola \"mundo\"\n");  // "\"" Sirve para mostrar comillas


    // /* 1. Pedir dos numeros y mostrar la suma de estos
    printf("Ingrese un numero: ");
    scanf("%d", &num);   // "scanf lee el buffer de entrada

    printf("Ingrese otro numero: ");
    scanf("%d", &num2);

    suma = num + num2;

    printf("\nLa suma es: %d", suma);

    // Terminado el ejercicio de la suma de dos numeros

    // 2. Pedir dos numeros y mostrar el promedio de estos

    promedio = (float)(num + num2) / 2;  // El tipo definido entre paréntesis (en este caso "(float)") es un casting.

    printf("\nEl promedio es: %f\n", promedio);

    // Terminado el ejercicio del promedio

    system("pause");
    return 0;
}
