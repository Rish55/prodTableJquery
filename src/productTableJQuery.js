array=[];

$('document').ready(function(){
    $("#add_productbtn").click(function(){
        var sku =$("#product_sku").val();
        var pname =$("#product_name").val();
        var price =$("#product_price").val();
        var qt =$("#product_quantity").val();

        data(sku, pname, price, qt);
        display(array);
    })
});

function data(sku, pname, price, qt)
{
    for(var i = 0; i < array.length; i++)
    {
        if (array[i].sku == sku)
        {
            alert("Already exist");
            return;
        }
    }
    obj = {};
    obj["sku"] = sku;
    obj["name"] = pname;
    obj["price"] = price;
    obj["qt"] = qt;
    array.push(obj);

}

function display(result){
    $("#tbody").html("<tr><th>Product SKU</th><th>Product Name</th><th>Product Price</th><th>Product Quantity</th></tr>")

    for(let i=0;i<result.length; i++){
        
        $('#tbody').append(`<tr>\
        <td> ${result[i].sku} </td>\
        <td> ${result[i].name} </td>\
        <td> ${result[i].price } </td>\
        <td> ${result[i].qt} </td>\
        <td><a href="javascript:void(0)" onclick="deleteRow( ${result[i].sku} )">Delete</a></td>\
        <td><a href="javascript:void(0)" onclick="editRow( ${result[i].sku} )">Edit</a></td>\
        </tr>`)

    }
}

function editRow(sku){
    var p = {};

    for(var i = 0;i< array.length; i++){
        if(array[i].sku == sku){
            p = array[i];
        }
    }

    editForm(p);
}

function editForm(p){
        deleteRow(p)
        $("#product_sku").val( p.sku);
        $("#product_name").val(p.name);
        $("#product_price").val( p.price);
        $("#product_quantity").val( p.qt); 


        $('#update_productbtn').css("display", "block");
        $('#add_productbtn').hide();

}

function updateProduct(){
        var sku =$("#product_sku").val();
        var pname =$("#product_name").val();
        var price =$("#product_price").val();
        var qt =$("#product_quantity").val();
        
        if(alreadyExist(sku)){
        for(var i = 0;i < array.length; i++){
            if(array[i].sku == sku){
                array[i].name = pname;
                array[i].price= price;
                array[i].qt = qt;
            }
        }
    }
    display(array);

    $('#add_productbtn').css("display", "block");
    $('#update_productbtn').hide();
    
}

function alreadyExist(sku){
    for(var i = 0 ; i<array.length ; i++){
        if(array[i].sku == sku){
            return true;
        }
    }
    return false;
}


function deleteRow(sku){
    for(var i = 0;i < array.length; i++ ){
        if(array[i].sku == sku){
            array.splice(i,1);
        }
    }
    display(array);
}
