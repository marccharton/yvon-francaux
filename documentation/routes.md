# Routes 

------------------------------------------------------------------------------------------------------------
#### Accueil du site

	/home/
Try it : <http://www.yvon-francaux.com/home>

* Affiche la page d'accueil contenant un aperçu de toutes les parties principales.  

------------------------------------------------------------------------------------------------------------
#### Galerie

	/paintings/  
Try it : <http://www.yvon-francaux.com/home>

* Constitue la galerie du site.  
* Affiche les oeuvres avec un titre.  
* Possibilité de passer en mode édition directement depuis cette page.  

------------------------------------------------------------------------------------------------------------
#### Affichage d'une oeuvre 

	/paintings/:id  
Try it : <http://www.yvon-francaux.com/paintings/:id>

* Affiche une peinture (dont l'id est passé en paramètre) en grand avec toutes ses informations.  
* On retrouve l'intégralité des informations affichées de manière claire et esthétique sur cette page.  
* Possibilité de passer en mode édition directement depuis cette page.  

------------------------------------------------------------------------------------------------------------
#### Expositions

	/exhibitions/  
Try it : <http://www.yvon-francaux.com/exhibitions/>

* Affiche toutes les expositions qu'elle soit passées ou à venir.  
* Affiche un minimum d'informations avec une image.  
* Une expositions à venir se différenciées des expositions passées.  
* Possibilité de passer en mode édition directement depuis cette page.  

------------------------------------------------------------------------------------------------------------
#### Affichage d'une exposition

	/exhibitions/:id  
Try it : <http://www.yvon-francaux.com/exhibitions/:id>

* Affiche le détail d'une exposition.  
* On y trouvera l'ensemble des informations détaillées de l'exposition.  
* Possibilité de lier les oeuvres exposées durant l'exposition.  
* Créer des liens vers les oeuvres pour pouvoir direcement les consulter sur le site.  
* Liens vers d'autres expositions liées à celle-ci.  
* Possibilité de passer en mode édition directement depuis cette page.  

------------------------------------------------------------------------------------------------------------
#### Formulaire de contact

	/contact/  
Try it : <http://www.yvon-francaux.com/contact/>

* Contient le formulaire de contact permettant d'envoyer un mail à Yvon/Nicole/Moi.  

------------------------------------------------------------------------------------------------------------
#### Livre d'or

	/guestbook/  
Try it : <http://www.yvon-francaux.com/guestbook/>

* Affichage du livre d'or avec tous les messages.  
* Possibilité d'ajouter un mesage au livre d'or.    
* Possibilité de passer en mode édition directement depuis cette page.  

------------------------------------------------------------------------------------------------------------
#### Admin - Connection

	/admin/connect/  
Try it : <http://www.yvon-francaux.com/admin/connect/>

* Page de connexion au mode admin.  
* Présente un simple formulaire de connexion avec un login et mode passe.  

------------------------------------------------------------------------------------------------------------
#### Admin - Accueil

	/admin/home/  
Try it : <http://www.yvon-francaux.com/admin/home/>

* Accueil du mode admin qui présente une légère page récapitulative du contenu du site.  
* Présente un menu permettant de naviguer dans les différentes parties administrables du site.  

------------------------------------------------------------------------------------------------------------
#### Admin - Peintures

	/admin/paintings/  
Try it : <http://www.yvon-francaux.com/admin/paintings/>

* Page d'administrations des peintures.  
* Affiche la liste des différentes peintures présentes sur le site et permet de les modifier/supprimer ou d'en ajouter.  
* La fontion de modification nous envoie vers la page d'administration d'une peinture.  

------------------------------------------------------------------------------------------------------------
#### Admin - Une Peinture

	/admin/paintings/:id  
Try it : <http://www.yvon-francaux.com/admin/paintings/:id>

* Page d'administration d'une peinture, listant les informations de manière à ce qu'elles soient éditables.  
* Il est possible de supprimer la peinture, éditer les champs etc.  


------------------------------------------------------------------------------------------------------------
#### Admin - Expositions

	/admin/exhibitions/  
Try it : <http://www.yvon-francaux.com/admin/exhibitions/>

* Page d'administrations des expositions.  
* Affiche la liste des différentes expositions présentes sur le site et permet de les modifier/supprimer ou d'en ajouter.  
* La fontion de modification nous envoie vers la page d'administration d'une exposition.    

------------------------------------------------------------------------------------------------------------
#### Admin - Une Exposition

	/admin/exhibitions/:id  
Try it : <http://www.yvon-francaux.com/admin/exhibitions/:id>

* Page d'administration d'une exposition, listant les informations de manière à ce qu'elles soient éditables.  
Il est possible de supprimer la exposition, éditer les champs etc. 

------------------------------------------------------------------------------------------------------------
#### Admin - Livre d'or

	/admin/guestbook/  
Try it : <http://www.yvon-francaux.com/admin/guestbook/>

* Page d'administration du livre d'or.  
* Affiche la liste des messages contenus dans le livre d'or.  
* Permet de supprimer un message de celui-ci, au cas où le message serait inconvenant.  

