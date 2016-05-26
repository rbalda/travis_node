/**
 * Created by rbalda on 26/05/16.
 */
exports.calculoPromedios = function (p1,p2,p3) {
    var calif = [p1,p2,p3]
    calif.sort(function (a,b) {
        return b-a;
    })
    var max1 = calif[0];
    var max2 = calif[1];
    return (max1+max2)/2;
};

exports.estaAprobado= function (promedio) {
    return promedio >= 6;
}