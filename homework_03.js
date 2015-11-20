//Esercizio 1. Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un
// valore negativo.


//Array.prototype.mult = function(){return this.array.reduce(function(acc,x){return x*acc}, 1);}
Array.prototype.sumNotNegative = function (){
    som = 0;
    this.every(function(x){
                    if(x > 0){
                        som = som + x;
                        return true;
                    }
                    else{
                        return false;
                    }
                })
    return som;
};
//per Tiziano
function ex_1_F(array){
    return array.sumNotNegative();
}




//Esercizio 3. Dato un array di 10 elementi, calcolarne la media
Array.prototype.average = function (){
    return this.reduce(function(acc, x){ return x+acc},0)/this.length;
    
}

//Per Tiziano
function ex_3_F(array){
    return array.average();
}
/*Esercizio 9. Dato una lista di elementi, scrivere un algoritmo che permetta di invertire l’ordine degli elementi.*/

Array.prototype.change = function (){
    output = [];
    for(i = 0; i < this.length; i++){
            output.unshift(this[i]);
    }
    return output;
}


//per Tiziano

function ex_9_F(array){
    return array.change();
}

//Esercizio 11. Data una lista di interi A, si riordini gli elementi della 
//lista in modo tale che tutti gli elementi dispari precedano nello stesso ordine tutti gli elementi pari.

Array.prototype.rearrange = function (){
    pair = this.filter(function (x){ return x%2 == 0})
    odd = this.filter(function (x){ return x%2 != 0})
    return odd.concat(pair);
}
 //per Tiziano
function ex_11_F(array){
    return array.rearrange();
}