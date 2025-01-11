
import mongoose from "mongoose";
const { Schema } = mongoose;

// const CoininfoSchema = new Schema({


// bitcoin: {
//   current_price: {
//     type: Number, 
//     required: true, 
//   },
//   market_cap: {
//     type: Number,
//     required: true, 
//   },
//    Change24hr: {
//     type: Number,
//     required: true,
//   },
// },

// matic_network :{
// current_price: {
//    type: Number, 
//     required: true, 
// },
//    market_cap: {
//     type: Number,
//     required: true, 
//     },
//     Change24hr: {
//     type: Number,
//     required: true,
// },
// },

// ethereum :{
//     current_price: {
//        type: Number, 
//         required: true, 
//     },
//        market_cap: {
//         type: Number,
//         required: true, 
//         },
//         Change24hr: {
//         type: Number,
//         required: true,
//     },
// },
// }, { timestamps: true }); 

// const Coininfo = mongoose.model("Coininfo", CoininfoSchema);

// export default Coininfo;


const CoininfoSchema = new Schema({
    bitcoin: {
      current_price: { type: Number, required: true },
      market_cap: { type: Number, required: true },
      Change24hr: { type: Number, required: true },
    },
    matic_network: {
      current_price: { type: Number, required: true },
      market_cap: { type: Number, required: true },
      Change24hr: { type: Number, required: true },
    },
    ethereum: {
      current_price: { type: Number, required: true },
      market_cap: { type: Number, required: true },
      Change24hr: { type: Number, required: true },
    },
  }, { timestamps: true });
  
  const Coininfo = mongoose.model('Coininfo', CoininfoSchema);
  export default Coininfo;
  
