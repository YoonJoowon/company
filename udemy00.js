    // 문제 해결 접근법 및 패턴

        // 두 배열 사이에 제곱되는 것만 있는지

        function same(arr1, arr2){
            if(arr1.length !== arr2.length){
                return false;
            }
            for(i=0; i<arr1.length; i++){
                let correctIndex = arr2.indexOf(arr1[i]**2)
                if(correctIndex===-1){
                    return false;
                }
                arr2.splice(correctIndex, 1)
            }
            return trues
        }

        function sam(arr1, arr2){
            if(arr1.length !== arr2.length){
                return false;
            }
            let Counter1 = {}
            let Counter2 = {}
            for(let val of arr1){
                Counter1[val] = (Counter1[val] || 0) +1
            }
            for(let val of arr2){
                Counter2[val] = (Counter2[val] || 0) +1
            }
            for(let key in Counter1){
                if(!(key**2 in Counter2)){
                    return false
                }
                if(Counter2[key**2] !== Counter1[key]){
                    return false
                }
            }
            return true
        }

        // 배열 -x + x 가 0이되는것

        function sun(arr){
            for(let i = 0; i< arr.length; i++){
                for(let j = i+1; j < arr.length; j++){
                    if(arr[i]+arr[j]===0){
                        return [arr[i], arr[j]];
                    }
                }
            }
        }

        function sun(arr){
            let left = 0;
            let right = arr.length -1;
            while(left < right){
                let sum = arr[left] + arr[right];
                if(sum ===0){
                    return [arr[left], arr[right]];
                }
                else if(sum>0){
                    right --;
                }
                else {
                    left ++;
                }

            }

        }

        // 배열 고유값 세려보기

        function countValues(arr){
            if(arr.length === 0) return 0;
            var i =0;
            for(var j = 1; j<arr.length; j++){
                if(arr[i]!== arr[j]){
                    i++;
                    arr[i] = arr[j]
                }
            }
            return i+1;
        }

        // 기준점 간 이동배열 패턴
        function maxSubArraySum(arr, num){
            if(num > arr.length){
                return null;
            }
            var max = -Infinity;
            for (let i =0; i < arr.length - num +1 ; i++){
                temp = 0;
                for (let j = 0; j < num; j++){
                    temp += arr[i+j];
                }
                if (temp > max){
                    max = temp;
                }
            }
            return max;
        }

    // 재귀 recursion

        // 스택 호출하기
        function takeShower(){
            return "Showering!"
        }

        function eatBreakfast(){
            let meal = cookFood();
            return `Eating ${meal}`
        }

        function cookFood(){
            let items = ["Oatmeal", "Eggs", "Protein Shacke"]
            return items[Math.floor(Math.random()*items.length)];
        }

        function wakeUp(){
            takeShower()
            eatBreakfast()
            console.log("OK ready to go to work!")
        }

        wakeup()

        // 예제 1
        function countDown(num){
            for(var i = num; i > 0; i--){
                console.log(i);
            }
            console.log("All done!")
        }

        countDown(5)

        // 예제 2
        function sumRange(num){
            if(num === 1) return 1;
            return num + sumRange (num-1);
        }

        // 반복문으로 팩토리얼 구현하기
        function factorial(num){
            let total = 1;
            for(let i = num; i>0; i--){
                total *=i
            }
            return total;
        }

        // 재귀호출로 팩토리얼 구현하기
        function factorial(num){
            if(num === 1) return 1;
            return num * factorial(num-1);
        }
        factorial(5);

        // Helper 메소드 재귀
        function collectOddValues(arr){
            let result = [];

            function helper(helperInput){
                if(helperInput.length ===0){
                    return;
                }
                if(helperInput[0] % 2 !== 0){
                    result.push(helperInput[0])
                }
                helper(helperInput.slice(1))
            }
            helper(arr)
            return result;
        }

        collectOddValues([1,2,3,4,5,6,7,8,9])

        // 순수 재귀
        function collectOddValues2(arr){
            let newArr = [];

            if(arr.length ===0){
                return newArr;
            }

            if(arr [0] % 2 !==0){
                newArr.push(arr[0]);
            }

            newArr = newArr.concat(collectOddValues2(arr.slice(1)))
            return newArr;
        }

        collectOddValues2([1,2,3,4,5])