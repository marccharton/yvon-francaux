# Idees

* mise en place facebook, tweeter, ... ??  
* mise en place de flux rss pour les oeuvres et expositions.
* [editer les keyframes de l'animation du menu pour faire plus propre](http://www.alsacreations.com/tuto/lire/1299-timing-des-animations-et-des-transitions-en-css3.html)

# Nom de domaine

yvon.francaux.com  
www.yvon-francaux.com  ??  

# Tools

**Requirejs** pour le modulable côté client  
**Waypoints** pour déclenchement des zones.  
**Masonry**   pour galerie simple dans accueil.  
**Jquery**    parceque Jquery
**Pnotify**   pour la partie admin.  
**Symfony**   pour le projet global. (Administration, orm, sécurité,k expérience, évolutivité)  


# Informations Peintures

	{
	    "id" : "oeuvre-numero-1",
	    "title": "Oeuvre Numéro 1",
	    "description": "Représente tel objet dans tel contexte avec telle approche.",
	    "story" : "Je me baladais sur un lac et j'ai aperçu des oiseaux ça m'a fait pensé à un truc et j'ai peins cette toile.",
	    "painting-style": "impressionnisme",
	    "creation-date": "24-03-2015",
	    "sold": true,
	    "sale-date": "24-03-2015",
	    "dimensions": {
	        "x": 54,
	        "y": 54
	    },
	    "dimension-type": "carré",
	    "image-link": "C:/users/marc/images/oeuvre1.png",
	    "tags": [
	        "impressionisme",
	        "froid",
	        "objet représenté",
	        "vendu"
	    ]
	}

# Informations Expositions

	{
	    "id": "exposotion-numero-1",
	    "title": "Exposition Numéro 1",
	    "description": "Exposition des oeuvres d'yvon dans le hangar d'un ami avec une coupe de champagne",
	    "date": "24-03-2015",
	    "past": true,
	    "address": {
	        "number": "54",
	        "street": "rue de la chopinioule",
	        "street-2": "porte de gauche",
	        "street-3": "apres l'escalier au bout du couloir",
	        "postal-code": "92130",
	        "city": "Paris",
	        "country": "France"
	    },
	    "schedule": {
	        "begining": "20150324-193000",
	        "end": "20150324-230000"
	    },
	    "image-link": "C:/users/marc/images/exposition1.png",
	    "tags": [
	        "exposition",
	        "france",
	        "gratuit"
	    ],
	    "paintings": [
	        {
	            "id": "oeuvre-numero-1"
	        },
	        {
	            "id": "oeuvre-numero-2"
	        },
	        {
	            "id": "oeuvre-numero-3"
	        },
	        {
	            "id": "oeuvre-numero-4"
	        },
	        {
	            "id": "oeuvre-numero-5"
	        },
	        {
	            "id": "oeuvre-numero-6"
	        },
	        {
	            "id": "oeuvre-numero-7"
	        },
	        {
	            "id": "oeuvre-numero-8"
	        },
	        {
	            "id": "oeuvre-numero-9"
	        }
	    ]
	}