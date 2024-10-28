# Instructions pour lancer le projet

> A exécuter une fois le projet cloné ou copié en restant à la racine du répertoire, ce projet peut se lancer de deux façons :

> > En utilisant les commandes docker

- Construire une image avec la commande docker image build -t meijink/evaldocker .
- Lancer un conteneur avec la commande docker run -d -p 8088:3000 --name viteapp meijink/evaldocker
- Observer que le projet fonctionne en saisissant http://localhost:8088 dans le navigateur

> > En utilisant docker compose pour automatiser le déploiement

- Utiliser la commande docker compose up ou docker compose up -d (pour lancer en arrière plan)
- Observer que le projet fonctionne en saisissant http://localhost:8088 dans le navigateur
