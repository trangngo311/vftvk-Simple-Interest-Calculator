function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = parseInt(document.getElementById("years").value);
    var interest = principal * years * rate / 100;
    var amount = (principal + interest).toFixed(2);
    var year = new Date().getFullYear()+parseInt(years);
    var result = document.getElementById("result");

    result.innerHTML = "If you deposit <span class='highlight'>" + principal +"</span>,\<br\>at an interest rate of <span class='highlight'>"+rate+
        "</span>%\<br\>You will receive an amount of <span class='highlight'>"+amount+"</span>,\<br\>in the year <span class='highlight'>"+year+"</span>\<br\>";
}

function updateRate()
{
    var rateVal = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateVal+"%";
}
