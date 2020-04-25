# Aufgaben

Im Rahmen dieser Aufgaben wirst du eine WebApplikation zu dieser Demo-API erstellen: <http://dummy.restapiexample.com/.>

**Wichtig**: Nutze bitte kein jQuery für diese Aufgaben.

## Aufgabe 1

Erstelle eine Web App mit Vue.js, Angular oder React.
Diese hat folgende Bereiche:

* Header:
    Zeigt den Titel der aktuellen Seite an.
* Drawer:
    Bietet Navigation zu den Unterseiten.
* Hauptseite
    Der Inhalt wird hier dargestellt.

## Aufgabe 2

Erstelle eine Seite, die alle Mitarbeiter auflistet. Zu den Mitarbeitern werden Name, Alter und Gehalt angezeigt.
Die Mitarbeiter können nach Name oder Gehalt sortiert werden.
Es gibt eine Eingabezeile, in die Filterwörter eingegeben werden können.
Die Mitarbeiter werden nach Vorkommen des Wortes in Name oder Email gefiltert.
Wenn du die Maus über einen Mitarbeiter hältst, wird dieser markiert

**Api:**

    Alle Mitarbeiter:
        GET http://dummy.restapiexample.com/api/v1/employees

## Aufgabe 3

Erstelle eine Seite, auf der ein Mitarbeiter einzeln angezeigt werden kann. Es werden NutzerId, Name, Alter und Gehalt angezeigt.
Es ist möglich, das Gehalt eines Mitarbeiters zu ändern.
Diese Seite wird aufgerufen, wenn in der Übersichtsseite auf einen Mitarbeiter geklickt wird.

**Api:**

    Einen Mitarbeiter erhalten:
        GET http://dummy.restapiexample.com/api/v1/employee/{id}
    Einen Mitarbeiter bearbeiten:
        PUT http://dummy.restapiexample.com/api/v1/update/{id}

## Aufgabe 4

Erstelle eine Seite, auf der ein Mitarbeiter angelegt werden kann.
Zu einem Mitarbeiter können Name, Alter, Gehalt und ein Profilbild angegeben werden.
Wenn der Nutzer angelegt wurde, wird zurück auf die Übersichtsseite geleitet und der neu angelegte Nutzer markiert.

**Api:**

    Einen Mitarbeiter anlegen:
        POST http://dummy.restapiexample.com/api/v1/create

## Hinweise

* Es gibt Tools, die dir eine grundlegende Applikation liefern.
* Bedenke was passiert, wenn du einen nicht existenten Mitarbeiter aufrufst.
