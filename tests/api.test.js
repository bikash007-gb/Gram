// describe('Sample Test', () => {
//     it('should test that true === true', () => {
//       expect(true).toBe(true)
//     })
//   })

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
await request(app).get('/report/608ee6373bc85f4fdc6918f6')
.expect(200)
done()
})