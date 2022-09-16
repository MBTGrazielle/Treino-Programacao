function isencaoImposto(aposentada, deficiente, totalRendimentos) {
    if (aposentada == true || deficiente == true) {
        console.log('Você está isenta!');
    } else if (totalRendimentos >= 28559) {
        console.log('Pega leão!');
    } else {
        console.log('Vaza leão!')
    }

}
isencaoImposto(false, false, 150000000)

