const mongoose = require('mongoose');

const reportSchema= new mongoose.Schema({
    
    users:[{type: String}],
    marketId:{ type:String},
    marketName:{ 
        type:String,
    },
    cmdtyID:{ type:String},
    marketType:{ type:String},
    cmdtyName:{ type:String},
    priceUnit:{ type:String},
    convFctr:{ type:Number},
    price:{type:Number}
},{ timestamps: true })

reportSchema.pre(/^find/, function(next) {
    this.populate({
      path: 'userId',
      select:
        '-__v '
    });
    next();
  });

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;