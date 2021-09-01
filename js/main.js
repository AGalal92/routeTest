var prdName = document.getElementById('productName');
var prdCategory = document.getElementById('productCategory');
var prdPrice = document.getElementById('productPrice');
var prdDescription = document.getElementById('productDescription');
var prdAdd = document.getElementById('addProduct');
var prdDelete = document.getElementById('deleteProduct');
var prdEdit = document.getElementById('editProduct')
var items = [];

prdAdd.onclick = function () {

    var item = {
        name: prdName.value,
        category: prdCategory.value,
        price: prdPrice.value,
        description: prdDescription.value
    }
    items.push(item);
    showData();
}

function showData() {

    var content = '';
    for (i = 0; i < items.length; i++) {
        content +=
            `<tr>
            <td>${i + 1}</td>
            <td>${items[i].prdName}</td>
            <td>${items[i].prdCategory}</td>
            <td>${items[i].prdPrice}</td>
            <td>${items[i].prdDescription}</td>
            <td><button id="deleteProduct" class="btn btn-danger">Delete</button></td>
            <td><button id= "editProduct" class="btn btn-warning">Edit</button></td>
        </tr>`
    }

    document.getElementById("tableContent").innerHTML = content;
}

/* prdDelete.onclick = function () {
    for (i = 0; i < items.length; i++) {
        items[i] = document.getElementsByClassName('deleteProduct');
    }
    console.log(items);
} */