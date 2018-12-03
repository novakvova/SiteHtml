counter = 5;

window.onload = function () {
    console.log("Сторінка завантажилася");
    //Показати модалку
    var btnAddUser = document.getElementById("btnAddUser");
    btnAddUser.onclick = ShowDialogAddStudent;

    //Закрити модалку
    //document.getElementById("btnCloseAddUser").onclick = HideDialogAddStudent;
    var list = document.getElementsByClassName("dlgClose");
    for (var i = 0; i < list.length; i++) {
        list[i].onclick = HideDialogAddStudent;
    }

    document.getElementById("btnSaveUser").onclick = SaveUser;
    InitEventButton();
}

function ShowDialogAddStudent() {
    var dlgAddUser = document.getElementById("dlgAddUser");
    dlgAddUser.style.display = "block";
}
function HideDialogAddStudent() {
    var dlgAddUser = document.getElementById("dlgAddUser");
    dlgAddUser.style.display = "none";
}

function SaveUser() {
    //alert("Пробуємо зберети значення");
    var row = document.createElement('tr');
    var txtFirstName = document.getElementById("txtFirstName");
    var txtLastName = document.getElementById("txtLastName");
    var txtAddress = document.getElementById("txtAddress");
    var txtEmail = document.getElementById("txtEmail");
    row.innerHTML = `
                    <th>2</th>
                    <td>${txtFirstName.value}</td>
                    <td>${txtLastName.value}</td>
                    <td>${txtAddress.value}</td>
                    <td>${txtEmail.value}</td>
                    <td><a href="#" class="btn btn-success">Edit</a> <a href="#" class="btn btn-danger btn-delete">Delete</a></td>
                    `;
    var tBody = document.getElementById('dataUsers');
    tBody.appendChild(row);
    txtFirstName.value = "";
    txtLastName.value = "";
    txtAddress.value = "";
    txtEmail.value = "";
    InitEventButton();
    HideDialogAddStudent();
}

function InitEventButton() {
    var listbtnDel = document.getElementsByClassName("btn-delete");
    for (var i = 0; i < listbtnDel.length; i++) {
        listbtnDel[i].onclick = DeleteRow;
    }
    var listbtnEdit = document.getElementsByClassName("btn-edit");
    for (var i = 0; i < listbtnEdit.length; i++) {
        listbtnEdit[i].onclick = EditRow;
    }
}

function DeleteRow() {
    var e = this;
    
    while (e.parentElement.nodeName != "TBODY") {
        e = e.parentElement;
    }
    var a = this;
    while (a.parentElement.nodeName != "TBODY") {
        a = a.parentElement;
    }
    alert(a.children[1].innerText);
    //a.children[2]
    e.remove();
    console.log("RemoveNode");
    return false;
}

function EditRow() {
    var e = this;

    while (e.parentElement.nodeName != "TBODY") {
        e = e.parentElement;
    }

    alert(e.children[1].innerText);
    //a.children[2]
    console.log("EditNode");
    return false;
}
