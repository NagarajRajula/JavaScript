/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if((nums1.length < 1000 && nums2.length < 1000) || ((nums1.length + nums2.length) < 2000)){
        median = 0;
        nums1 = nums1.concat(nums2);
        nums1.sort(function(a, b){return a - b});
        length1 = nums1.length;
        //console.log('length1: ', length1);
        //console.log('nums1 : ', nums1);
        
        if( length1 == 1){
            median = nums1[length1 - 1];
        }
        else if(length1 % 2 == 0){
            median =  (nums1[length1/2] + nums1[length1/2 - 1])/2;
            median = median < 0 ? 0 : median;
        } else {
            median = nums1[Math.floor(length1/2) -1];
        }
        return median;   
    }
    return null;
};
n = [1,3];
m = [2];
returnedValue = findMedianSortedArrays(n,m);
console.log('returnedValue: ',returnedValue);
