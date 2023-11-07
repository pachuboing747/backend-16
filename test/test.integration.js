const chai = require ("chai")
const supertest = require ("supertest")

const expect = chai.expect
const requestor = supertest ("http://localhost:8080")

describe ("integration", () =>{
    describe ("product", () => {

        let producto
       
        it("product - /POST", async ()=>{
            const product = {
                title: "Camiseta titular Seleccion Argentina",
                description:"Vestite como un campeón. La insignia de campeón del Mundo y la tercera estrella sobre el escudo confirman una victoria memorable",
                price: 4200,
                stock: 3,
                thumbnail: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9d96391ff8e147a48e9aaf7300e7cf3d_9366/Camiseta_titular_Argentina_3_estrellas_2022_Blanco_IB3593_01_laydown.jpg",
            }

            const {statusCode, ok, _body: {payload}} = await requestor.post("/products").send(product )

            producto = payload._id
            expect(payload.adopted).to.be.false
            expect(statusCode).to.be.equal(200)

            console.log(producto)
        })

        it("product - /GET", async ()=>{
            const { _body: { status, payload }} = await requestor.get('/products')

            expect(status).to.be.equal('success')
            expect(Array.isArray(payload)).to.be.true
        })

        it("product - /PUT", ()=>{})
        it("product - /DELETE", ()=>{})
    })

    describe ("cart", () => {
        it("cart - /GET", ()=>{})
        it("cart - /POST", ()=>{})
        it("cart - /PUT", ()=>{})
        it("cart - /DELETE", ()=>{})
    })

})