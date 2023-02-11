var form = document.getElementById('addItems');
var taskList = document.getElementById('items');
var filter = document.getElementById('searchTask');

// add item
form.addEventListener('submit', addItem);
// remove item
taskList.addEventListener('click', removeItem);

filter.addEventListener('keyup', search)


function addItem(e) {
    e.preventDefault();

    var newItem = document.getElementById('item').value;
    // create li
    var li = document.createElement('li');
    li.className = 'list-group-items';
    li.appendChild(document.createTextNode(newItem));

    // create del btn
    var delBtn = document.createElement('button');
    delBtn.className = 'delete btn';
    delBtn.appendChild(document.createTextNode('X'));

    //  add to list
    taskList.append(li)
    li.appendChild(delBtn);
}

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Sure?')) {
            var li = e.target.parentElement;
            taskList.removeChild(li);
        }
    }
}

function search(e) {
    // convert to lowercase
    var text = e.target.value.toLowerCase();
    // Get list
    var items = taskList.getElementsByTagName('li');
    // converto to array
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}


