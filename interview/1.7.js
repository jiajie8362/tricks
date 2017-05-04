/**
 * Created by jiajie on 17/5/4.
 */
function setZeros(matrix) {
	var row = [];
	var column = [];
	for( var i=0;i< matrix.length;i++) {
		for(var j = 0;j<matrix[0].length;j++) {
			if(matrix[i][j] == 0) {
				row.push(i);
				column.push(j);
			}
		}
	}

	for( var i=0;i< matrix.length;i++) {
		for(var j = 0;j<matrix[0].length;j++) {
			if( row.indexOf(i) >=0 || (column.indexOf(j)>=0)) {
				console.log(i+' '+j)
				matrix[i][j] = 0;
			}
		}
	}
	return matrix;
}

var a = [[1,2,3],[3,0,1],[4,5,6]]
setZeros(a);
console.log(a)