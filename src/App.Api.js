import axios from "axios";

export const initializeDefaultsAction = async () => {
const uri = 'https://frontiercodingtests.azurewebsites.net/api/accounts/getall';
    const response = await axios.get(uri);
    console.log("api call")
    return response.data;

}