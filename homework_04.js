function dec2bin(n){
    output = "";
    for(i = n; i > 0; i = (i - rest)/2){
        rest = i%2
        output = output + "" + rest + "";
    }
    return output;
}
