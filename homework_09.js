//Esercizio 1a
function sumAllElement(myarray){
    if(myarray.length == 0){
        return 0;
    } else {
        summ=myarray[0]*5
        return summ + sumAllElement(myarray.slice(1));
    }
}
function ex_1a(array){
    return sumAllElement(array);
}
function sumAllElementR2(myarray, acc){
    if(myarray.length == 0){
        return acc;
    } else {
        if(myarray[0]%2 == 0){
            acc = acc + myarray[0] * myarray[0];
            return sumAllElementR2(myarray.slice(1), acc);
        }else{
            return sumAllElementR2(myarray.slice(1), acc);
        }
    }
}

function sumAllElementR(myarray){
    return sumAllElementR2(myarray, 0);
}

function ex_1b(array){
    return sumAllElementR(array);
}




//Esercizio 1b
function funSumEvenElement(array){
    newArray = array.filter(function(x) { return x % 2 == 0 });
    return newArray.reduce(function(acc, x){return acc + x*x;}, 0)
}

function ex_2(array){
    return funSumEvenElement(array);
}



//Esercizio 3
//Stack///////////////////////////////////////////////////////////

function Stack(){
    this.myarray = []
}

Stack.prototype.push = function(e){ this.myarray.push(e); }
Stack.prototype.pop = function(){ return this.myarray.pop(); }
Stack.prototype.peek = function(){ return this.myarray[this.myarray.length-1]; }
Stack.prototype.isEmpty = function() { return this.myarray.length == 0; }

//var Odd = new Stack();

function multOddAndEvenElemet(array){

    var Odd = new Stack();
    var Even = new Stack();
    var sumTotal = new Stack();

    function pushOddAndEvenElement(a, even, odd){
        if(a.length == 0){
            return odd.myarray.length;
        } else{
            if(a[0]%2 == 0){
                even.push(a[0]);
            }else{
                odd.push(a[0]);
            }
            return pushOddAndEvenElement(a.slice(1), even, odd);
        }
    }
    
    function pushMult(even, odd, sumT){
        if(even.length == 0 && even.length == 0){
            return sumT.myarray;
        }
        if(even.length == 0){
            sumT.push(odd[0]);
            return sumT.myarray;
        }
        if(odd.length == 0){
            sumT.push(even[0]);
            return sumT.myarray;
        }else{
            sumT.push(odd[0]*even[0]);
            return pushMult(even.slice(1), odd.slice(1), sumT);
        }
    }

    function sumStackResult(result, sum){
        if(result.length == 0){
            return sum;
        }else{
            sum += result[0];
            return sumStackResult(result.slice(1), sum);
        }
    }

    pushOddAndEvenElement(array, Even, Odd);
    return sumStackResult(pushMult(Even.myarray, Odd.myarray, sumTotal), 0);

}

function ex_3(arr){
    return multOddAndEvenElemet(arr);
}

//Esercizio 5

function Node(value, leftNode, rightNode) {
    this.item = value;
    this.left = leftNode;
    this.right = rightNode;
}

function BST() {
    this.root = null;
}

BST.prototype.addNode = function(CourrentNode, e){
    if(e < CourrentNode.item){
        if(CourrentNode.lefth == null){
            CourrentNode.lefth = new Node(e, null, null)
        }else{
            this.addNode(CourrentNode.lefth, e)
        }
    }
    else{
        if(CourrentNode.right == null){
            CourrentNode.right = new Node(e, null, null)
        }else{
        this.addNode(CourrentNode.right, e)
        }
    }
}

BST.prototype.add = function(e) {
    if (this.root == null) {
        this.root = new Node(e, null, null);
    } else {
        this.addNode(this.root, e);
    }
}

BST.prototype.exist = function(albero)