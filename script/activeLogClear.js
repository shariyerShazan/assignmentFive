document.getElementById('activeLog').addEventListener('click' , ()=>{
    let activeLogList = document.getElementById('activeLogList')
    activeLogList.innerHTML = ''
})

let navConpleteTask = document.getElementById('navConpleteTask')
navConpleteTask.innerText = 24

let taskNumber = document.getElementById('taskNumber');
taskNumber.innerText = 6; 


let activeLogList = document.getElementById('activeLogList')

for (let i = 0; i < taskNumber.innerText; i++) {
    const completeTaskBtn = document.getElementsByClassName('CompleteTaskBtn')[i]; 
    completeTaskBtn.addEventListener('click', () => {
        taskNumber.innerText = parseInt(taskNumber.innerText) - 1;
        navConpleteTask.innerText = parseInt(navConpleteTask.innerText) +1 ;
        alert('board updated successfully')
       let  parent = completeTaskBtn.parentElement
       let grandParent = parent.parentElement
       let child = grandParent.children[1]
       let title = child.innerText
       
       const time = today.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });


       const newLogItem = document.createElement('p');
       newLogItem.classList.add('bg-gray-100', 'p-2', 'rounded-xl', 'text-sm', 'm-4', 'font-sm');
       newLogItem.innerText = `You have completed ${title} at ${time}`;
       
       activeLogList.appendChild(newLogItem);


        completeTaskBtn.setAttribute('disabled', 'true');
        completeTaskBtn.style.backgroundColor = 'gray';
        completeTaskBtn.style.cursor = 'not-allowed';
        
        if (parseInt(taskNumber.innerText) === 0) {
            alert('All tasks are complete');
        }
    });
}

