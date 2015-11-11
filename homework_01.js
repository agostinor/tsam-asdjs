//Esercizio 1. Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore negativo.
// Iterativo
function ex_1_I(myarray){
    sumall = 0;
    i = 0;
    while(myarray[i] > 0){
        sumall += myarray[i];
        i++;
    }
    return sumall;
}

// Ricorsivo
function ex_1_R(myarray){
    if(myarray.length == 0 || myarray[0] < 0){
        return 0;
    }
    else{
        return myarray[0] + ex_1_R(myarray.slice(1));
    }
}

//Esercizio 2. Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari
//Iterativo

function ex_2_I(n){
    sumOdd = 0;
    for(i = 1; i <= n; i++){
        sumOdd += 2*i-1;
    }
    return sumOdd;
}

//Ricorsivo

function ex_2_R(n){
    if(n == 0){
        return 0;
    }
    else{
        return n*2-1 + ex_2_R(n-1);
    }
}

//Esercizio 3. Dato un array di 10 elementi, calcolarne la media
//Iterativo

function ex_3_I(myarray){
    aver = 0;
    for(i = 0; i < myarray.length; i++){
        aver += myarray[i];
    }
    aver /= myarray.length;
    return aver;
}

//Ricorsivo
function ex_3_R2(myarray){
    if(myarray.length == 0){
        return 0;
    }
    else{
        return myarray[0] + ex_3_R2(myarray.slice(1));
    }
}

function ex_3_R(myarray){
    return ex_3_R2(myarray)/myarray.length;
}

/*Esercizio 4. Dato un intervallo [a, b] con a e b due interi positivi, 
restituire la somma di tutti i numeri compresi all’interno dell’intervallo, 
estremi inclusi. Nel caso che b fosse minore di a, calcolare la somma nell’intervallo [b,a]*/


//Iterativo
function ex_4_I(a,b){
    sumall = 0;
    if(b < a){
        c = b;
        b = a;
        a = c;
    }
    for(i = a; i <= b; i++){
        sumall = sumall + i;
    }
        return sumall;
}

//Ricorsivo
function ex_4_R(a, b){
    if(b < a){
        c = b;
        b = a;
        a = c;
    }
    num = b - a + 1;
    array = [];
    for(i = 0; i < num; i++){
        array[i] = a + i;
    }
    return ex_4_R2(array);
}

function ex_4_R2(a){
    if(a.length == 0){
        return 0;
    }
    else{
        return a[0] + ex_4_R2(a.slice(1));
    }
    return a;
}

//Esercizio 5. Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l’utilizzo del solo operatore somma.
//Iterativo

function ex_5_I(a, b){
    s = 0;
    for(i = 0; i < b; i++){
        s += a;
    }
    return s;
}

//Ricorsivo

function ex_5_R(a, b){
    if(b == 0){
     return 0;
    }
    else{
        return a + ex_5_R(a, b-1);
    }
}

/*Esercizio 6. Si calcoli la divisione e il resto della divisione tra due numeri a, b maggiori a zero,
tramite l’utilizzo dei soli operatori somma e sottrazione.*/

//Iterativo
function ex_6_I(a, b){
        division = 0;
        while(a > b){
            a = a - b;
            division++;
        }
        array = [division, a];
        return array;
}

//Ricorsivo
function ex_6_R(a,b){
    newArray = [];
    newArray[0] = ex_6_R2(a,b);
    function ex_6_R2(a, b){
        if(a > b){
            return 1 + ex_6_R2(a-b, b);
        }
        else{
            return 0;
        }
    }

    newArray[1] = ex_6_R3(a,b);
    function ex_6_R3(a, b){
        if(a > b){
            return ex_6_R3(a-b, b);
        }
        else{
            return a;
        }
    }

    return newArray;
}


// Esercizio 7. Si calcoli la potenza (x^y) di due numeri x y maggiori o uguali a zero, tramite l’utilizzo dei soli operatori somma,
// sottrazione e della funzione mult.

//Iterativo

function ex_7_I(a, b){
    c = a;
    for(i = 0; i < b-1; i++){
        c = ex_5_R(c, a);
    }
    return c;
}

//Ricorsivo
function ex_7_R(a, b){
    if(b == 0){
        return 1;
    }
    else{
        return ex_5_R(ex_5_R(a, 1), ex_7_R(a, b-1));
    }
}

/*Esercizio 8. Dato un array contenente n^2 elementi, scrivere un algoritmo che permetta di inserire
 tutti gli oggetti in un array bidimensionale n x n.*/

 //Non sono riuscito a capire come creare un array bidimensionale


/*Esercizio 9. Dato una lista di elementi, scrivere un algoritmo che permetta di invertire l’ordine degli elementi.*/

//Iterativo
function ex_9_I(Input){
    output = [];
    for(i = 0; i < Input.length; i++){
            output[i] = Input[Input.length-1-i];
    }
    return output;
}

/*Ricorsivo
function ex_9_R(Input){
    newArray = [];
   // newArray.length = Input.length;
    //count=Input.length;
    ex_9_R2(Input, newArray,)
}
function ex_9_R2(Input, newArray){
    if(newArray.length == 0){
           
    }
    else{
        newArray[0] = Input[newArray.length-1];
        ex_9_R2(Input, newArray.slice(1))
    }
}*/

//Esercizio 10. Dati due interi a, n maggiori di 0, scrivere un algoritmo che crea un lista di n elementi contenenti a.

function ex_10_I(a, n){
    array = [];
    for(i = 0; i < n; i++){
    array[i] = a;
    }
    return array;
}

//Ricorsivo
//Non ho capito come ritornare un array in una funzione ricorsiva

//Esercizio 11. Data una lista di interi A, si riordini gli elementi della 
//lista in modo tale che tutti gli elementi dispari precedano nello stesso ordine tutti gli elementi pari.

//Iterativo

function ex_11_I(array){
    newArray = [];
    countOdd = -1;
    for(i = 0; i < array.length; i++){
        if(array[i]%2 != 0){
            countOdd++;
            newArray[countOdd] = array[i];
        }
    }
    for(i = 0; i < array.length; i++){
        if(array[i]%2 == 0){
            countOdd++;
            newArray[countOdd] = array[i];
        }
    }
    return newArray;
}

//Ricorsivo
//Non ho capito come ritornare un array in una funzione ricorsiva