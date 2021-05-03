const Report = require('../model/Report')


// @route    POST /report
// @desc     Generate a report
exports.report= async(req, res) =>{
    let {userId,marketId,marketName, cmdtyID,marketType,cmdtyName, priceUnit,convFctr,price}=req.body
    try {
        
    let report = await Report.findOne({$and:[{marketId},{cmdtyID},]})
    
    if(!report){
       
        let users=[]
        users.push(userId)
        if(priceUnit!=="kg"){
            priceUnit="kg"
        }
        price=(price/convFctr).toFixed(2)
        report = new Report({
            marketId,marketName, cmdtyID,marketType,cmdtyName, priceUnit,price,
            users
        })
        
    }
    else{
        report.users.push(userId)
        const p=price/convFctr
        report.price=((report.price+p)/report.users.length).toFixed(2)
    }
    await report.save()

    res.status(201).json({
        status:"success",
        reportId:report.id
    })
    } catch (error) {
        console.error(error)
        res.json("wrong ")
    }
    
}

// @route    GET report/:id
// @desc     Get report by ID
exports.getReport = async(req,res)=>{
    try {
        const report = await Report.findOne({_id:req.params.id}).select('-__v')
    res.status(200).json({
        status:"success",
        report
    })
    } catch (error) {
        console.error(error)
        res.json("wrong ")
    }
    
}