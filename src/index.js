module.exports = function check(str, bracketsConfig) {

	var strArr = str.split('');
	var stak = [];
	var valueOpenArr = [];
	var valueCloseArr = [];

	for(var i = 0; i < bracketsConfig.length; i++) {
		valueOpenArr[i] = bracketsConfig[i][0];
		valueCloseArr[i] = bracketsConfig[i][1];
	}

	for(var i = 0; i < str.length; i++) {
		var openIndex = valueOpenArr.indexOf(strArr[i]);
		
		if(openIndex !== -1) {
			stak.push(openIndex);

			if(stak[stak.length-1] === stak[stak.length-2] && strArr[i] === valueCloseArr[openIndex]){
			    stak.pop();
			    stak.pop();
			}

			continue;
		}

		var closeIndex = valueCloseArr.indexOf(strArr[i]);
		if(closeIndex !== -1) {
			openIndex = stak.pop();

			if(closeIndex !== openIndex) {
				return false;
			}
		}

	}

	return stak.length === 0;

}


