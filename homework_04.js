function dec2bin01(n){
    output = "";
    for(i = n; i > 0; i = (i - rest)/2){
        rest = i%2
        output = output + "" + rest + "";
    }
    return output;
}

function Stack(){
    this.myarray = []
}

Stack.prototype.push = function(e){ this.myarray.push(e); }
Stack.prototype.pop = function(){ return this.myarray.pop(); }
Stack.prototype.peek = function(){ return this.myarray[this.myarray.length-1]; }
Stack.prototype.isEmpty = function() { return this.myarray.length == 0; }

function dec2bin3(x){

    function rec(remStack, n) {
        if (n == 0) {
            return remStack;
        } else {
            remStack.push(Math.floor(n % 2));
            return rec(remStack, Math.floor(n / 2));
        }
    }

    Stack.prototype.popAll = function(callback) {
        while (!this.isEmpty()){
            callback(this.pop());
        }
    }

    var binaryString = '';
    var Object = new Stack();
    rec(Object, x);
    call = function(e) { binaryString += '' + e + ''; };
    Object.popAll(call);
    return binaryString;
}
