let numbers = [1, 5, 21, 12, 4, 2, 19, 23, 9];
let alumnos = [
    { name: 'Hugo', nota: 10},
    { name: 'Paco', nota: 7},
    { name: 'Luis', nota: 6}
]


function bubbleSort(arr){

    /* for(let x = 0; x < arr.length - 1; x++){ // 2
        for(let i = 0; i < arr.length - 1 ; i++){
            //console.log(arr[i]);
            if(arr[i] > arr[i+1]){
                let temp = arr[i]; // 21
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    } */

    let wall = arr.length - 1;
    while(wall > 0){
        let i = 0;
        while(i < wall){
            if(arr[i] > arr[i+1]){
                let temp = arr[i]; // 21
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
            i++;
        }
        wall--;
    }


    return arr;
}

console.log(alumnos);
console.log(selectSort(alumnos));

// [23, 21, 19, 12, 9, 1, 2, 4, 5]

// min = 4;
// i = 5;
function selectSort(arr){
    let min = 0;
    while(min < arr.length - 1){
        for(let i = min+1; i < arr.length; i++){
            if(arr[min].nota > arr[i].nota){
                let temp = arr[min];
                arr[min] = arr[i];
                arr[i] = temp;
            }
        }
        min++;
    }

    return arr;
}