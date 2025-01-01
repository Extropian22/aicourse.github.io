document.addEventListener('DOMContentLoaded', function(){
    // code animation
    const codeBlock = document.querySelector('.code-block');
    if(codeBlock){
      codeBlock.classList.add('animate')
      const codeLines = codeBlock.querySelectorAll('.code-line');
        codeLines.forEach((line, index) =>{
          setTimeout(() => {
            line.style.opacity = '1';
           line.style.transform = 'translateY(0)';

          }, index * 250);
       });
    }
   // Get elements
    const verifyPaymentButton = document.getElementById('verify-payment');
    const downloadSection = document.getElementById('download-section');
    const paymentForm = document.getElementById('payment-form');
     // Add event listener for verify payment
    paymentForm.addEventListener('submit', function(event){
      event.preventDefault();
        downloadSection.style.display = 'block';
        paymentForm.style.display = 'none';
     const emailInput = document.getElementById('receipt-email');
        const email = emailInput.value
        console.log('Email receipt sent to:', email);
        alert('Please check your email for receipt!');
    });


  });
