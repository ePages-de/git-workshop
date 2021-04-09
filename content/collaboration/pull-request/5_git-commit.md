---
title: git commit
---

Wenn Ihr Texteditor richtig von GitHub Desktop erkannt wurde, können Sie nach der Verarbeitung von dem "git clone" Befehl einen Button mit der Beschriftung "Open in <text editor>", in dem folgenden Beispiel "Open in Atom":

![Button: Öffnen von Texteditor](./img/desktop_open_editor.png)

Tipp: Der von GitHub Desktop bevorzugte Texteditor lässt sich in den Einstellungen von GitHub Desktop ändern.

![Einstellung von Texteditor](./img/desktop_preferences.png)

Daraufhin sollte sich der von Ihnen bevorzugte Texteditor in dem Verzeichnis von dem Übungsprojekt öffnen.

![Textdateien in Atom](./img/text_atom.png)


Öffnen Sie nun Ihren Text Editor und gehen dort zu der Datei [`content/links/_index.md`](https://github.com/ePages-de/git-workshop/blob/main/content/links/_index.md).
Fügen Sie dort einen neuen Link zum Thema hinzu, oder verbessern Sie die Strukturierung der bestehenden Linksammlung.

Tipp: Hier finden Sie eine Beschreibung der Markdown Syntax: https://daringfireball.net/projects/markdown/syntax#link

Nach dem Speichern der Änderungen können Sie für diese einen Commit anlegen:

```
git add .
git commit -m "Füge Link hinzu"
```
