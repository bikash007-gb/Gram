
const request = require('supertest')
const app = require('../app')
let id
test('create report',async done=>{
    await request(app).post('/reports')
    .send({
        userId:"user-50",
    marketId:"market-1",
    marketName:"Vashi Navi Mumbai",
    cmdtyID:"cmdty-1",
    marketType:"Mandi",
    cmdtyName:"potato",
    priceUnit:"Quintal",
    convFctr:60,
    price:2190
    }).expect(201).then((response)=>{
        id=response.body.reportId
    })
    done()
})

test('get report',async done=>{
await request(app).get(`/reports/${id}`)
.expect(200).then((response)=>{
    expect(response.body.report.marketId).toBe('market-1')
    expect(response.body.report.cmdtyID).toBe('cmdty-1')
})
done()
})