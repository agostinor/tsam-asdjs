function CircularQueue(n){
    this.circularLength = n,
    this.array = [],
    this.array.length = n
}

CircularQueue.prototype.front = function () { return array[array.length-1];}
CircularQueue.prototype.size = function (){ return array.length;}
CircularQueue.prototype.isEmpty = function(){ return array.length == 0;}

CircularQueue.prototype.equeue = function (n){
    
    function riempimento(courrentArray, e, i, lunghezza){
        if(i == lunghezza){
            return;
        } else{
            if(isNaN(courrentArray[i]) == true){
                courrentArray[i] = e;
            }else{
                return riempimento(courrentArray, e, i+1, lunghezza);
            }
        }
        
    }
return riempimento(this.array, n, 0, this.circularLength);
}

CircularQueue.prototype.dequeue = function (){
    function decrement(courrentArray, i, lunghezza){
        if(i == lunghezza){
            return;
        } else {
            if(courrentArray[i] != null && courrentArray[i] != undefined){
                courrentArray[i] = undefined;
                return;
            } else {
                decrement(courrentArray, i+1, lunghezza);
            }
        }
    }
    return decrement(this.array, 0, this.circularLength)
}