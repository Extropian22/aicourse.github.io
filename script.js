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

  });
