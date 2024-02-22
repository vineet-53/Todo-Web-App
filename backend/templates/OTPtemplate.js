

exports.OTPTemplate = (otp) => { 
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title>
     <style>
      .template { 
        height : 100%;
        font-family : sans-serif;
      }
      .title { 
      font-size : 2rem;
      }
      .sub-title { 
      font-size : 1.5rem;
       font-weight : 500;
      }
      
     </style>
     </head>
    
    <body>
      <section class ="template" >
        <div>
         <h1 class="title">
          *********** TODO FULL STACK APP ***********
         </h1>
        </div>
       <div>
        <p class ="sub-title">Here is the Otp For Signup : ${otp} </p>
       </div>
      </section>
     </body>
    
    </html>`
}