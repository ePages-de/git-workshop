---
title: git clone
---

Nun können Sie sich eine Kopie von Ihrem Fork herunterladen.
Dies wird im Kontext von Git als "clone" bezeichnet.

## GitHub Webseite

Nach der Erstellung des Forks hat sich automatisch dessen Seite auf github.com geöffnet.
Wenn Sie die Seite direkt öffnen wollen, geben Sie in die Addresszeile Ihres Browsers nach "github.com" das Pfadelement mit ihrem Accountname an und dann als letztes Pfadelement den Projeknamen "git-workshop".

z.B. https://github.com/mmustermann/git-workshop

Klicken Sie auf den grünen "Code" Button und kopieren Sie sich dann die angezeigte HTTPS Clone URL.

![Kopieren von Clone URL](img/copy-clone-url.gif)

## GitHub Desktop

Öffnen Sie nun GitHub Desktop und wählen Sie den Menüpunkt "File > Clone Repository" aus.

![Menüpunkt "Clone Repository"](./img/desktop_menu_clone.png)

Führen Sie in dem sich daraufhin öffnenden Dialog folgende Schritte durch:

1. Wechseln Sie zu dem Tab "URL"
2. Tragen Sie in dem Eingabefeld für die Repository URL die im vorherigen Schritt kopierte HTTPS Clone URL ein
3. Prüfen Sie, dass das Projekt an eine geeignete Stelle auf Ihrem Rechner heruntergeladen wird. Ggf. Können Sie über den Button rechts von dem Eingabefeld ein anderes Zielverzeichnis auswählen.
4. Bestätigen Sie den "git clone" Befehl mit einem Klick auf den blauen "Clone" Button.

![Konfiguration für git clone](./img/gd-git-clone.gif)

Wenn GitHub Desktop Sie daraufhin fragt, was Sie mit dem Fork vorhaben, bestätigen Sie, dass Sie Kontributionen zu dem ursprünglichen Projekt vorhaben.

![Zusatzkonfiguration](./img/desktop_clone_intent.png)
