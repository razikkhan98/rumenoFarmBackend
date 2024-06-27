import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  amount: {
    type: String,
    
  },
  transactionID: {
    type: String,
    required: true
  },
  paymode: {
    type: String,
  
  },
  cod_payment: {
    type: String
    
  },
  image:{
    data:Buffer,
    contentType:String
  }
});

export default mongoose.model('Transaction', UserSchema);
