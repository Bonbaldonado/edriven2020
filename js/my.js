function mainForm(){
    var subt, getTax, getTotal, getamountPaid, getchange, percentToGet, pay;
    pay = document.getElementById("pay")
    percentToGet = 12;
    subt = document.getElementById("subtotal").value;
    getTax = Number((percentToGet / 100) * subt);
    getTotal =  Number(subt) + Number(getTax);

    getamountPaid = Number(getTotal);  
    getchange = Number(getamountPaid-getTotal);

    if(subt > 99){
        document.getElementById("tax").value = getTax.toFixed(2);
        document.getElementById("total").value = getTotal.toFixed(2);
        document.getElementById("amountpaid").value = getamountPaid.toFixed(2);
        document.getElementById("amountpaid").disabled = false;
        document.getElementById("amountpaid").min = getTotal.toFixed(2);
        document.getElementById("change").value = getchange.toFixed(2);
        pay.style.backgroundColor = "#5de95d";
        pay.disabled = false;
    }
    else{
        document.getElementById("tax").value = "";
        document.getElementById("total").value = "";
        document.getElementById("amountpaid").value = "";
        document.getElementById("amountpaid").disabled = true;
        document.getElementById("amountpaid").min = "";
        document.getElementById("change").value = "";
        pay.style.backgroundColor = "#ff0000";
        pay.disabled = true;
    }
};

function changeVal(){
    var subt, getTax, getTotal, getamountPaid, getchange;
    subt = document.getElementById("subtotal").value;
    getTax = document.getElementById("tax").value
    getTotal =  document.getElementById("total").value

    getamountPaid = document.getElementById("amountpaid").value 
    getchange = Number(getamountPaid-getTotal);

    document.getElementById("change").value = getchange.toFixed(2);

        if(getchange > "-1"){
            pay.style.backgroundColor = "#5de95d";
            pay.disabled = false;
        }
        else{
            pay.style.backgroundColor = "#ff0000";
            pay.disabled = true;
        }
};