const bcrypt  = require('bcrypt')
exports.encrypt = async (textTohash , saltRounds ) => { 
    try { 
        const hashText = await bcrypt.hash(textTohash, saltRounds);
        return hashText;
    }catch(err){ 
        throw new Error("Error Encrypting Password" , err.message)
    }
}
exports.compare  = async (textToCompare , hashText) => { 
    try { 
        const result = await bcrypt.compare(textToCompare, hashText);
        if(!result) { 
            throw new Error("Password Not Matched"); 
        }
    }catch(err) { 
        throw new Error("Error Comparing Password"); 
    }
}