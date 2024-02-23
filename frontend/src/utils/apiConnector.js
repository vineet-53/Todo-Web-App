
import axios from "axios"
export const apiConnector = async (method, url, body = {}, headers) => {
    try {
        const response = await axios({ 
            method,
            url,
            body,
            headers: headers ? headers : {},
        });
        return response;
    } catch (err) {
        throw new Error(err)
    }
}