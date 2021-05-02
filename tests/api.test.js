
const request = require('supertest')
const app = require('../app')

test('create report',async done=>{
    await request(app).post('/report')
    .send({
        userId:"user-10",
    marketId:"market-1",
    marketName:"Vashi Navi Mumbai",
    cmdtyID:"cmdty-1",
    marketType:"Mandi",
    cmdtyName:"potato",
    priceUnit:"Quintal",
    convFctr:60,
    price:2290
    }).expect(201)
    done()
})

test('get report',async done=>{
await request(app).get('/report/608ebbae6d1c1e0904714a8e')
.expect(200).then((response)=>{
    expect(response.body.report.marketId).toBe('market-1')
})
done()
})