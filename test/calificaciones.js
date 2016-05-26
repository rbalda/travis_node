/**
 * Created by rbalda on 26/05/16.
 */
var expect = require("chai").expect;
var promedios = require("../app/calificaciones");
var request = require("request");
//hello world
describe("Prueba de Programa",function () {
    describe("Prueba de Promedios",function () {
        it("probando promedios",function () {
            var promedio1 = promedios.calculoPromedios(5,6,8);
            var promedio2 = promedios.calculoPromedios(5,8,6);
            var promedio3 = promedios.calculoPromedios(8,6,5);

            expect(promedio1).to.deep.equal(7);
            expect(promedio2).to.deep.equal(7);
            expect(promedio3).to.deep.equal(7);
        });

    });
    describe("Prueba de Aprobado o No",function () {
        it("probando si paso",function () {
            var aprobado = promedios.estaAprobado(6.1);
            var desaprobado = promedios.estaAprobado(5.9);

            expect(aprobado).to.deep.equal(true);
            expect(desaprobado).to.deep.equal(false);
        });
    });
    describe("Prueba enviar promedios",function () {
        it("probando envio",function (done) {
            var url = "http://localhost:3000/promedios/";
            request.post(url,
                {form:{c1:'50',c2:'60',c3:'70'}},function (error,response,body) {
                expect(response.statusCode).to.equal(200);

                    expect(body).to.contains("65");
                    done();
            });

        });
        
    });
});