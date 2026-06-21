// ══════════════════════════════════════════════════════════════
//  DATA · PAC BLOC-1 · Manager la stratégie globale d'une organisation
//  Opération Northgate : pivoter ou périr · 14 mars 2025
//  Schéma : mailbox[] · dossiers[] · notes[] · guide · finder · calendar · slack · trash.egg
//  Contenu narratif complet (univers Lumio Health · Opération Northgate).
//  ⚠️  Les placeholders {{PRENOM}} {{NOM}} {{EMAIL_ETUDIANT}} sont substitués à la connexion.
// ══════════════════════════════════════════════════════════════

window.LUMIO_DATA = {
  "student": {
    "name": "{{PRENOM}} {{NOM}}",
    "role": "Consultant·e externe",
    "email": "{{EMAIL_ETUDIANT}}",
    "company": "Indépendant·e",
    "initial": "?"
  },
  "mailbox": [
    {
      "id": "DOC-01",
      "from": "Jakob Rein (Northgate)",
      "fromEmail": "jakob.rein@lumio-health.com",
      "subject": "Offre de partenariat exclusif Northgate × Lumio Health — fenêtre de décision 21 jours",
      "date": "14 mars 2025",
      "preview": "Northgate formalise une offre exclusive 11 pays, 4 200 unités, avec une échéance de réponse au 3 avril — et un concurrent allemand déjà en lice.",
      "body": "Monsieur Marczak,\n\nFaisant suite à nos échanges du 10 mars, je vous transmets ci-dessous les conditions formelles de l'offre de distribution exclusive que Northgate Capital souhaite proposer à Lumio Health.\n\nNorthgate s'engage à référencer vos wearables auprès de l'ensemble de son réseau : 47 cliniques partenaires et 6 groupes d'assurance santé, couvrant 11 pays européens (FR, DE, NL, BE, CH, AT, SE, DK, NO, FI, ES). Volume minimum contractuel : 4 200 unités sur 18 mois, avec une clause de révision à la hausse à 12 mois selon les données d'activation terrain. L'exclusivité de distribution B2B sur ce périmètre géographique est une condition non négociable de l'accord.\n\nEn contrepartie, Northgate attend de Lumio : (1) une refonte du positionnement produit adaptée aux standards médico-réglementaires de chaque pays couvert, (2) un plan de communication dédié au réseau clinique et assuranciel, (3) une capacité de livraison certifiée dès le T3 2025.\n\nJe vous informe, par souci de transparence, que nous menons en parallèle une due diligence avec un acteur allemand sur un périmètre comparable. Notre comité de sélection se réunit le 4 avril. Votre réponse formelle — business plan et feuille de route opérationnelle inclus — devra nous parvenir au plus tard le 3 avril 2025.\n\nPassé ce délai, nous ne serons plus en mesure de maintenir cette offre.\n\nCordialement,\n\nJakob Rein\nPartner — Northgate Capital\njakob.rein@northgate-capital.eu\n+49 89 2150 7743",
      "avatar": "JR",
      "avatarColor": "#134547",
      "unread": true,
      "flagged": true,
      "tags": [
        "Mission"
      ]
    },
    {
      "id": "DOC-08",
      "from": "Camille Ott → Théo Marczak",
      "fromEmail": "camille.ott@lumio-health.com",
      "subject": "⚠️ Jakob Rein vient d'envoyer un second email — concurrent allemand a déposé son dossier hier",
      "date": "14 mars 2025",
      "preview": "Meditrek a déposé son dossier hier — Jakob fixe le 21 mars comme deadline ferme pour notre feuille de route opérationnelle.",
      "body": "Théo,\n\nJakob vient de m'écrire à 11h43. Ton à changer : plus sec que d'habitude.\n\nL'info clé : Meditrek (Berlin) a soumis leur business plan complet à Northgate hier matin. Jakob ne dit pas qu'on est éliminés, mais il précise que leur comité d'investissement se réunit le 28 mars. Ce n'est pas une coïncidence qu'il nous en informe maintenant.\n\nSon email se termine par : « J'attends votre feuille de route opérationnelle et votre planning de déploiement avant le 21. Passé cette date, je ne peux plus garantir la fenêtre. »\n\nOn a donc 7 jours, pas 14. Je te transfère son email en DM — il y a un passage sur les exigences de couverture des 11 pays que Yassine n'a pas encore intégré dans les contenus d'activation. Ça va nécessiter une conversation avec lui, et vite.\n\nMon avis terrain : Jakob teste notre réactivité autant que notre plan. Si on répond dans les 48h avec quelque chose de structuré, on reprend l'avantage. Si on laisse passer le week-end sans signal, c'est Berlin.\n\nDis-moi si tu veux qu'on s'appelle ce soir.\n\nCamille",
      "avatar": "CO",
      "avatarColor": "#1b4f8a",
      "unread": false,
      "flagged": false
    }
  ],
  "dossiers": [
    {
      "id": "DOC-02",
      "type": "rich",
      "tab": "ÉTUDE",
      "title": "Marché européen des wearables B2B santé au travail 2024-2027 — Synthèse exécutive",
      "accent": "#1b4f8a",
      "runningHead": "ÉTUDE DE MARCHÉ",
      "pages": [
        {
          "kicker": "ÉTUDE DE MARCHÉ CONFIDENTIELLE",
          "title": "Marché européen des wearables B2B santé au travail 2024-2027",
          "byline": "Cabinet Santé & Marchés · Commandé par Théo Marczak, CEO Lumio Health · 14 mars 2025",
          "blocks": [
            {
              "type": "p",
              "text": "La présente synthèse a été produite à la demande de Lumio Health dans le cadre d'une décision stratégique à délai contraint. Elle s'appuie sur des données agrégées issues de sources sectorielles (HIMSS Europe 2024, Frost & Sullivan Q4 2024, rapport DREES/ANSES décembre 2024) et d'entretiens conduits auprès de 14 acheteurs institutionnels en France, Allemagne, Pays-Bas et Suède entre janvier et février 2025."
            },
            {
              "type": "h2",
              "text": "Dynamiques macro-sectorielles : un marché en phase d'accélération"
            },
            {
              "type": "p",
              "text": "Le marché européen des wearables dédiés à la santé au travail (suivi du stress, charge physiologique, qualité de sommeil en contexte professionnel) est estimé à 1,4 milliard d'euros en 2024. Les projections pour 2027 tablent sur 3,1 milliards d'euros, soit un CAGR de 30,4 %. Trois facteurs structurels alimentent cette croissance : (1) l'entrée en vigueur progressive des obligations de prévention des risques psychosociaux (RPS) dans 7 pays membres de l'UE depuis 2023 ; (2) l'intégration des dispositifs de bien-être dans les contrats de complémentaire santé collective, portée par la directive 2023/970 sur la transparence salariale ; (3) la montée en puissance des programmes ESG intégrant des indicateurs de santé salariale, désormais exigés par 38 % des grands donneurs d'ordre européens dans leurs cahiers des charges fournisseurs (source : Deloitte European Workforce Survey, 2024)."
            },
            {
              "type": "callout",
              "text": "CAGR 2024-2027 : +30,4 % — Marché européen estimé à 3,1 Mds € en 2027. Moteur principal : réglementation RPS et intégration santé dans les contrats d'assurance collective."
            },
            {
              "type": "h2",
              "text": "TAM / SAM / SOM : cadrage des opportunités accessibles"
            },
            {
              "type": "p",
              "text": "Le TAM (Total Addressable Market) européen couvre l'ensemble des entreprises de plus de 50 salariés dans les 27 États membres, soit environ 480 000 organisations représentant un potentiel brut de 3,1 milliards d'euros en 2027. Le SAM (Serviceable Addressable Market) est restreint aux marchés où Lumio Health dispose d'une capacité de déploiement réaliste à 18 mois — France, Belgique, Pays-Bas, Allemagne, Suède — et aux segments cliniques et assurances santé, soit un marché adressable de 820 millions d'euros. Le SOM (Serviceable Obtainable Market) retenu pour le business plan Northgate, sur la base d'un accord de distribution exclusive couvrant 11 pays et 600 points de contact institutionnels, est estimé à 47 millions d'euros cumulés sur 18 mois, correspondant à une hypothèse de pénétration de 5,7 % du SAM — cohérente avec les benchmarks observés sur des lancements comparables (Withings Health Solutions, 2022 ; Garmin Health Enterprise, 2023)."
            },
            {
              "type": "callout",
              "text": "SOM Northgate (18 mois) : 47 M€ cumulés · Hypothèse de pénétration : 5,7 % du SAM · Base de comparaison : Withings Health Solutions post-accord AXA (2022), +×3,8 CA en 20 mois."
            },
            {
              "type": "h2",
              "text": "Environnement concurrentiel et fenêtre d'opportunité"
            },
            {
              "type": "p",
              "text": "Le segment B2B institutionnel (cliniques, assureurs, mutuelles) est aujourd'hui occupé par trois acteurs principaux : Kenzen (US, présent en Allemagne et Scandinavie via Allianz Care), Sentio Solutions (Finlande, focus anxiété clinique) et Corti Health (Danemark, IA diagnostique, positionnement adjacent). Aucun acteur français ne détient de contrat de distribution exclusive à l'échelle européenne à ce jour. La menace concurrente directe identifiée dans le cadre de la négociation Northgate est Kenzen, dont les équipes commerciales européennes ont été renforcées de 6 profils en janvier 2025 — signal fort d'une intention d'accélération sur le segment assureurs. La fenêtre d'opportunité pour Lumio est estimée à 6 à 8 semaines avant qu'un accord alternatif soit contractualisable par Kenzen."
            },
            {
              "type": "h2",
              "text": "Cadre réglementaire : MDR et implications pour Lumio"
            },
            {
              "type": "p",
              "text": "Le règlement européen sur les dispositifs médicaux (MDR 2017/745, pleinement applicable depuis mai 2021) impose une classification des wearables selon leur finalité revendiquée. Les dispositifs Lumio Health, dans leur version actuelle (mesure HRV et conductance cutanée à des fins de prévention RPS), relèvent de la classe I selon l'annexe VIII du MDR, dispensée de certification notifiée mais soumise à déclaration de conformité et documentation technique complète. En cas d'extension vers des usages cliniques (intégration dans des protocoles de suivi médical au sein des cliniques Northgate), un reclassement en classe IIa serait requis, avec désignation d'un organisme notifié et délais estimés à 9-14 mois. Ce point constitue un risque réglementaire majeur à intégrer dans le business plan et les négociations contractuelles avec Northgate."
            },
            {
              "type": "callout",
              "text": "RISQUE RÉGLEMENTAIRE : Extension clinique = reclassement MDR classe IIa · Délai estimé : 9 à 14 mois · Recommandation : contractualiser avec Northgate sur périmètre classe I dans un premier temps, avec clause d'extension conditionnelle à l'obtention de la certification."
            }
          ]
        }
      ]
    },
    {
      "id": "DOC-03",
      "type": "rich",
      "tab": "TABLEAU",
      "title": "Données financières Lumio Health FY2023-2024 + projections scénario Northgate",
      "accent": "#1a6641",
      "runningHead": "TABLEAU FINANCIER INTERN",
      "pages": [
        {
          "kicker": "TABLEAU FINANCIER INTERNE — CONFIDENTIEL",
          "title": "Lumio Health · Historique & Projections Northgate",
          "byline": "Théo Marczak, CEO · 14 mars 2025",
          "blocks": [
            {
              "type": "p",
              "text": "Ce document consolide les données financières auditées FY2023 et FY2024, ainsi que les trois scénarios de projection établis dans le cadre de l'offre Northgate Capital reçue le 11 mars 2025. Il sert de socle chiffré pour la construction du business plan destiné à Jakob Rein. Diffusion restreinte : Théo Marczak, Sonia Ferracci, Camille Ott."
            },
            {
              "type": "h2",
              "text": "1. Historique financier consolidé — FY2023 & FY2024"
            },
            {
              "type": "p",
              "text": "FY2023 — CA : 1 420 000 € | Clients actifs B2B : 142 | Panier moyen annuel : 10 000 € | Charges opérationnelles : 1 180 000 € | EBITDA : 240 000 € (16,9 %) | Effectif : 11 ETP. FY2024 — CA : 1 980 000 € | Clients actifs B2B : 180 | Panier moyen annuel : 11 000 € | Charges opérationnelles : 1 610 000 € | EBITDA : 370 000 € (18,7 %) | Effectif : 14 ETP. Croissance CA FY23→FY24 : +39,4 %. Taux de rétention client B2B : 94 %. Investissement R&D FY2024 : 310 000 € (15,7 % du CA). Trésorerie disponible au 28 fév. 2025 : 480 000 €."
            },
            {
              "type": "callout",
              "text": "Référence clé : l'offre Northgate représente un potentiel de CA cible de ~7 920 000 € à 18 mois (×4 sur base FY2024), soit ~660 clients B2B au panier moyen de 12 000 €. C'est la borne haute du scénario optimiste."
            },
            {
              "type": "h2",
              "text": "2. Projections FY2025-2026 — Trois scénarios Northgate"
            },
            {
              "type": "p",
              "text": "SCÉNARIO CONSERVATEUR (probabilité estimée : 30 %) — Hypothèse : déploiement Northgate limité à 3 pays, adoption progressive. CA FY2025 : 2 900 000 € | CA FY2026 : 4 200 000 € (×2,1 vs FY2024). Charges opérationnelles FY2026 : 3 400 000 € | EBITDA FY2026 : 800 000 € (19 %). Recrutements nécessaires : +6 ETP (support client, déploiement terrain). Investissement infra & produit : 550 000 €. — SCÉNARIO BASE (probabilité estimée : 50 %) — Hypothèse : déploiement Northgate sur 7 pays, montée en charge à partir de T3 2025. CA FY2025 : 3 600 000 € | CA FY2026 : 6 100 000 € (×3,1 vs FY2024). Charges opérationnelles FY2026 : 4 700 000 € | EBITDA FY2026 : 1 400 000 € (23 %). Recrutements nécessaires : +11 ETP. Investissement infra & produit : 920 000 €. Besoin de financement externe : 700 000 € (levée ou dette). — SCÉNARIO OPTIMISTE (probabilité estimée : 20 %) — Hypothèse : déploiement full 11 pays dès T2 2025, effet réseau assureurs activé. CA FY2025 : 4 800 000 € | CA FY2026 : 7 920 000 € (×4 vs FY2024). Charges opérationnelles FY2026 : 6 100 000 € | EBITDA FY2026 : 1 820 000 € (23 %). Recrutements nécessaires : +18 ETP. Investissement infra & produit : 1 450 000 €. Besoin de financement externe : 1 500 000 €."
            },
            {
              "type": "callout",
              "text": "Hypothèse transversale aux trois scénarios : panier moyen B2B porté à 12 000 €/an dès la contractualisation Northgate (+9 % vs FY2024), justifié par l'intégration d'un module reporting clinique à 1 200 €/licence/an actuellement en développement (livraison prévue juin 2025)."
            },
            {
              "type": "h2",
              "text": "3. Points de vigilance & marges de manœuvre"
            },
            {
              "type": "p",
              "text": "Trois risques financiers à documenter dans le business plan : (1) Concentration client — un accord Northgate exclusif ferait peser 60 à 70 % du CA FY2026 sur un seul partenaire distributeur ; clause de sortie à négocier impérativement. (2) Point mort opérationnel — dans le scénario base, le seuil de rentabilité opérationnel (hors financement) est atteint à 5 100 000 € de CA, soit mi-2026 selon le rythme de déploiement. Toute glissade de 3 mois repousse l'équilibre en trésorerie à fin 2026. (3) Capacité R&D — le module reporting clinique conditionne le panier cible de 12 000 €. Tout retard post-juin 2025 dégrade mécaniquement les projections base et optimiste d'environ 8 % sur le CA FY2026."
            },
            {
              "type": "callout",
              "text": "Décision requise avant le 21 mars : valider le scénario de référence à soumettre à Northgate. Je recommande le scénario BASE comme socle du business plan, avec une présentation du scénario optimiste en upside conditionnel. Le scénario conservateur servira de plancher de négociation sur les clauses de volume minimum garanti. — T.M."
            }
          ]
        }
      ]
    },
    {
      "id": "DOC-05",
      "type": "rich",
      "tab": "BRIEF",
      "title": "Brief marketing — Repositionnement de marque Lumio 2025",
      "accent": "#5b3a8a",
      "runningHead": "BRIEF MARKETING",
      "pages": [
        {
          "kicker": "USAGE INTERNE — CONFIDENTIEL",
          "title": "Repositionnement de marque Lumio — Axes stratégiques communication globale 2025",
          "byline": "Sonia Ferracci, Directrice Marketing · 14 mars 2025",
          "blocks": [
            {
              "type": "p",
              "text": "Ce brief fait suite au war-room du 13 mars et à la réception de l'offre Northgate. Il a vocation à cadrer les orientations de communication avant toute production de contenus. Je demande à Yassine et à Camille d'en prendre connaissance avant notre réunion du 17 mars, 10h."
            },
            {
              "type": "h2",
              "text": "1. Le problème de fond : un écart d'image qui bloque la signature"
            },
            {
              "type": "p",
              "text": "Lumio communique aujourd'hui avec les codes du bien-être grand public : visuels épurés fond blanc, lexique orienté « sérénité », « équilibre », « recharge mentale ». Ce positionnement a du sens pour nos 180 clients PME actuels, souvent convaincus par le bouche-à-oreille ou les salons RH. Il devient un frein direct face aux interlocuteurs Northgate — directeurs médicaux, responsables actuariels, DSI de cliniques — qui attendent des preuves cliniques, une terminologie précise (variabilité cardiaque, protocoles de mesure, compliance RGPD et MDR) et une image institutionnelle cohérente avec leurs propres standards. Jakob Rein nous l'a dit sans détour lors de l'appel du 11 mars : « Vos supports ressemblent à une appli de méditation, pas à un dispositif médical. » Ce gap n'est pas cosmétique. Il affecte la crédibilité de l'offre technique et ralentit la décision d'achat."
            },
            {
              "type": "h2",
              "text": "2. Axes de repositionnement proposés"
            },
            {
              "type": "p",
              "text": "Axe 1 — Ancrage clinique : refondre le discours autour des données probantes. Mettre en avant les études pilotes menées avec nos clients (notamment Groupe Malakoff Humanis, données 2024), les certifications CE classe IIa en cours, et les partenariats académiques. Axe 2 — Langage B2B institutionnel : créer une ligne éditoriale distincte pour les interlocuteurs Northgate (assureurs, cliniques, mutuelles), séparée de nos communications employeurs actuelles. Axe 3 — Identité visuelle : adapter — sans tout détruire — la charte graphique vers des codes plus médicaux et sobres (typographie sérif, palette bleu nuit / gris acier, iconographie data-driven). Je propose une évolution, pas une refonte à zéro : budget et délai ne le permettent pas."
            },
            {
              "type": "callout",
              "text": "Point de vigilance — Désaccord budgétaire avec Théo : Théo souhaite allouer 40 000 € à une campagne de notoriété digitale broad pour « asseoir la marque » avant la signature Northgate. Je m'y oppose formellement. À ce stade, une campagne grand public affaiblit le repositionnement institutionnel en cours et brouille le signal envoyé à Jakob Rein. Ma recommandation : concentrer 35 000 € sur la production de contenus B2B à haute valeur (livre blanc clinique, deck investisseur, vidéo de démonstration protocole), et réserver 5 000 € à du ciblage LinkedIn très segmenté sur les profils Northgate. Ce point doit être tranché avant le 18 mars, date limite de remise des supports à Camille."
            },
            {
              "type": "h2",
              "text": "3. Prochaines étapes"
            },
            {
              "type": "p",
              "text": "17 mars : arbitrage budgétaire avec Théo (Sonia + Théo, 30 min). 18 mars : brief créatif transmis à Yassine — priorisation : livre blanc et deck. 21 mars : première version des éléments de langage soumise à Camille pour validation terrain. 28 mars : livraison du kit complet à Jakob Rein. Le calendrier est tenu à condition que les arbitrages tombent cette semaine. Toute dérive de deux jours sur la décision budgétaire décale la livraison finale et nous expose à la concurrence allemande déjà en lice."
            }
          ]
        }
      ]
    },
    {
      "id": "DOC-06",
      "type": "rich",
      "tab": "COMPTE-R",
      "title": "War-room Northgate du 14/03 — décisions actées et points de blocage",
      "accent": "#7a756c",
      "runningHead": "COMPTE-RENDU DE RÉUNION",
      "pages": [
        {
          "kicker": "COMPTE-RENDU INTERNE — CONFIDENTIEL",
          "title": "War-room Northgate du 14/03 — décisions actées et points de blocage",
          "byline": "Camille Ott, Responsable Partenariats B2B · 14 mars 2025",
          "blocks": [
            {
              "type": "p",
              "text": "Réunion convoquée par Théo Marczak, CEO, le 14 mars 2025 à 9h00, siège Lumio Health, Paris 11e. Durée : 2h15. Présents : Théo Marczak, Sonia Ferracci, Camille Ott, Yassine Morel. Absent excusé : Jakob Rein (Northgate Capital), représenté par ses éléments transmis la veille via email. Objet : définir la réponse stratégique et opérationnelle à l'offre de distribution exclusive Northgate, couvrant 11 pays européens, avec engagement de réponse formelle attendu avant le 28 mars 2025."
            },
            {
              "type": "h2",
              "text": "Décisions actées"
            },
            {
              "type": "p",
              "text": "1. Acceptation du principe de négociation exclusive avec Northgate pour 30 jours, sans engagement contractuel définitif. Théo Marczak assume la responsabilité de l'interface directe avec Jakob Rein. 2. Lancement immédiat d'un business plan dédié visant à modéliser le scénario ×4 CA en 18 mois : pilotage Théo, contribution chiffrée attendue de Sonia (projection acquisition) et Camille (pipeline B2B existant valorisé). Livrable interne : 21 mars 2025. 3. Refonte du plan de communication globale confiée à Sonia Ferracci, intégrant le nouveau positionnement clinique et assurance santé. Premier draft : 24 mars. 4. Production des contenus d'activation (fiches produit, deck partenaire, cas d'usage cliniques) confiée à Yassine Morel. Deadline non négociable : 28 mars. Volume défini : 6 livrables identifiés. 5. Allocation provisoire de ressources : 12 000 € de budget contenu débloqués sur enveloppe Q2, 0,5 ETP support opérationnel à recruter en freelance dès la semaine 12."
            },
            {
              "type": "callout",
              "text": "POINT DE VIGILANCE — Yassine Morel a signalé en fin de réunion une charge de travail déjà saturée. Le délai de deux semaines sur 6 livrables représente un risque réel de qualité et de santé. Théo a acté la possibilité d'externaliser 2 livrables à un prestataire. Camille assure le suivi de ce point dès lundi 17 mars."
            },
            {
              "type": "h2",
              "text": "Points de blocage identifiés"
            },
            {
              "type": "p",
              "text": "Trois points restent non tranchés à l'issue de la réunion. Premièrement, le périmètre exact du repositionnement produit : Northgate exige une déclinaison du wearable adaptée aux environnements cliniques (certification CE classe IIa potentiellement requise), ce qui dépasse le cadre actuel de Lumio. Aucune décision prise : Théo consulte le directeur technique avant le 17 mars. Deuxièmement, la question de la base clients B2B existante (180 comptes fidèles) : l'accord d'exclusivité Northgate pourrait créer une friction contractuelle avec plusieurs grands comptes. Camille Ott réalise une revue des contrats en cours d'ici le 19 mars. Troisièmement, la gouvernance de la relation Northgate en cas de succès : Jakob Rein a laissé entendre une prise de participation minoritaire possible. Sujet non abordé en war-room, renvoyé à une session séparée avec le conseil."
            },
            {
              "type": "callout",
              "text": "PROCHAINE ÉCHÉANCE CRITIQUE : réunion de suivi war-room fixée au mercredi 19 mars à 8h30 — ordre du jour : restitution revue contrats B2B (Camille), arbitrage externalisation contenus (Théo + Yassine), premiers éléments business plan (Théo + Sonia). Présence obligatoire de tous les membres."
            }
          ]
        }
      ]
    }
  ],
  "notes": [
    {
      "id": "DOC-04",
      "title": "Benchmark wearables stress B2B — 4 acteurs à surveiller en Europe",
      "date": "14 mars 2025",
      "preview": "Nuromind (DE) est en négociation active avec Northgate — fenêtre estimée à 6-10 semaines avant clôture possible.",
      "kicker": "VEILLE CONCURRENTIELLE — CONFIDENTIEL INTERNE",
      "render": "plain",
      "body": "**Lumio Health** (FR, 2018) — Référence de départ. 180 clients B2B, positionnement RH/QVT, technologie propriétaire éprouvée. Angle différenciant : accompagnement humain post-data. Faiblesse connue : notoriété limitée hors France, pas de réseau distribution européen structuré.\n\n**Nuromind** (DE, 2020) — Concurrent prioritaire. Wearable + dashboard analytique SaaS, déployé dans 6 pays DACH. Référencé auprès de 3 groupes d'assurances allemands. **Confirmation obtenue le 11 mars : Nuromind est en discussion active avec Northgate Capital.** Délai estimé avant signature : 6 à 10 semaines selon source indirecte (LinkedIn + communiqué investisseur daté 28 fév. 2025). C'est le scénario de blocage à traiter en priorité absolue.\n\n**Moodbeam** (UK, 2016) — Acteur établi, mono-capteur simplifié, cible PME <200 salariés. Peu menaçant sur le segment cliniques/assurances visé par Northgate. Post-Brexit, déploiement continental ralenti.\n\n**Corti Sense** (NL, 2021) — Entrant rapide, levée série A de 9 M€ en jan. 2025. Wearable couplé à IA prédictive burnout. Pas encore en phase commerciale B2B structurée, mais à surveiller sur 12-18 mois.\n\n**Synthèse rapide :** Nuromind est l'unique menace immédiate sur le deal Northgate. Lumio dispose d'un avantage différenciant défendable (profondeur relation client, data longitudinale sur 180 comptes) à condition de le formaliser vite dans l'offre adressée à Jakob Rein.",
      "byline": "Yassine Morel (Content & Intelligence) · 14 mars 2025"
    },
    {
      "id": "DOC-07",
      "title": "[BROUILLON] Pivot Northgate — Note à finaliser avant diffusion équipes",
      "date": "14 mars 2025",
      "preview": "Brouillon de note interne — pivot Northgate : opportunité ×4 CA, réorganisation en cours, passage RH à reformuler avant envoi.",
      "kicker": "USAGE INTERNE — NE PAS DIFFUSER EN L'ÉTAT",
      "render": "plain",
      "body": "À l'attention de l'ensemble des équipes Lumio Health.\n\nLumio Health est en négociation avancée avec Northgate Capital pour un accord de distribution exclusive couvrant 11 pays européens. Si finalisé d'ici fin mars 2025, cet accord représente une multiplication par 4 de notre chiffre d'affaires B2B sur 18 mois.\n\nCette opportunité implique une réorientation significative de nos priorités opérationnelles : refonte du positionnement produit, révision de l'allocation budgétaire, accélération de la production de contenus. Un war-room stratégique est activé dès cette semaine, piloté par Sonia Ferracci pour la communication et Camille Ott pour la relation Northgate.\n\n[PASSAGE À RETRAVAILLER — formulation actuelle trop brutale] : « Certains postes pourraient ne plus être nécessaires selon le nouveau modèle. » → À remplacer par une formulation RH conforme, type : « Une revue des ressources humaines sera conduite en concertation avec les managers concernés pour adapter les missions aux nouveaux besoins stratégiques. »\n\nUn point d'équipe plénier est prévu le 17 mars 2025. D'ici là, aucune communication externe sur ce sujet.",
      "byline": "Théo Marczak (CEO) · 14 mars 2025"
    }
  ],
  "guide": {
    "title": "Guide de mission · Élaborer et diffuser la stratégie globale d'une organisation",
    "intro": "Ce guide est là si tu te sens bloqué. Il ne donne pas les réponses — il indique où chercher.",
    "tips": [
      {
        "titre": "C1 — Construire une perspective globale des activités de l'organisation afin d'identifier ses potentialités et ses marges de manœuvre en analysant l'environnement et en anticipant ses évolutions",
        "body": "Appuyez-vous sur le document DOC-02 (étude de marché Northgate) et DOC-04 (veille concurrentielle interne de Yassine) pour ancrer votre analyse dans des données concrètes. Un benchmark sans données chiffrées sera considéré comme insuffisant par le jury."
      },
      {
        "titre": "C2 — Évaluer les forces et les faiblesses de l'organisation au regard des risques et des opportunités du secteur d'activité afin d'assurer son bon positionnement à moyen et long terme en réalisant un diagnostic stratégique",
        "body": "Structurez votre SWOT en tableau lisible, puis rédigez une synthèse narrative de 80 mots minimum reliant chaque quadrant à une décision stratégique concrète pour Lumio. Évitez les SWOT génériques non contextualisés : le jury vérifie l'adéquation avec le cas Northgate."
      },
      {
        "titre": "C3 — Définir les objectifs stratégiques et le plan d'action correspondant qui permettent à l'organisation d'orienter sa politique générale en construisant un business plan",
        "body": "Le business plan doit être complet et autonome : un lecteur externe (Jakob Rein ou un banquier) doit pouvoir le lire sans document complémentaire. Intégrez impérativement les tableaux financiers prévisionnels — leur absence est un critère éliminatoire."
      },
      {
        "titre": "C4 — Présenter les orientations stratégiques et financières à l'aide du business plan aux différentes parties prenantes (conseil d'administration, assemblée générale d'actionnaires ou d'associés, établissements bancaires) pour validation et obtention des financements",
        "body": "Décrivez chaque slide en une à trois phrases (titre + message clé + visuel envisagé). Le jury évalue votre capacité à incarner le projet : montrez dans votre texte l'énergie et la conviction que vous porteriez à l'oral face à Jakob Rein."
      },
      {
        "titre": "C5 — Formuler et décliner la vision stratégique de l'organisation en termes de culture et de projet d'entreprise, de valeurs et d'image, pour définir les objectifs de communication globale",
        "body": "Utilisez le DOC-05 (brief de Sonia sur le repositionnement de marque) comme point de départ. Le plan de communication doit couvrir au minimum 6 mois et inclure des actions numériques concrètes — pas uniquement des intentions génériques."
      },
      {
        "titre": "C6 — Formaliser la politique générale pour permettre d'allouer les ressources matérielles, humaines et financières en fixant les étapes et les processus de mise en œuvre",
        "body": "La feuille de route doit être opérationnelle : évitez les généralités. Nommez explicitement les rôles et responsabilités de chaque personne clé de Lumio (Théo, Sonia, Camille, Yassine). L'absence de répartition claire des rôles est un critère éliminatoire au jury."
      },
      {
        "titre": "C7 — Diffuser la stratégie et la feuille de route aux unités opérationnelles et aux fonctions clés de l'organisation en utilisant les outils d'organisation et de planification, pour mobiliser les ressources nécessaires à l'atteinte des objectifs",
        "body": "Le dispositif de diffusion doit être concret : note de service en style professionnel direct (objet, contexte, décisions, actions, délais), outils collaboratifs nommés (CRM, espace projet, tableau de bord) et planning prévisionnel sur 18 mois avec jalons datés. Une diffusion limitée à des intentions générales sera jugée insuffisante."
      }
    ],
    "footer": "Ce guide est disponible à tout moment via le bouton ? en bas à gauche du desktop."
  },
  "notepad": {
    "title": "Mes notes — mission",
    "placeholder": "Tes pensées au fil de l'eau pendant que tu lis le dossier."
  },
  "finder": {
    "folders": {
      "guide": {
        "title": "Guide",
        "sidebar": "⌘ Guide",
        "icon": "📕",
        "items": [
          {
            "kind": "pdf",
            "name": "Guide de mission",
            "app": "pdf",
            "props": {}
          }
        ]
      },
      "acte1": {
        "title": "Acte 1",
        "sidebar": "Acte 1",
        "icon": "📁",
        "items": [
          {
            "kind": "mail",
            "name": "Offre de partenariat exclusif",
            "app": "mail",
            "props": {
              "docId": "DOC-01"
            }
          },
          {
            "kind": "pdf",
            "name": "Marché européen des wearables",
            "app": "pdf",
            "props": {
              "docId": "DOC-02"
            }
          }
        ]
      },
      "acte2": {
        "title": "Acte 2",
        "sidebar": "Acte 2",
        "icon": "📁",
        "items": [
          {
            "kind": "pdf",
            "name": "Données financières Lumio Health",
            "app": "pdf",
            "props": {
              "docId": "DOC-03"
            }
          },
          {
            "kind": "note",
            "name": "Benchmark concurrentiel — 4",
            "app": "notes",
            "props": {
              "docId": "DOC-04"
            }
          }
        ]
      },
      "acte3": {
        "title": "Acte 3",
        "sidebar": "Acte 3",
        "icon": "📁",
        "items": [
          {
            "kind": "pdf",
            "name": "Repositionnement de marque Lumio",
            "app": "pdf",
            "props": {
              "docId": "DOC-05"
            }
          },
          {
            "kind": "pdf",
            "name": "War-room Northgate du 14/03",
            "app": "pdf",
            "props": {
              "docId": "DOC-06"
            }
          }
        ]
      },
      "acte4": {
        "title": "Acte 4",
        "sidebar": "Acte 4",
        "icon": "📁",
        "items": [
          {
            "kind": "note",
            "name": "[BROUILLON] Annonce pivot stratégique",
            "app": "notes",
            "props": {
              "docId": "DOC-07"
            }
          }
        ]
      },
      "acte5": {
        "title": "Acte 5",
        "sidebar": "Acte 5",
        "icon": "📁",
        "items": [
          {
            "kind": "mail",
            "name": "⚠️ Jakob Rein vient",
            "app": "mail",
            "props": {
              "docId": "DOC-08"
            }
          }
        ]
      },
      "portraits": {
        "title": "Portraits équipe",
        "sidebar": "Portraits",
        "icon": "🪪",
        "items": [
          {
            "kind": "html",
            "name": "Théo Marczak — CEO",
            "app": "browser",
            "props": {
              "url": "portraits/portrait_theo_marczak.html"
            }
          },
          {
            "kind": "html",
            "name": "Sonia Ferracci — Dir. Marketing",
            "app": "browser",
            "props": {
              "url": "portraits/portrait_sonia_ferracci.html"
            }
          },
          {
            "kind": "html",
            "name": "Camille Ott — Partenariats B2B",
            "app": "browser",
            "props": {
              "url": "portraits/portrait_camille_ott.html"
            }
          },
          {
            "kind": "html",
            "name": "Yassine Morel — Content Manager",
            "app": "browser",
            "props": {
              "url": "portraits/portrait_yassine_morel.html"
            }
          },
          {
            "kind": "html",
            "name": "Jakob Rein — Northgate Capital",
            "app": "browser",
            "props": {
              "url": "portraits/portrait_jakob_rein.html"
            }
          }
        ]
      }
    },
    "order": [
      "guide",
      "acte1",
      "acte2",
      "acte3",
      "acte4",
      "acte5",
      "portraits"
    ]
  },
  "calendar": {
    "monthLabel": "Mars",
    "todayLabel": "Jour 1 / 18",
    "countdownLabel": "AVANT ÉCHÉANCE",
    "startDay": 14,
    "daysInMonth": 31,
    "startOffset": 0,
    "deadlineDay": 31,
    "boardDay": null,
    "legend": [
      {
        "label": "Réunion",
        "color": "#3a7bd5"
      },
      {
        "label": "Production",
        "color": "#c4420f"
      },
      {
        "label": "Échéance",
        "color": "#a83232"
      }
    ],
    "events": {
      "14": [
        {
          "label": "Kick-off · Opération Northgate : pivoter ou périr",
          "bg": "#3a7bd5",
          "color": "#fff",
          "bold": true
        }
      ],
      "31": [
        {
          "label": "Livrable final",
          "bg": "#a83232",
          "color": "#fff",
          "bold": true
        }
      ]
    },
    "footer": "<em>1 jour fictif ≈ 11 minutes réelles · ratio ×74</em>"
  },
  "trash": {
    "items": [
      { "name": "ancien_pitch_B2B_only.key", "icon": "📊", "size": "4,2 Mo", "date": "9 mars", "isEgg": false },
      { "name": "logo_lumio_v1_rejete.png", "icon": "🖼", "size": "318 Ko", "date": "2 mars", "isEgg": false },
      { "name": "Capture WhatsApp — Camille.png", "icon": "🖼", "size": "212 Ko", "date": "13 mars", "isEgg": true },
      { "name": "brouillon_reponse_jakob.txt", "icon": "📄", "size": "6 Ko", "date": "12 mars", "isEgg": false }
    ],
    "egg": {
      "contact": "Camille Ott",
      "status": "vu à l'instant",
      "meKey": "theo",
      "badge": "Conversation non destinée au dossier",
      "messages": [
        { "from": "camille", "text": "Théo, faut qu'on parle de l'offre Northgate avant vendredi. Je peux pas la laisser passer en board sans rien dire.", "time": "21:46" },
        { "from": "theo", "text": "Je sais. Mais Jakob a mis 21 jours sur la table, pas plus. Si on dit non on perd la série B.", "time": "21:48" },
        { "from": "camille", "text": "Et si on dit oui on perd les 180 comptes B2B qui nous ont fait. Tu leur dis quoi à Decathlon et à la MAIF ?", "time": "21:49" },
        { "from": "camille", "text": "Le pivot B2C c'est leur thèse à eux. Pas la nôtre.", "time": "21:49" },
        { "from": "theo", "text": "Je le sais Camille. Mais sans le cash de Northgate on tient 7 mois. Tu veux que je le mette dans le deck board, ça ?", "time": "21:52" },
        { "from": "camille", "text": "Non. Mais ne le caches pas au consultant qu'on fait venir. S'il découvre les 7 mois après coup, sa reco vaut rien.", "time": "21:54" },
        { "from": "theo", "text": "Il le verra dans les chiffres. Je veux juste qu'il arrive sans a priori.", "time": "21:55" },
        { "from": "camille", "text": "Un a priori ou la vérité, Théo. À un moment faut choisir.", "time": "21:56" }
      ]
    }
  },
  "slack": {
    "workspace": "Lumio Health",
    "channels": [
      {
        "id": "general",
        "name": "general"
      },
      {
        "id": "projet-bc1",
        "name": "projet-bc1"
      }
    ],
    "dms": [
      {
        "id": "commanditaire",
        "name": "Théo Marczak",
        "avatar": "TM",
        "color": "#134547",
        "status": "online",
        "isCommanditaire": true
      }
    ],
    "seed": {
      "commanditaire": [
        {
          "from": "Théo Marczak",
          "avatar": "TM",
          "color": "#134547",
          "time": "08:17",
          "text": "Bienvenue dans l'équipe — on se retrouve en plein dans l'œil du cyclone"
        },
        {
          "from": "Théo Marczak",
          "avatar": "TM",
          "color": "#134547",
          "time": "08:19",
          "text": "Northgate nous a mis 3 semaines sur la table pour leur présenter un business plan solide + une feuille de route opérationnelle complète, sinon ils partent sur le concurrent allemand — t'as le contexte complet dans le drive /Opération Northgate"
        },
        {
          "from": "Théo Marczak",
          "avatar": "TM",
          "color": "#134547",
          "time": "08:23",
          "text": "Ce que j'attends de toi : un diagnostic stratégique propre (SWOT, environnement, positionnement), un business plan structuré prêt à défendre devant Jakob, et une feuille de route que Sonia et Camille peuvent activer immédiatement — première version d'ici vendredi 21 mars, 18h"
        }
      ]
    }
  },
  "slackPrompts": {
    "commanditaire": "Tu es Théo Marczak, CEO de Lumio Health chez Lumio Health. Tu réponds à {{PRENOM}}, consultant·e externe sur la mission \"Opération Northgate : pivoter ou périr\". Tu évalues sans expliquer, tu relances sans donner la réponse, tu simules la pression hiérarchique. Tu réponds en 2-3 messages courts séparés par ---SPLIT---. Pas de longs développements.",
    "commanditaireLivrable": "Tu es Théo Marczak. Tu viens de recevoir le livrable de {{PRENOM}}. Tu réagis en 2-3 messages courts séparés par ---SPLIT---. Tu pointes ce qui te paraît juste et ce qui te paraît faible, sans expliquer comment corriger."
  },
  "pressArticles": [
    {
      "id": "a1",
      "source": "L'Usine Digitale",
      "host": "usine-digitale.fr",
      "url": "usine-digitale.fr/medtech-b2b-distribution-europeenne-wearables-sante-entreprise",
      "author": "Margaux Thévenin",
      "date": "11 mars 2025",
      "headline": "Wearables santé au travail : les medtechs françaises face au vertige de l'internationalisation express",
      "lede": "Portées par une demande croissante des employeurs et des réseaux de soins européens, plusieurs jeunes pousses hexagonales spécialisées dans la mesure du bien-être professionnel se trouvent confrontées à des offres de distribution massive qu'elles n'ont pas toujours les reins assez solides pour absorber. Entre opportunité de décennie et piège opérationnel, le dilemme est réel.",
      "illustration": "PHOTO ILLUSTRATIVE",
      "body": "En 2024, le marché européen des dispositifs connectés dédiés à la santé mentale et au stress au travail a progressé de 34 % selon le cabinet Frost & Sullivan, porté par la montée en puissance des politiques QVT dans les grandes entreprises et par l'intégration croissante de ces outils dans les contrats de prévoyance collective. Les réseaux de cliniques privées et les assureurs santé sont désormais en première ligne pour référencer ces solutions à grande échelle.\n\nMais cette accélération crée une asymétrie brutale : d'un côté, des distributeurs capables de déployer un produit sur dix ou onze marchés en moins de deux ans ; de l'autre, des éditeurs et fabricants dont les équipes, souvent inférieures à cinquante personnes, n'ont jamais conçu leurs processus pour ce type de montée en charge. « L'offre de distribution massive, c'est la meilleure et la pire chose qui puisse arriver à une startup en phase de croissance organique », résume Élodie Castaing, associée chez Healthcare Ventures à Lyon.\n\nLe cas des wearables anti-stress est particulièrement révélateur. Ces objets connectés, qui mesurent variabilité cardiaque, conductance cutanée ou qualité du sommeil, ont d'abord séduit les directions des ressources humaines de grands groupes via des contrats directs. Leur modèle B2B, fondé sur la relation de confiance et l'accompagnement personnalisé, est aujourd'hui bousculé par des acteurs de la distribution qui exigent standardisation, scalabilité et refonte du positionnement tarifaire.\n\nLa question du positionnement est centrale. Un réseau paneuropéen de cliniques ou d'assureurs ne cherche pas un partenaire technologique de niche : il cherche une marque crédible, un discours médical validé, une communication unifiée sur plusieurs langues et une capacité à honorer des volumes sans précédent. Autant d'exigences qui impliquent une transformation quasi complète de l'identité commerciale d'une jeune medtech.\n\n« Nous avons vu plusieurs dossiers capoter non pas sur la technologie, mais sur l'incapacité de l'équipe fondatrice à produire un business plan consolidé en temps contraint », confie un investisseur parisien qui préfère rester anonyme. Les fonds qui accompagnent ces startups poussent souvent à saisir la fenêtre, quitte à forcer le rythme. Les opérationnels, eux, peinent à suivre.\n\nLa concurrence internationale ajoute une pression supplémentaire. Plusieurs acteurs allemands et nordiques, bénéficiant d'une culture de l'export plus ancrée et de certifications médicales parfois plus avancées, se positionnent activement sur les mêmes appels d'offres. Le temps de réponse devient un critère de sélection à part entière : certains distributeurs imposent des délais de validation inférieurs à trois semaines.\n\nPour les experts du secteur, la clé réside dans la capacité à aligner en urgence toutes les fonctions de l'entreprise — finance, marketing, opérations, juridique — autour d'une feuille de route unique, lisible et défendable devant un comité d'investissement ou un partenaire stratégique. Une exigence qui relève autant du management que de la stratégie pure."
    }
  ],
  "fausseUne": {
    "source": "Les Échos",
    "host": "lesechos.fr",
    "rubrique": "Économie & Entreprises",
    "kicker": "Medtech · Santé connectée",
    "date": "14 mars 2025",
    "headline": "Le réseau Northgate choisit son partenaire européen d'ici fin mars : la bataille des wearables santé est lancée",
    "chapeau": "Le fonds britannique Northgate Capital, adossé à un consortium de 47 cliniques et 6 assureurs couvrant 11 pays, s'apprête à signer un accord de distribution exclusif dans le segment des dispositifs connectés de gestion du stress en entreprise. Plusieurs startups européennes sont en loge. La décision finale est attendue avant le 31 mars.",
    "body": "C'est l'un des contrats les plus convoités du secteur medtech cette année. Northgate Capital, dont le bras opérationnel gère plus de 2,3 millions d'assurés en Europe centrale et du Nord, a engagé depuis janvier des discussions avancées avec au moins deux acteurs : une scale-up munichoise, Vitaloop GmbH, déjà référencée dans trois réseaux hospitaliers allemands, et une startup française dont le nom n'a pas été confirmé. Selon nos informations, l'accord porterait sur une intégration directe des wearables dans les contrats de prévention santé au travail proposés aux entreprises clientes du réseau, avec des volumes initiaux estimés entre 80 000 et 120 000 unités sur dix-huit mois. 'Nous ne signerons qu'une seule fois, et avec celui qui sera prêt à scaler sans délai', a déclaré une source proche du dossier. Le cahier des charges imposé serait exigeant : repositionnement de la marque, documentation clinique homologuée CE, capacité de production certifiée et plan de communication multilingue opérationnel dès le lancement. Vitaloop afficherait une longueur d'avance sur la maturité industrielle. Du côté français, le calendrier serait particulièrement serré."
  }
};

