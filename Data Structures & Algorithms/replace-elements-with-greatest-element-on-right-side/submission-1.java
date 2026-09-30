class Solution {
    public int[] replaceElements(int[] arr) {
        for(int i = 0; i < arr.length; i++){
            int highest = 0;
            for(int j = i + 1; j < arr.length; j++){
                highest = Math.max(highest, arr[j]);
            }
            arr[i] = highest;
        }
        arr[arr.length - 1] = -1;
        return arr;
        
    }
}