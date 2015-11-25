function Stack(){
    this.array = [];
}

Stack.prototype.push = function(n){ return this.array.push(n);}
Stack.prototype.peek = function(){ return this.array[this.array.length-1];}
Stack.prototype.pop = function(){ return this.array.pop();}
Stack.prototype.isEmpty = function() { return this.array.length == 0; }
Stack.prototype.unshift = function(n){ return this.array.unshift(n); }

function operationOfNumbers(string){

    var arr = string.split(' ');
    
    var firstObject = new Stack();
    var secondObject = new Stack()

    function pushAndPop(obj1, obj2, a){

    if(a.length == 0){
        return obj1.array[0];
    }else{
        if(a[0] != '+' && a[0] != '-' && a[0] != '*' && a[0] != '/'){
            obj1.push(a[0]);
        }
        else{
            obj2.push(a[0]);
        }

        if(obj1.array.length > 1 && obj2.isEmpty() == false){
            if(obj2.array[0] == '+'){
                pop1 = Number(obj1.pop());
                pop2 = Number(obj1.pop());
                obj1.push(pop1 + pop2);
            }else{
                if(obj2.array[0] == '*'){
                    pop1 = obj1.pop();
                    pop2 = obj1.pop();
                    obj1.push(pop2 * pop1);
                }else{
                    if(obj2.array[0] == '/'){
                        pop1 = obj1.pop();
                        pop2 = obj1.pop();
                        obj1.push(pop2 / pop1);
                    }else{
                        pop1 = obj1.pop();
                        pop2 = obj1.pop();
                        obj1.push(pop2 - pop1);
                    }
                }
                obj2.pop();
            }  
       }
        return pushAndPop(obj1, obj2, a.slice(1));
    }
    }
    return pushAndPop(firstObject,secondObject,arr);
    return firstObject[0];
}
//Per Tiziano
function rpn(str){
    return operationOfNumbers(str);
}