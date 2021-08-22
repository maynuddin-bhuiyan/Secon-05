/*---------------------------------------------------------------
        Mac Javascript  Start               
---------------------------------------------------------------*/



//Mac Memory,Storage & Delivery Create by set all value in all input;               


function getEquipment(utensil , price) {
    const oldUtensil = document.getElementById(utensil + '_price');
    const utensilPrice = price;
    oldUtensil.innerText = utensilPrice;

    updateTotalPrice();
    
};


//updateTotalPrice Funtion Create by Get Mac Total

function updateTotalPrice(){
    const macText = document.getElementById('mac_paice');
    const macTotal = parseInt(macText.innerText);
    const memoryText = document.getElementById('memory_price');
    const memoryTotal = parseInt(memoryText.innerText);
    const storageText = document.getElementById('storage_price');
    const storageTotal = parseInt(storageText.innerText);
    const deliveryText = document.getElementById('delivery_price');
    const deliveryTotal = parseInt(deliveryText.innerText);

    const totalEquipment = parseInt(macTotal + memoryTotal + storageTotal + deliveryTotal);


    const macTotalPrice = document.getElementById('total_price').innerText = totalEquipment;

   document.getElementById('total_amount').innerText = macTotalPrice;
}


//getdiscount Funtion Create By Get 20% discount.

function getdiscount(){
    const totalPriceText = document.getElementById('total_price');
    const totalPrice = totalPriceText.innerText;
    const macDiscount = document.getElementById('total_amount');   
    const inputFild = document.getElementById('pomo_code');
    const inputTotal = inputFild.value;

    if(inputTotal == 'stevekaku'){
        const discount = totalPrice / 20;
        macDiscount.innerText = Math.round(totalPrice - discount)
    }

    inputFild.value = '';
}


//16GB 1TB Memory 180

document.getElementById('new_memory_price').addEventListener('click',function(){
    getEquipment('memory',180);    
});


//1TB SSD Storage 180

document.getElementById('new_storage_price').addEventListener('click',function(){
    getEquipment('storage',180);    
});


//Mac 512GB SSD 100               

document.getElementById('old_storage_price').addEventListener('click',function(){
    getEquipment('storage',100);    
});


//Mac Delivery Cost 20              

document.getElementById('new_delivery_price').addEventListener('click',function(){    
    getEquipment('delivery',20);       
});

//Mac Discount 20%

document.getElementById('apply_button').addEventListener('click',function(){
    getdiscount();
});


/*---------------------------------------------------------------
        Mac Javascript  End               
---------------------------------------------------------------*/