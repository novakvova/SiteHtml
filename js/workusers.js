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
                    <td><a href="#" class="btn btn-success">Edit</a> <a href="#" class="btn btn-danger">Delete</a></td>
                    `;
    var tBody = document.getElementById('dataUsers');
    tBody.appendChild(row);
    txtFirstName.value = "";
    txtLastName.value = "";
    txtAddress.value = "";
    txtEmail.value = "";
    HideDialogAddStudent();
}
