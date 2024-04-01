/* 2번 문제 답안을 작성해주세요. */
function solution(n) {
    var answer = 0;
    let i = 0;
    while(i <= n) {
        answer++;
        i = factorial(answer);
    }
    return answer - 1;
}

function factorial(result) {
    if (result === 1) return 1;
    else return result * factorial(result-1);
}