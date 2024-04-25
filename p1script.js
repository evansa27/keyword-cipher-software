var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", 
"r", "s", "t", "u", "v", "w", "x", "y", "z"];
//encipher
function getEncipher(){
    var input = document.getElementById("input").value;
    var keyword = document.getElementById("keyword").value;
    keyword = String(keyword);
    var keyletter = document.getElementById("keyletter").value;
    var cipherAlphabet = [];
    var encipheredOutput = "";
    input = input.toLowerCase();
    keyword = keyword.toLowerCase(); 
    keyletter = keyletter.toLowerCase();
    document.getElementsByName("plaintext")[0].value = alphabet.join(' ');
   for (i = 0; i < keyword.length; i++) { //this loop will put the keyword into the cipherAarray
		if (cipherAlphabet.includes(keyword.charAt(i))) { 
			continue;
		}
		else {
			cipherAlphabet.push(keyword.charAt(i));
		}
    }
   var j = 0; 
    for (var i = keyword.length; i < 100; i++){  //keyword can only be 100 characters max
        var letter = alphabet[j];
        cipherAlphabet.push(letter); // this puts the alphabet into the new cipherAlphabet array
        j++;
    }
    let unique = []; // this is a temporary placeholder to remove repeating elements from cipherAlphabet
    for(i = 0; i < cipherAlphabet.length; i++){
        if(unique.indexOf(cipherAlphabet[i]) == -1){
            unique.push(cipherAlphabet[i]);
        }
    }
    cipherAlphabet = unique; // this sets the placeholder back to cipherAlphabet
    unique = []; //reset the placeholder 
    unique = cipherAlphabet.splice(26 - alphabet.indexOf(keyletter), 26); //this splits end of the alphabet that needs to be moved to the front
    cipherAlphabet = unique.concat(cipherAlphabet); //puts the two arrays back together, end of the alphabet before the keyword
    cipherAlphabet = cipherAlphabet.filter(elm => elm); // gets rid of any extra spaces
    document.getElementsByName("ciphertext")[0].value = cipherAlphabet.join(" "); 
    input = input.replace(/[\s0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, ''); //this ignores any punctuation the user may have inserted
    input = input.split('');
    input.forEach(element => {
        encipheredOutput += cipherAlphabet[alphabet.indexOf(element)];
    });
    document.getElementsByName("output")[0].value = encipheredOutput; 
}
//decipher
function getDecipher(){
    var input = document.getElementById("input").value;
    var keyword = document.getElementById("keyword").value;
    keyword = String(keyword);
    var keyletter = document.getElementById("keyletter").value;
    var cipherAlphabet = [];
    var encipheredOutput = "";
    var decipheredOutput = "";
    input = input.toLowerCase();
    keyword = keyword.toLowerCase(); 
    keyletter = keyletter.toLowerCase();
    document.getElementsByName("plaintext")[0].value = alphabet.join(" ");
   for (i = 0; i < keyword.length; i++) { //this loop will put the keyword into the cipherAarray
		if (cipherAlphabet.includes(keyword.charAt(i))) { 
			continue;
		}
		else {
			cipherAlphabet.push(keyword.charAt(i));
		}
    }
   var j = 0; 
    for (var i = keyword.length; i < 100; i++){  //keyword can only be 100 characters max
        var letter = alphabet[j];
        cipherAlphabet.push(letter); // this puts the alphabet into the new cipherAlphabet array
        j++;
    }
    let unique = []; // this is a temporary placeholder to remove repeating elements from cipherAlphabet
    for(i = 0; i < cipherAlphabet.length; i++){
        if(unique.indexOf(cipherAlphabet[i]) == -1){
            unique.push(cipherAlphabet[i]);
        }
    }
    cipherAlphabet = unique; // this sets the placeholder back to cipherAlphabet
    unique = []; //reset the placeholder 
    unique = cipherAlphabet.splice(26 - alphabet.indexOf(keyletter), 26); //this splits end of the alphabet that needs to be moved to the front
    cipherAlphabet = unique.concat(cipherAlphabet); //puts the two arrays back together, end of the alphabet before the keyword
    cipherAlphabet = cipherAlphabet.filter(elm => elm); // gets rid of any extra spaces
    document.getElementsByName("ciphertext")[0].value = cipherAlphabet.join(" "); 
    input = input.replace(/[\s0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, ''); //this ignores any punctuation the user may have inserted
    input = input.split('');
    input.forEach(element => {
    decipheredOutput += alphabet[cipherAlphabet.indexOf(element)];
    });
    document.getElementsByName("output")[0].value = decipheredOutput; 
}
function switchElements(id){
    var analysisInput = document.getElementById("analysisInput").value;
    var letter = id;
    var newLetter = document.getElementById(id).value;
    var decipheredOutput = document.getElementById("analysisOutput").value;
    var textPlaceholder = "";
    var arrayPlaceholder =[];
    analysisInput = analysisInput.toLowerCase();
    analysisInput = analysisInput.replace(/[0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, ''); //this ignores any punctuation the user may have inserted
    newLetter = newLetter.toLowerCase();
    //this creates an array that puts the user input into an array
	for (i = 0; i < decipheredOutput.length; i++) {
		arrayPlaceholder.push(decipheredOutput.charAt(i));
	}
//the for loop below swaps the plaintext letters to the cipher input
	for (i = 0; i < analysisInput.length; i++) {
		if (analysisInput.charAt(i) == letter) {
			if (newLetter.length == 0) {
				arrayPlaceholder[i] = "-";
			}
			else {
				arrayPlaceholder[i] = newLetter;
			}
		}
	}
    document.getElementsByName("analysisOutput")[0].value = arrayPlaceholder.join(""); 
}
//the below function creates the output text box and changes as the user inserts letters
function runningOutput(id) {
	var analysisInput = document.getElementById("analysisInput").value;
    var textPlaceholder = "";
    analysisInput = analysisInput.replace(/[0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, ''); //this ignores any punctuation the user may have inserted
	analysisInput = analysisInput.toLowerCase();
    //the following puts hypens for each letter there is in the input
    analysisInput = analysisInput.split('');
    analysisInput.forEach(element => {
        if (element != " "){
            textPlaceholder += "-";
        }else {
            textPlaceholder += " ";
        }
    });
    document.getElementsByName("analysisOutput")[0].value = textPlaceholder;
}
