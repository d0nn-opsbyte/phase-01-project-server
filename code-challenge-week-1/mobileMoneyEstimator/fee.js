//Mobile fee estimator
function calculate(amount) {
    const input = prompt("How much are you sending?(ksh):");
    const amountToSend = Number(input);

    if(isNaN(amountToSend) || amountToSend <= 0) {
        console.error("Please enter a valid number.");
    return;
}
     if (amountToSend <=0) {
    console.error("Input should be more than 0");
    return;
};

   let transactionFee = amountToSend *0.015;

   if(transactionFee < 10) {
    transactionFee =10;
   }else if (transactionFee > 70) {
    transactionFee = 70;
   }
   transactionFee = Math.round(transactionFee * 100) / 100;
   const totalAmount =amountToSend +transactionFee;
   console.log("Sending ksh ${amountToSend}");
   console.log("transactionFee:ksh ${transactionFee}");
   console.log("Total amount to send: ksh ${totalAmount}");
   console.log("Money sent securely");
}    

calculateFee();
 