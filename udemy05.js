// 검색 알고리즘

    // 이진 검색 솔루션

    function Search(arr, elem){
        var start = 0;
        var end = arr.length -1;
        var middle = math.floor((start + end) / 2);
        while(arr[middle] !== elem && start <= end){
            if(elem < arr[middle]) end = middle - 1;
            else start = middle + 1;
            middle = Math.floor((start + end) / 2);
        }
        return arr[middle] === elem ? middle : -1;
    }
    Search([2,5,6,7,13,15,28,30], -10)

    // 나이브 문자열 검색구현

    function naiveSearch(long, short){
        var count = 0;
        for (var i = 0; i < long.length; i++){
            for(var j = 0; j < short.length; j++){
                if(short[j] !== long[i+j]) break;
                if(j === short.length - 1) count ++;
            }
        }
        return count;
    }
    naiveSearch("lorie loled", "pop")

// 버블 정렬

    // 기본 내장 자바스크립트 정렬

    function numberCompare(num1, num2){
        return num2 - num1;
    }
    [6, 4, 15, 10].sort(numberCompare);

    function compareByLen(srt1, str2){
        return str2.length - srt1.length;
    }
    ["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen)

    // 버블 정렬 : 구현

    function bubblesort(arr){
        for(var i = arr.length; i > 0; i--){
            for(var j = 0; j< i-1; j++){
                console.log(arr, arr[j], arr[j+1]);
                if(arr[j] > arr[j+1]){
                    // SWAP!
                    var temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;                    
                }
            }
            console.log("ONE PASS COMPLETE!")
        }
        return arr;
    }

    function bubbleSort(arr) {
        let noSwap;
        for (var i = arr.length; i > 0; i--) {
          noSwap = true;
          for (var j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
              var temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
              noSwap = false;
            }
          }
          if (noSwap) break;
        }
        return arr;
      }
      
    bubblesort([37,45,29,8,12]);

    

    function bubblesort(arr){
        const swap = (arr, idx1, idx2) => {
            [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
        };

        for (let i = arr.length; i>0; i--){
            for(let j = 0; j < i-1; j++){
                if(arr[j] > arr[j+1]){
                    swap(arr, j, j+1);
                }
            }
        }
        return arr;
    }
    bubblesort([37,45,29,8,12]);