//Find Indexes of a subarray with given sum
// Steps:
// Traverse the array from start to end.
// From every index start another loop from i to the end of the array to get all subarrays starting from i, and keep a variable currentSum to calculate the sum of every subarray.
// For every index in inner loop update currentSum = currentSum + arr[j]
// If the currentSum is equal to the given sum then return i as left index and j as the right index.
class solution{
      subarraySum(arr, n, s){
        let last=0;
        let start=0;
        let currsum=0;
        let flag=false;
        let res = [];
        for(let i=0; i<n; i++){
            currsum += arr[i];
            if(currsum>=s){
                last=i;
                while(s<currsum && start<last){
                    currsum -= arr[start];
                    ++start;
                }
                if(currsum==s){
                    res.push(start + 1);
                    res.push(last + 1);
                    flag = true;
                    break;
                }
            }
        }
        if(flag==false)
            res.push(-1);
        return res;
      }
    }