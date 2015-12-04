/*
Esercizio Ricorsione (15 punti)
*/

function initialArray() {
	var seed = 1;
	function random() {
		var x = Math.sin(seed++) * 10000;
		return Math.floor(x);
	}

	var a = [];
	for(var i = 0; i < 10000; ++i) {
		a.push(random());
	}
	return a;
}
var A = initialArray();

function Ricorsione(array){
	if(array.length == 0){
		return 0;
	} else{
		if(array[0] == 5070){
			return 1 + Ricorsione(array.slice(1));
		} else {
			return Ricorsione(array.slice(1));
		}
	}
}


/*
Esercizio filter/map/reduce (15 punti)
*/

function sqrtOfSumEvenElement(array){
		sumAll = array.filter(function(x) { return x > 0 }).filter(function(x) { return x % 2 == 0 }).map(function (x){return x*x;}).reduce(function(acc, x){return acc + x}, 0);
		return Math.sqrt(sumAll);
}

/*
Esercizio Stack (25 punti)
*/


function Stack() {
    this.myarray = [];
}

Stack.prototype.push = function(e) { this.myarray.push(e); }
Stack.prototype.pop = function() { return this.myarray.pop(); }
Stack.prototype.peek = function() { return this.myarray[this.myarray.length - 1]; }
Stack.prototype.isEmpty = function() { return this.myarray.length == 0; }


function OperationOfNumber(string) {
    var arr = string.split(' ');

    var S = new Stack();
    var V = new Stack();

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != ')' && arr[i] != '(') {
            if (arr[i] == '+' || arr[i] == '-' || arr[i] == '*' || arr[i] == '/'){
            	S.push(arr[i]);
            } else 
                V.push(parseInt(arr[i]));
            }

        	if (arr[i] == ')' && arr[i] != '(') {
            simbol = S.pop()
            switch (simbol) {
                case '+':
					pop1 = V.pop();
            		pop2 = V.pop();
                    V.push(pop2 + pop1);
                    break;
                case '-':
					pop1 = V.pop();
            		pop2 = V.pop();
                    V.push(pop2 - pop1);
                    break;
                case '*':
					pop1 = V.pop();
            		pop2 = V.pop();
                    V.push(pop1 * pop2);
                    break;
                case '/':
					pop1 = V.pop();
            		pop2 = V.pop();
                    V.push(pop2 / pop1);
                    break;
            }
        }
        
    }
    return V.pop();
}

var _0xd10d=["\x28\x20\x28\x20\x28\x20\x28\x20\x28\x20\x33\x33\x32\x31\x33\x20\x2A\x20\x32\x33\x33\x20\x29\x20\x2B\x20\x39\x39\x32\x31\x20\x29\x20\x2D\x20\x28\x20\x37\x33\x32\x31\x34\x31\x38\x20\x2B\x20\x33\x33\x32\x31\x32\x32\x20\x29\x20\x29\x20\x2D\x20\x31\x34\x31\x33\x32\x34\x32\x20\x29\x20\x2A\x20\x28\x20\x32\x34\x31\x34\x31\x30\x20\x2D\x20\x32\x34\x31\x34\x31\x39\x20\x29\x20\x29"];

function evaluateExpr(callback) {
	return callback(_0xd10d[0]);
}

/*/*////////////////////////////////////////////////////
/*
Tree (15 punti)
*/

function Node(item, left, right) {
    this.item = item;
    this.left = left;
    this.right = right;
}

function BST() {
    this.root = null;
}

BST.prototype.addNode = function(currentNode, newNode) {
    if (newNode.item < currentNode.item) {
        var left = currentNode.left;
        if (left == null) {
            currentNode.left = newNode;
        } else {
            this.addNode(currentNode.left, newNode);
        }
    } else {
        var right = currentNode.right;
        if (right == null) {
            currentNode.right = newNode;
        } else {
            this.addNode(currentNode.right, newNode);
        }
    }
}

BST.prototype.add = function (item) {
    if (this.root == null) {
        this.root = new Node(item, null, null);
    } else {
        this.addNode(this.root, new Node(item, null, null));
    }
}

////////////////////////////////////////////////////

function maxOfTree(array) {
    var newTree = new BST();

    for(i = 0; i < array.length; i++){
        newTree.add(array[i]);
    }

    function maxInTree(tree, max) {
        if (tree == null) {
            return max;
        } else {
            max = tree.item;
            return maxInTree(tree.right, max);
        }
    }
    return maxInTree(newTree.root, 0);
}