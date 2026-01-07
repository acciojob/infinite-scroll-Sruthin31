//your code here!
const list = document.getElementById("infi-list");
let item = 1;

function addItem(count){
	for(let i =0;i<count;i++){
		const li = document.createElement("li");
		li.textContent = `Item ${item}`;
		list.appendChild(li);
		item++;
	}
}
addItem(10);

list.addEventListener("scroll",()=>{
	if(list.scrollTop+list.clientHeight>=list.scrollHeight-1){

		addItem(2);
	}
})