var maxPic = 8;
var count = 1;
var path_galerie = 0;

// fonctions de la galerie

// fonction qui met une galerie en fonction du mois du navigateur du visiteur
//vérifie le mois en cours, affecte une valeur a path
//comme il n'y a que 8 galeries, la boucle tourne court

function set_date_courante () {
date_courante = new Date;
date_courante = date_courante.getMonth(date_courante);
switch (date_courante) {
	case 0 :
	path_galerie = 1;
	var maxPic = 8;
	break;
	case 1 :
	path_galerie = 2;
	var maxPic = 8;
	break;
	case 2 :
	path_galerie = 3;
	var maxPic = 9;
	break;
	case 3 :
	path_galerie = 4;
	var maxPic = 9;
	break;
	case 4 :
	path_galerie = 5;
	var maxPic = 8;
	break;
	case 5 :
	path_galerie = 6;
	var maxPic = 8;
	break;
	case 6 :
	path_galerie = 7;
	var maxPic = 8;
	break;
	case 7 :
	path_galerie = 8;
	var maxPic = 8;
	break;
	case 8 :
	path_galerie = 1;
	var maxPic = 8;
	break;
	case 9 :
	path_galerie = 2;
	var maxPic = 8;
	break;
	case 10 :
	path_galerie = 3;
	var maxPic = 9;
	break;
	case 11 :
	path_galerie = 4;
	var maxPic = 9;
	break;
	}
document.texte_tab.src=("gfx/" + path_galerie + "/text/1.gif");
document.p.src=("gfx/" + path_galerie + "/preview/1.jpg");
}

function next() {
count++;
if (count > maxPic) {
count = 1;
	}
document.texte_tab.src=("gfx/" + path_galerie + "/text/" + count + ".gif");	
document.p.src=loading.src;
document.p.src=("gfx/" + path_galerie + "/preview/" + count + ".jpg");
}

function back() {
count--;
if (count == 0) {
count = maxPic;
	}
document.texte_tab.src=("gfx/" + path_galerie + "/text/" + count + ".gif");	
document.p.src=loading.src;
document.p.src=("gfx/" + path_galerie + "/preview/" + count + ".jpg");
}


function zoomx2() {
var zx2;
zx2=window.open("","zx2","status=no,resizable=yes,scrollbars=yes");
zx2.document.bgColor="000000";
zx2.location.href=("gfx/" + path_galerie + "/zoomx2/" + count + ".jpg");
zx2.document.bgColor="000000";
}

function zoomx4() {
var zx4;
zx2=window.open("","zx4","status=no,scrollbars=yes,resizable=yes");
zx2.document.bgColor="000000";
zx2.location.href=("gfx/" + path_galerie + "/huge/" + count + ".jpg");
zx2.document.bgColor="000000";
}