function isPalindrome(str){
    for(var i=0;i<Math.floor(str.length/2);i++){// in the case of "bob" this will do 3/2 which i think will be fine to set to 1, just so it will check the first and last char
        if(str.charAt(i)!=str.charAt(str.length-1-i)){
            console.log("false!");
            return false;
        }
        else{
            console.log("true!");
            return true;
        }
        
    }
}
isPalindrome("tacocat");
isPalindrome("bob");
isPalindrome("helloworld");
isPalindrome("h12321h");
isPalindrome("lalala");