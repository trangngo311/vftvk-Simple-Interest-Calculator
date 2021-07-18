function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    var result = document.getElementById("result");

    result.innerText = `If you deposit ${principle},\nat an interest rate of ${rate}%.\nYou will
    receive an amount of ${principle + interest},\nin the year ${year}`;
}

function updateRate()
{
    var rateVal = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateVal+"%";
}
