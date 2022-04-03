// documentation and dom manipulation
let myLeads = [];
const inputEl = document.getElementById("input-el");
const buttonEl = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteEl = document.getElementById("delete-btn");
const tabBtn = document.getElementById("savetab-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

// tabbbbbbb
tabBtn.addEventListener("click",function(){
    // console.log(tabs[0].url);
    chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads",JSON.stringify("myLeads"));
        render(myLeads);
    })
})

// tabbbbbbb

deleteEl.addEventListener("dblclick",function(){
    localStorage.clear();
    myLeads = [];
    render(myLeads);

})
// Push value into array declared on the first line
buttonEl.addEventListener("click",function() {
    myLeads.push(inputEl.value);

    localStorage.setItem("myLeads",JSON.stringify(myLeads));

    render (myLeads);
    inputEl.value = ""; 
}
) 



console.log(localStorage.getItem("myLeads"));

// Lists out myleads anytime button is clicked
function render(leads){
let listItems = "";
for(let i = 0; i<leads.length;i++){
    listItems += 
    `<li>
        <a target ='_blank' href = '${leads[i]}'>
    
            ${leads[i]}
        </a>
    </li>`;
    console.log(listItems);
}
ulEl.innerHTML = listItems;
}




