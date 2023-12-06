const solution = (array ) => {
	if( (0 < array.length && array.length <= 100 ) && (array.length%2 != 0)){
		for(let i = 0; i < array.length; i ++ ){
			if( -1000 < array[i] && array[i] < 1000){
				array.sort((a,b) =>a - b )
				const middle = array[Math.floor(array.length/2)]
				return middle 
			}
			else{
				return ' 0이상 1000이하 숫자를 입력하세요'
			}
		}
	}else{
		return '배열 범위가 너무 큽니다.'
	}
}