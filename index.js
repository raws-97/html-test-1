$(document).ready(function(){

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const sec = date.getSeconds();
    const dateFormat = month+"/"+day+"/"+year+" "+hour+":"+minute+":"+sec;
    $('thn').html(year);

    var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbyrXkF0cpXr1IoZeEkTfAJTVXZ-3inSNXV1hn-2-F3BzDb5hd_g/exec'

        $('#submit-form').on('click', function(e) {
            $('#judulPel').val("CARA AMAN & MENGUNTUNGKAN DENGAN QRIS");
            $('#dateTime').val(dateFormat);

        e.preventDefault();
        var jqxhr = $.ajax({
            url: url,
            method: "GET",
            dataType: "json",
            data: $form.serialize()
        });

        $('#emailInput,#companyName,#userName,#phoneNum,#dateTime,#judulPel').val("");
        $("#alertBlock").css("display", "block");

        });

        $('#close').on('click',function(){
            location.reload();

        });
    
});