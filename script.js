const parseCode = (str) => {
  // your code here
	let ans={};
	let i=0;
	let temp='';
	while(str[i]!=='0')temp+=str[i++];
	ans.firstName=temp;
	while(str[i]==='0')i++;
	temp='';
	while(str[i]!=='0')temp+=str[i++];
	ans.lastName=temp;
	while(str[i]==='0')i++;
	temp='';
	while(i<str.length)temp+=str[i++];
	ans.id=temp;
	return ans;
};

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
