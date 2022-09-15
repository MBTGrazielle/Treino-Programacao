
function casosCovid(po, x, t) {
    let p = po * x ** (t / 7);
    console.log(p.toFixed(2));
}

casosCovid(1000, 4, 100);