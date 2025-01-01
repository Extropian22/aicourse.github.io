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
       const claimPdfButton = document.getElementById('claim-pdf');
          const pdfIframe = document.getElementById('pdf-iframe');

    // Add event listener for verify payment
    paymentForm.addEventListener('submit', function(event){
      event.preventDefault();
        downloadSection.style.display = 'block';
        paymentForm.style.display = 'none';

      const emailInput = document.getElementById('receipt-email');
        const email = emailInput.value

        // Formspree submission
        const formspreeUrl = 'https://formspree.io/f/xwpkzdgq';
      fetch(formspreeUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                 'Accept': 'application/json'

            },
            body: JSON.stringify({ email: email}),
        }).then(response => {
            if (response.ok) {
                console.log('Payment verification email sent to formspree.');
                 alert('Payment Verified, click the "Claim PDF" button.');

            } else {
                console.error('Error sending verification data to Formspree.');
                  alert('Error verifying payment.');
            }
        }).catch(error => {
             console.error('Error sending verification data to Formspree',error);
              alert('Error verifying payment.');
        });

    });
    });
