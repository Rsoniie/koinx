import axios from "axios";
import Coininfo from "../models/info_model.js";


const Info = async(req, res) => 
{

    try{

    const curr_api_bitcoin = `${process.env.API}/bitcoin`;
    console.log("This is current api of bitcoin", curr_api_bitcoin);
    const response_bitcoin = await axios.get(curr_api_bitcoin);
    const current_price_bitcoin = response_bitcoin.data.market_data.current_price.usd;
    const market_cap_bitcoin = response_bitcoin.data.market_data.market_cap.usd;
    const Change24hrpercentage_bitcoin = response_bitcoin.data.market_data.price_change_percentage_24h;



    const curr_api_matic_network = `${process.env.API}/matic-network`;
    console.log("This is an api of matic_network", curr_api_matic_network);
    const response_matic_network = await axios.get(curr_api_matic_network);
    const current_price_matic_network = response_matic_network.data.market_data.current_price.usd;
    const market_cap_matic_network = response_matic_network.data.market_data.market_cap.usd;
    const Change24hrpercentage_matic_network = response_matic_network.data.market_data.price_change_percentage_24h;

    const curr_api_ethereum = `${process.env.API}/ethereum`;
    console.log("This is an api of matic_network", curr_api_ethereum);
    const response_ethereum= await axios.get(curr_api_ethereum);
    const current_price_ethereum = response_ethereum.data.market_data.current_price.usd;
    const market_cap_ethereum = response_ethereum.data.market_data.market_cap.usd;
    const Change24hrpercentage_ethereum = response_ethereum.data.market_data.price_change_percentage_24h;


    console.log("This is information for bitcoin", current_price_bitcoin, market_cap_bitcoin, Change24hrpercentage_bitcoin);
    console.log("This is data for matic_network", current_price_matic_network, market_cap_matic_network, Change24hrpercentage_matic_network);
    console.log("This is for ethereum", current_price_ethereum, market_cap_ethereum, Change24hrpercentage_ethereum);



    const Information = new Coininfo({
        bitcoin:{
            current_price: current_price_bitcoin,
            market_cap: market_cap_bitcoin,
            Change24hr: Change24hrpercentage_bitcoin
        },

        matic_network: {
            current_price: current_price_matic_network,
            market_cap: market_cap_matic_network,
            Change24hr: Change24hrpercentage_matic_network
        },

        ethereum: {
            current_price: current_price_ethereum,
            market_cap: market_cap_ethereum,
            Change24hr: Change24hrpercentage_ethereum
        }

    });

    await Information.save();    
    return res.status(200).json({message: "Saved to Mongo"});
} catch(error)
{
    console.log("This is catch error", error);
    return res.status(500).json({message: "Internal Server error"});
}
};








export {Info};