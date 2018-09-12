# EasyEat

Här är all kod för appen

För att lättast jobba mot Github och detta repo så ladda ner git:
https://git-scm.com/downloads

Här kan ni också läsa hur man sätter upp git:
https://help.github.com/articles/set-up-git/

Därefter är det bara att köra:
    `git clone https://github.com/1dv611-futurum-project/futurum-project.git`
i en terminal.

Alternativt kan ni ladda ner koden i en zip-fil uppe till höger.

## Utveckla

Rekommenderar att skaffa ett bra IDE för att koda i.
Själv använder jag https://code.visualstudio.com/download
Därefter öppnar ni det nedladdade repot med programmet.

Sen behöver ni ladda ner NPM och node, som jag tror ni kan göra här:
https://nodejs.org/en/download/

Annars kan ni kolla hur man gör här:
http://blog.teamtreehouse.com/install-node-js-npm-mac

Ni behöver NPM för att starta applikationen

Ni behöver också ladda ner Xcode för att simulera en mobil:
https://developer.apple.com/xcode/

## Sätta igång appen

Om ni är inne i VS code så kan ni öppna terminalen i botten.
Öppna den genom View > Terminal

Där i kör ni först

    `cd EasyEat`

För att gå in i appen.
Därefter kör ni

    `npm start`

Om ni får upp något felmeddelande om "max-stack-size" eller dylikt, så står
det ofta en ledtråd att ni ska sätta en viss configuration om det.
Skriv in ledtråden i terminalen sen bara.

Annars borde ni få upp en meny som ser ut ungefär såhär:

``
 › Press a to open Android device or emulator, or i to open iOS emulator.
 › Press s to send the app URL to your phone number or email address
 › Press q to display QR code.
 › Press r to restart packager, or R to restart packager and clear cache.
 › Press d to toggle development mode. (current mode: development)
``

Tryck "i" för att starta simulatorn och köra appen.
Appen är interaktiv, så när ni gör ändringar i koden så ändras appen direkt i simulatorn.

## Övrig information och läsning

Applikation bygger på reactjs och react-native, mer info finns här: https://reactjs.org/, https://facebook.github.io/react-native/

Den använder stilkomponenter från react native elements: https://react-native-training.github.io/react-native-elements/docs/overview.html
Version 1.0.0-beta5

Här finns en grundläggande tutorial hur man kan göra:
https://medium.com/mesan-digital/how-to-build-a-react-native-app-using-firebase-part-1-1210fa206714

Vill ni ladda ner fler paket som erbjuder olika tjänster, så kan ni
läsa på här: https://www.sitepoint.com/beginners-guide-node-package-manager/