window.PAC_CONFIG = {
  "bloc": "bc1",
  accroche_namescreen: {
    "subtitle": "Élaborer la stratégie globale",
    "role": "consultant·e en stratégie d'organisation",
    "intro": "Tu es {{STUDENT}}, consultant·e mandaté·e par Théo Marczak (CEO de Lumio Health) pour l'Opération Northgate : pivoter ou périr. Diagnostic stratégique, business plan, vision et politique générale, diffusion interne : tu produis le rapport d'activité / business plan qui engage l'avenir de l'organisation.",
    "ratio_label": "3 semaines dans la vraie vie",
    "regles": [
      {
        "ico": "📄",
        "txt": "Tout ce que tu sais, c'est dans les documents stratégiques du poste de mission."
      },
      {
        "ico": "🤐",
        "txt": "Le jury exige des tableaux financiers prévisionnels et des indicateurs chiffrés — pas des intentions générales."
      },
      {
        "ico": "💬",
        "txt": "Quand tu as une orientation solide → Slack → ton commanditaire. Sa réaction débloque la suite."
      }
    ]
  },
  "titre": "Élaborer et diffuser la stratégie globale d'une organisation",
  "epreuve": "Rapport d'activité / Business plan",
  "deadline": "14 mars 2025 · 18h00",
  "commanditaire": "Théo Marczak",
  "entreprise": "Lumio Health",
  "dispositif": "PAC",
  "note_reflexive": true,
  "temps": [
    {
      "n": 1,
      "label": "Ancrage terrain",
      "debut": 0,
      "fin": 20,
      "couleur": "#7a756c"
    },
    {
      "n": 2,
      "label": "Entrée dans l'affaire",
      "debut": 20,
      "fin": 50,
      "couleur": "#1b4f8a"
    },
    {
      "n": 3,
      "label": "Diagnostic",
      "debut": 50,
      "fin": 95,
      "couleur": "#1a6641"
    },
    {
      "n": 4,
      "label": "Production",
      "debut": 95,
      "fin": 175,
      "couleur": "#c4420f"
    },
    {
      "n": 5,
      "label": "Réflexion",
      "debut": 175,
      "fin": 210,
      "couleur": "#7a756c"
    }
  ],
  "competences": [
    {
      "code": "C1",
      "label": "Construire une perspective globale des activités de l'organisation afin d'identifier ses potentialités et ses marges de manœuvre en analysant l'environnement et en anticipant ses évolutions",
      "libelle": "Construire une",
      "rncp": "Construire une perspective globale des activités de l'organisation afin d'identifier ses potentialités et ses marges de manœuvre en analysant l'environnement et en anticipant ses évolutions",
      "placeholder": "Décrivez la chaîne de valeur de Lumio Health dans le contexte du partenariat Northgate, en analysant l'environnement medtech européen (réglementation MDR, tendances wearables santé au travail, émergence de concurrents) et en réalisant un benchmark d'au moins trois acteurs comparables. Identifiez les potentialités (nouvelles cibles B2B, marchés géographiques) et les marges de manœuvre (différenciation produit, pricing, canaux).",
      "min": 300,
      "motsCles": [
        "chaîne de valeur",
        "benchmark",
        "environnement concurrentiel",
        "potentialités",
        "marges de manœuvre",
        "tendances marché",
        "medtech",
        "wearables",
        "réglementation MDR"
      ],
      "conseil": "Appuyez-vous sur le document DOC-02 (étude de marché Northgate) et DOC-04 (veille concurrentielle interne de Yassine) pour ancrer votre analyse dans des données concrètes. Un benchmark sans données chiffrées sera considéré comme insuffisant par le jury."
    },
    {
      "code": "C2",
      "label": "Évaluer les forces et les faiblesses de l'organisation au regard des risques et des opportunités du secteur d'activité afin d'assurer son bon positionnement à moyen et long terme en réalisant un diagnostic stratégique",
      "libelle": "Évaluer les",
      "rncp": "Évaluer les forces et les faiblesses de l'organisation au regard des risques et des opportunités du secteur d'activité afin d'assurer son bon positionnement à moyen et long terme en réalisant un diagnostic stratégique",
      "placeholder": "Réalisez le diagnostic stratégique de Lumio Health face à l'opportunité Northgate. Construisez une matrice SWOT argumentée en mobilisant au moins deux outils d'aide à la décision (ex. : matrice BCG, Porter, Pestel, ou outils numériques de business intelligence). Expliquez comment ce diagnostic oriente le positionnement de Lumio à moyen terme (3 ans) sur le marché européen B2B santé.",
      "min": 280,
      "motsCles": [
        "SWOT",
        "diagnostic stratégique",
        "forces",
        "faiblesses",
        "opportunités",
        "risques",
        "outils d'aide à la décision",
        "positionnement",
        "moyen terme"
      ],
      "conseil": "Structurez votre SWOT en tableau lisible, puis rédigez une synthèse narrative de 80 mots minimum reliant chaque quadrant à une décision stratégique concrète pour Lumio. Évitez les SWOT génériques non contextualisés : le jury vérifie l'adéquation avec le cas Northgate."
    },
    {
      "code": "C3",
      "label": "Définir les objectifs stratégiques et le plan d'action correspondant qui permettent à l'organisation d'orienter sa politique générale en construisant un business plan",
      "libelle": "Définir les",
      "rncp": "Définir les objectifs stratégiques et le plan d'action correspondant qui permettent à l'organisation d'orienter sa politique générale en construisant un business plan",
      "placeholder": "Construisez le business plan de Lumio Health pour le partenariat Northgate sur 18 mois. Incluez : (1) les objectifs stratégiques chiffrés (CA cible, parts de marché, KPIs), (2) le plan d'action opérationnel détaillé, (3) un compte de résultat prévisionnel et un bilan prévisionnel simplifié intégrant les hypothèses de croissance ×4. Justifiez chaque hypothèse financière à partir des données du DOC-03.",
      "min": 400,
      "motsCles": [
        "business plan",
        "objectifs stratégiques",
        "plan d'action",
        "compte de résultat prévisionnel",
        "bilan prévisionnel",
        "KPIs",
        "hypothèses financières",
        "politique générale"
      ],
      "conseil": "Le business plan doit être complet et autonome : un lecteur externe (Jakob Rein ou un banquier) doit pouvoir le lire sans document complémentaire. Intégrez impérativement les tableaux financiers prévisionnels — leur absence est un critère éliminatoire."
    },
    {
      "code": "C4",
      "label": "Présenter les orientations stratégiques et financières à l'aide du business plan aux différentes parties prenantes (conseil d'administration, assemblée générale d'actionnaires ou d'associés, établissements bancaires) pour validation et obtention des financements",
      "libelle": "Présenter les",
      "rncp": "Présenter les orientations stratégiques et financières à l'aide du business plan aux différentes parties prenantes (conseil d'administration, assemblée générale d'actionnaires ou d'associés, établissements bancaires) pour validation et obtention des financements",
      "placeholder": "Rédigez le support de présentation orale (pitch deck structuré en 8 à 12 slides narratives) destiné à Jakob Rein (Northgate) et aux investisseurs de Lumio. Hiérarchisez votre argumentation : accroche, problème marché, solution Lumio, traction, projections financières, ask. Précisez comment vous adaptez le discours selon que vous vous adressez à Northgate (partenaire distribution) ou à un établissement bancaire (financement de la croissance).",
      "min": 250,
      "motsCles": [
        "présentation orale",
        "pitch deck",
        "argumentation hiérarchisée",
        "parties prenantes",
        "financement",
        "investisseurs",
        "adaptation du discours",
        "convaincre"
      ],
      "conseil": "Décrivez chaque slide en une à trois phrases (titre + message clé + visuel envisagé). Le jury évalue votre capacité à incarner le projet : montrez dans votre texte l'énergie et la conviction que vous porteriez à l'oral face à Jakob Rein."
    },
    {
      "code": "C5",
      "label": "Formuler et décliner la vision stratégique de l'organisation en termes de culture et de projet d'entreprise, de valeurs et d'image, pour définir les objectifs de communication globale",
      "libelle": "Formuler et",
      "rncp": "Formuler et décliner la vision stratégique de l'organisation en termes de culture et de projet d'entreprise, de valeurs et d'image, pour définir les objectifs de communication globale",
      "placeholder": "En lien avec Sonia Ferracci, formalisez la stratégie de communication globale de Lumio Health pour accompagner le pivot Northgate. Rédigez un plan de communication complet précisant : vision et valeurs de marque actualisées, cibles (B2B cliniques, assureurs, prescripteurs RH), messages clés, canaux (y compris numériques : LinkedIn, newsletter B2B, webinars), calendrier et indicateurs de succès. Expliquez comment l'histoire et la vocation de Lumio sont intégrées dans chaque prise de parole.",
      "min": 280,
      "motsCles": [
        "stratégie de communication globale",
        "plan de communication",
        "vision",
        "valeurs",
        "culture d'entreprise",
        "cibles",
        "messages clés",
        "canaux numériques",
        "indicateurs"
      ],
      "conseil": "Utilisez le DOC-05 (brief de Sonia sur le repositionnement de marque) comme point de départ. Le plan de communication doit couvrir au minimum 6 mois et inclure des actions numériques concrètes — pas uniquement des intentions génériques."
    },
    {
      "code": "C6",
      "label": "Formaliser la politique générale pour permettre d'allouer les ressources matérielles, humaines et financières en fixant les étapes et les processus de mise en œuvre",
      "libelle": "Formaliser la",
      "rncp": "Formaliser la politique générale pour permettre d'allouer les ressources matérielles, humaines et financières en fixant les étapes et les processus de mise en œuvre",
      "placeholder": "Rédigez la feuille de route de mise en œuvre du partenariat Northgate pour Lumio Health. Détaillez : les ressources humaines nécessaires (recrutements, réaffectations, responsabilités par fonction — Sonia, Camille, Yassine et les équipes opérationnelles), les ressources matérielles (infrastructure tech, certifications produit) et les ressources financières (budget alloué par poste). Précisez les étapes jalonnées et les processus de gouvernance (qui décide quoi, à quelle fréquence).",
      "min": 260,
      "motsCles": [
        "feuille de route",
        "allocation des ressources",
        "ressources humaines",
        "ressources financières",
        "ressources matérielles",
        "étapes",
        "processus",
        "gouvernance",
        "jalons"
      ],
      "conseil": "La feuille de route doit être opérationnelle : évitez les généralités. Nommez explicitement les rôles et responsabilités de chaque personne clé de Lumio (Théo, Sonia, Camille, Yassine). L'absence de répartition claire des rôles est un critère éliminatoire au jury."
    },
    {
      "code": "C7",
      "label": "Diffuser la stratégie et la feuille de route aux unités opérationnelles et aux fonctions clés de l'organisation en utilisant les outils d'organisation et de planification, pour mobiliser les ressources nécessaires à l'atteinte des objectifs",
      "libelle": "Diffuser la",
      "rncp": "Diffuser la stratégie et la feuille de route aux unités opérationnelles et aux fonctions clés de l'organisation en utilisant les outils d'organisation et de planification, pour mobiliser les ressources nécessaires à l'atteinte des objectifs",
      "placeholder": "Décrivez le dispositif de diffusion interne de la stratégie Northgate chez Lumio. Rédigez : (1) une note de service adressée à l'ensemble des équipes annonçant le pivot stratégique, (2) les grandes lignes d'un livret d'accueil pour les futurs collaborateurs recrutés dans le cadre du projet, (3) les outils collaboratifs mis en place (CRM, espace projet Notion/Slack, tableau de bord partagé), (4) la composition des équipes projet et (5) le planning prévisionnel de déploiement sur 18 mois.",
      "min": 280,
      "motsCles": [
        "note de service",
        "livret d'accueil",
        "outils collaboratifs",
        "CRM",
        "équipes projet",
        "planning prévisionnel",
        "diffusion interne",
        "mobilisation",
        "outils de planification"
      ],
      "conseil": "La note de service doit être rédigée en style professionnel direct (objet, contexte, décisions, actions attendues, délais). Le planning prévisionnel doit couvrir les 18 mois du partenariat Northgate avec des jalons mensuels ou bimestriels clairement identifiés."
    }
  ],
  "gabarits": {},
  "questionsPositionnement": [],
  "juryPrompt": "Tu es le jury certifiant du bloc bc1 (Élaborer et diffuser la stratégie globale d'une organisation — MDO, RNCP 35280).\nContexte : Opération Northgate : pivoter ou périr · 14 mars 2025.\nTu évalues une production étudiante aux critères RNCP stricts. Sois exigeant mais juste.\nCritères éliminatoires :\n- Absence de tableaux financiers prévisionnels (bilan et compte de résultat) dans le business plan — le livrable est automatiquement hors critères CE3.2\n- Rôles et responsabilités non attribués explicitement à des personnes nommées (Théo Marczak, Sonia Ferracci, Camille Ott, Yassine Morel) dans la feuille de route — critère CE6 non satisfait\n- Absence d'indicateurs d'impact mesurables (KPIs chiffrés, cibles CA, métriques de communication) dans au moins trois des compétences évaluées\n- Benchmark (C1) non réalisé ou limité à des affirmations génériques sans données sectorielles ni noms d'acteurs concurrents identifiés\n- Note réflexive inférieure à 100 mots ou absente — épreuve incomplète, non recevable\n- Plan de communication (C5) ne mentionnant aucun canal numérique ni aucun indicateur de succès mesurable\n- Business plan (C3) ne couvrant pas l'activité internationale de Lumio ou ignorant le contexte Northgate multi-pays\n\nRéponds EXACTEMENT dans ce format :\n### C1 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### C2 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### C3 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### C4 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### C5 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### C6 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### C7 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### Note réflexive — [Satisfaisant / Insuffisant / Absent]\nUne phrase.\n\n## Niveau global\n**[Non conforme / Partiellement conforme / Conforme / Conforme avec distinction]**\n\n## Question de jury\nUne question dérangeante que tu poserais à l'oral.",
  "livrableMinMots": 520,
  "noteReflexiveMinMots": 100
};
// Alias de compatibilité
window.PASS_CONFIG = window.PAC_CONFIG;
