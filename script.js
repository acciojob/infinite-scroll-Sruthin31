//your code here!
const list = document.getElementById("infi-list");
let item = 1;

funtion additem(count){
	for(let i =0;i<count;i++){
		const li = document.createElement("li");
		li.textContent = `Item ${item}`;
		li.appendChild(li);
		item++;
	}
}
additem(10);

list.addEventListener("scroll",()=>{
	if(list.scrollTop+list.clientHeight>=list.scrollHeight){

		additem(2);
	}
})