

exports.OTPTemplate = (otp) => { 
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>TODO FULL STACK SIGNUP</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
            html { 
                box-sizing: border-box;
            }
            body { 
                margin: 0;
                padding: 0;
    
            }
            .otp-template { 
                background: #845EC2;
                width:100vw ;
                height: 100vh;
            }
        </style>
    </head>
    <body >
        <section class="px-10 text-center flex justify-center flex-col items-center otp-template">
            <h2 class="w-full text-[#FBEAFF] text-3xl font-extrabold py-8">TODO FULL STACK APP</h2>
            <p class="w-full text-[#FBEAFF] text-2xl font-medium">Thanks for Signing Our TODO APP 🙏</p>
            <p class="text-[#FBEAFF] text-bold py-2">Your OTP is : ${otp}</p>
        </section>
    </body>
    </html>`
}