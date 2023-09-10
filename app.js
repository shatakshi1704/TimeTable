function addRow() {
    var table = document.getElementById("table").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);
    var cell9 = newRow.insertCell(8);
    var cell10 = newRow.insertCell(9);
    var cell11 = newRow.insertCell(10);

    cell1.innerHTML = '<input type="text">';
    cell2.innerHTML = '<input type="text">';
    cell3.innerHTML = '<input type="text">';
    cell4.innerHTML = '<input type="text">';
    cell5.innerHTML = '<input type="text">';
    cell6.innerHTML = '<input type="text">';
    cell7.innerHTML = '<input type="text">';
    cell8.innerHTML = '<input type="text">';
    cell9.innerHTML = '<input type="text">';
    cell10.innerHTML = '<input type="text">';
    cell11.innerHTML = '<button class="btn btn-danger" onclick="deleteRow(this)">Delete</button>';
}

function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}