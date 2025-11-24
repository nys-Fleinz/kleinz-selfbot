
<div align="center">

  <img src="https://media.discordapp.net/attachments/1136716351235436657/1442634351916613853/banner.png?ex=69262570&is=6924d3f0&hm=c21fa843bd5521e38dfdca5a7a4e206f204838314307683843b30520861601c3&=&format=webp&quality=lossless" alt="Banner" width="100%" />

  <h1>kleinz-selfbot</h1>
  <p>Selfbot Discord basé sur <code>discord.js-selfbot-v13</code> avec commandes utilitaires et vocales.</p>

  <p>
    <img alt="node version" src="https://img.shields.io/badge/node-%3E%3D%2016.13.0-339933?logo=node.js&logoColor=white" />
    <img alt="license" src="https://img.shields.io/badge/license-ISC-blue" />
    <img alt="status" src="https://img.shields.io/badge/status-active-success" />
  </p>

  <sub>Attention: les selfbots sont à l'encontre aux <a href="https://discord.com/terms">ToS de Discord</a>.</sub>
</div>

---

### Sommaire

- [Présentation rapide](#présentation-rapide)
- [Prérequis](#prérequis)
- [Installation des dépendances](#installation-des-dépendances)
- [Configuration](#configuration)
- [Lancer le SelfBot](#lancer-le-selfbot)
- [Exemples de commandes](#exemples-de-commandes)
- [Dépannage (FAQ rapide)](#dépannage-faq-rapide)
- [Licence](#licence)

---

### Présentation rapide

Ce projet est un selfbot pour Discord écrit en Node.js. Il charge automatiquement les commandes et événements, inclut des commandes utilitaires comme <code>help</code>, <code>ping</code>, et des commandes vocales telles que <code>call</code>, <code>disconnect</code> et <code>movespam</code>.


### Prérequis

- Node.js: minimum requis <strong>16.13.0</strong> (LTS) — recommandé: <strong>18.x</strong> ou <strong>20.x</strong>
- Un compte Discord avec votre token.

Vérifier vos versions :

```bash
node -v
npm -v
````

### Installation des dépendances

1)  Cloner ou télécharger ce dépôt [ICI](https://github.com/nys-Fleinz/kleinz-selfbot/releases/latest)
2)  Installer les dépendances (avec npm):

<!-- end list -->

```bash
npm install
```

Les dépendances :

- <code>discord.js-selfbot-v13</code>
- <code>colors</code>, <code>glob</code>

### Configuration

Les réglages se font dans <code>settings/config.json</code>.

```json
{
  "account": {
    "TOKEN": "VOTRE_TOKEN_ICI",
    "prefix": "."
  }
}
```

### Lancer le SelfBot

Plusieurs options sont possibles :

```bash
# Recommandé: script fourni
start.bat

# Option 1: node direct
node index.js

# Option 2: via script npm (exécute index.js)
npm run
```

Si la connexion réussit, vous verrez le message « Loging into account... » puis l’authentification.

### Exemples de commandes

Le préfixe par défaut est défini dans <code>settings/config.json</code> (par défaut: <code>.</code>).

- **Utilitaires**

    - <code>.help</code>
        - Exemple: 
            ```
          .help
          .help ping
            ```
    - <code>.ban</code>
        - Exemple: `.ban Kleinz`

- **Vocal**

    - <code>.call \<userId\></code> — Tente d’appeler un utilisateur.
    - <code>.disconnect</code> — Raccroche / quitte.
    - <code>.movespam \<channelId1\> \<channelId2\> [count]</code> — Bouge en boucle entre deux salons vocaux.
        - Exemples:
          ```
          .call 123456789012345678
          .disconnect
          .move kleinz here
          ```

### Dépannage (FAQ rapide)

- **Erreurs d’import de modules**

    - Assurez-vous d’avoir exécuté <code>npm install</code> dans le dossier du projet.

- **Versions de Node incompatibles**

    - Mettez à jour Node en 18.x LTS ou supérieur. <a href="https://nodejs.org/">nodejs.org</a>

- **Token invalide**

    - Vérifiez <code>settings/config.json</code> et que le token n’a pas été révoqué. Évitez de le partager.

### Licence

ISC. Voir le fichier <code>package.json</code> ou <code>LICENSE</code>.