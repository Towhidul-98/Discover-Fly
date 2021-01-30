function TicketNumber(category,change){
    let ticketAmount = document.getElementById(category+"TotalTicket").value;
    ticketAmount = parseInt(ticketAmount);
    ticketAmount+=change;
    if (ticketAmount >= 0){      // Condition Checking if the ticket amount is greater than 0 .
        document.getElementById(category+"TotalTicket").value = ticketAmount ;
    }
    displayTicketCost();  // total cost calculation
}

function displayTicketCost(){
    const subCost = ticketCost("firstClass") + ticketCost("economy");
    document.getElementById("Subtotal").innerText = subCost ;
    const tax = 0.1 * subCost ;
    document.getElementById("tax").innerText = tax;
    const totalCost = subCost + tax ;
    document.getElementById("totalCost").innerText = totalCost;
}

function ticketCost(category){
    const ticketQuantity = document.getElementById(category+"TotalTicket").value;
    let cost = 0;
    if(category == "firstClass"){
        cost = ticketQuantity * 150;
    }else{
        cost = ticketQuantity * 100;
    }
    return cost;
}

function bookNowTransitions(){
    document.getElementById("firstPart").style.display = 'none';
    document.getElementById("secondPart").style.display = 'block';
    // Table Value Is Organizing 
    const FirstCLassTicketAmount = document.getElementById("FirstCLassTicketAmount");
    FirstCLassTicketAmount.innerText=document.getElementById("firstClassTotalTicket").value;
    const EconomyTicketAmount = document.getElementById("EconomyTicketAmount");
    EconomyTicketAmount.innerText=document.getElementById("economyTotalTicket").value;  
}