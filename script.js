//your code here!
const list = document.getElementById("infi-list");
let item = 1;

funtion addItem(count){
	for(let i =0;i<count;i++){
		const li = document.createElement("li");
		li.textContent = `Item ${item}`;
		li.appendChild(li);
		item++;
	}
}
addItem(10);

list.addEventListener("scroll",()=>{
	if(list.scrollTop+list.clientHeight>=list.scrollHeight){

		addItem(2);
	}
})