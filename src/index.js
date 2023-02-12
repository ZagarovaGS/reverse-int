module.exports = function reverse (n) {
    const arr=String(n).split('');
    if(arr[0]=='-' && arr[arr.length-1]==0 && arr[arr.length-2]!=0){
      arr.shift();
      arr.pop();
    } else
    if(arr[0]=='-' && arr[arr.length-1]==0 && arr[arr.length-2]==0){
      arr.shift();
      arr.pop();
      arr.pop()
    }
    if(arr[0]=='-' && arr[arr.length-1]!=0 && arr[arr.length-2]!=0){
        arr.shift();
    }
    if(arr[0]=='-' && arr[arr.length-1]!=0 && arr[arr.length-2]==0){
        arr.shift();
    }
    const reversedArr=arr.reverse();
    const reversedNumber=reversedArr.join('');
    console.log(reversedNumber);
    return reversedNumber;
}
