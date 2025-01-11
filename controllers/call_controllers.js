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

const Stats = async(req, res) => {
    try{
        const {coin} = await req.body;
        console.log("This is the requested currency", coin);

        const latestDocument = await Coininfo.findOne({}, {}, { sort: { createdAt: -1 } });

        if(!latestDocument)
        {
            return res.status(500).json({message: "No latest data found"});
        }

        // console.log("This is the latest data we got", latestDocument);

        const response = latestDocument[coin];
        console.log(response);

        return res.status(200).json({response});
    }catch(error)
    {
        console.log("This is error in catch block", error);

        return res.status(500).json({message:"Internal Server error"});
    }
};

const Deviation = async(req, res) => {
    try{
      const {coin} = await req.body;
      const number_list = await Coininfo.find({})
      .sort({ createdAt: -1 })
      .limit(100);

      if(number_list.length == 0)
      {
        return res.status(400).json({message: "No data found"});
      }

      let prices = [];

      for(let i = 0; i < number_list.length; i++)
      {
        prices.push(number_list[i][coin].current_price);
      }

      const mean = prices.reduce((sum, price) => sum + price, 0) / prices.length;
      const squaredDifferences = prices.map(price => Math.pow(price - mean, 2));
      const variance = squaredDifferences.reduce((sum, diff) => sum + diff, 0) / prices.length;
      const deviation = Math.sqrt(variance);
      console.log("This is latest hundred documents", deviation);
      return res.status(200).json({deviation});
    }
    catch(error)
    {
        console.log("This is the error in catch block", error);
        return res.status(500).json({message: "Internal server error"});
    }
};



export {Info, Stats, Deviation};