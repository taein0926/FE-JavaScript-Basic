/* 3번 문제 답안을 작성해주세요. */
function solution(arr) {
    var answer = arr;
    let idx = 0, min = 2147483647;
    
    if(answer.length <= 1) {
        answer = [-1];
    }
    else {
        answer.map(function (num, index) {
            if(min > num) {
                min = num;
                idx = index;
            }
        })
        answer.splice(idx, 1);
    }
    return answer;
}