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
     const gcashButton = document.getElementById('gcash-button');
    const gcashDetails = document.getElementById('gcash-details');
  const contactForm = document.getElementById('contact-form');

    // Add event listener for verify payment
    paymentForm.addEventListener('submit', function(event){
      event.preventDefault();
        downloadSection.style.display = 'block';
        paymentForm.style.display = 'none';


      const emailInput = document.getElementById('receipt-email');
        const email = emailInput.value

        // Formspree submission
         const dataUrl = 'data.php';

      fetch(dataUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'

            },
           body: `receipt-email=${email}`
        }).then(response => {
             if (!response.ok) {
          throw new Error('Network response was not ok');
         }
          return response.json()
        }).then(data => {
            if(data.success){
                console.log('Payment verification email sent to data.php.');
                 alert('Payment Verified, click the "Claim PDF" button.');
            } else{
                console.error('Error sending verification data to data.php.', data.message);
                  alert('Error verifying payment.');
            }
        }).catch(error => {
             console.error('Error sending verification data to data.php',error);
              alert('Error verifying payment.');
        });

    });
    // Add event listener for GCash button
    gcashButton.addEventListener('click', function() {
            gcashDetails.style.display = 'block';
      });
     //Add listener for contact form.
        contactForm.addEventListener('submit', function(event){
      event.preventDefault();

       const formData = new FormData(contactForm);

           const formValues = Object.fromEntries(formData.entries());


         // Data.php submission
        const dataUrl = 'data.php';

      fetch(dataUrl, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'

            },
             body: new URLSearchParams(formValues)
        }).then(response => {
             if (!response.ok) {
          throw new Error('Network response was not ok');
         }
          return response.json()
        }).then(data => {
            if(data.success){
                 alert('Message sent! We will respond to you shortly.');
                  contactForm.reset();
            } else{
                 console.error('Error sending contact data to data.php',data.message);
                  alert('Error sending message, please try again.');
            }
        }).catch(error => {
             console.error('Error sending contact data to data.php',error);
              alert('Error sending message, please try again.');
        });
        });


  });
