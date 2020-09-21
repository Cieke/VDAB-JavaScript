# VDAB-JavaScript
overzicht van door te nemen topics video tutorial Andrew Mead


Kevin heeft wel de gratis pdf gevonden:
https://github.com/PacktPublishing/The-Modern-JavaScript-Bootcamp-2019/blob/master/1.%20Course%20Overview/PDF%20Guide.pdf 

---
om de waarde te tonen in volgende geval:
```javascript    
return `${name}`
```
moet je een backtick gebruiken: `

deze kan je typen adhv: ctrl+alt+µ

µ = teken boven de rechtershifttoets

---

Hoewel de Bootcamp van Andrew Mead te lang is om binnen de lesdagen volledig door te nemen, 
blijf ik wel overtuigd dat zijn manier van opdrachtgewijs  uitleg te geven zeer leerrijk is.

ik merk dat er in hoofdstuk 5 veel opdrachten zitten, 
ik denk dat het tijdsgewijs moeilijk is om ze allemaal zelfstandig te maken.

-	Te maken oefeningen (deze zou je echt zelf moeten proberen maken, de rest kan je ook maken of mee volgen):
    -	chapter 5: 
        -	expense tracker 
        -	password

Beste situatie zou zijn dat je alle onderdelen kan doornemen, 
maar indien je in tijdsnood komt zorg dan dat je onderstaande zeker bekijkt **en de oefeningen probeert te maken**:

Je mag *alle* onderdelen rustig doornemen natuurlijk, van mij ben je niet verplicht om stukken over te slaan, 
maar als je stukken zou overslaan dan is het voordeel van deze tutorial dat je deze later eventueel nog eens kan bekijken.

-	Chapter 6 : Arrays: 
    -	Looping over Arrays (callback function)
    -	Searching Arrays part I and II
    -	Filtering Arrays
-	Chapter 7 : JavaScript in the Browser
    -	Vanaf onderdeel DOM manipulation (Hij installeert in de vorige onderdelen live-server om webpages te renderen, 
    dit hebben we (voorlopig) niet nodig je kan de index.html openen op dezelfde manier als je altijd deed)
    - Formulieren zal je sowieso gebruiken in je Java eindproject, 
    je zal hier waarschijnlijk geen JavaScript voor gebruiken, maar het is wel nuttig om het al eens door te nemen, 
    zodat je al een idee hebt hoe je hiermee zal werken in de toekomst (zelfs als het in een andere taal is)
-   Chapter 8: Data Storage, Libraries, and More
    - (In je Java eindproject zal je data met SQL wegschrijven, maar soms wil je niet met een externe database werken)
    - hier leer je de local storage te gebruiken
    - JSON gebruiken om met objecten te kunnen werken in local storage 
    - refactoring code
    - **debugging**
    - DOM rendering: de onderdelen van je html pagina verder opbouwen 
    - Third-Party Library: gebruik maken van bestaande code(projecten), dit wordt vaak gedaan in bv JQuery en React(Native)
        - link die je misschien nodig hebt: http://links.mead.io/uuidv4
    - checkbox challenge
    - the edit note page part I 
        - toevoegen van hyperlink in html => zou gekend moeten zijn
        - url & location and id => dit zal je in de toekomst in Java ook gebruiken, dus goed dat je dit al eens gezien hebt
    - the edit note page part II    
        - data meesturen naar een andere pagina
    **merken jullie dat dit meer en meer begint te lijken op een professionele applicatie?**    
    - synching data across pages
        - listen for changes in local storage using Event Listeners
    - JavaScript Dates
        - sort your notes by created date
        - opgelet met de index
    - moment
        - format date
    - integrating dates
        - werken met datum (oa sorteren)    

hij stelt voor: take a break

---

-   Chapter 9: Expanding Our JavaScript Knowledge
     - Arrow Functions (Lambdas) 
        - uitleg over invloed op arguments en unbound this
        - hier worden alle functies die kunnen omgezet, ook omgezet naar lambda's
     - ternary operator (zelfde als in andere talen)   en arrow function
     - true en false vs truthy and falsy   
     - type coercion: uitleg over wat er achter de schermen gebeurd bij het vorige deel
     - try-catch
     - strict mode en waarom je het zou gebruiken  

---

-   Chapter 10: Advanced Objects and Functions
    - Object georiënteerd programmeren met JavaScript
    - Constructor functions
        - "classes": 
            - JavaScript is object-oriented, but is not a class-based object-oriented language like Java, 
            JS is a prototype-based language
            While object-oriented programming languages encourages development focus on taxonomy and relationships, 
            prototype-based programming languages encourages to focus on behavior first and then later classify.
        - starting on the hangman game   
    -  setting up the prototype object
        - prototypal inheritence
        - setters and getters
    - hangman challenge
    - digging into prototypical inheritance
        - uitleg over hoe dit achter de schermen werkt
        - works differently from Java
    - primitives and objects
        - live server for hangman
            - je hoeft live server niet te gebruiken
        - hasOwnProperty method
        - creating an object with literal syntax    
    - hangman challenge
        - wrapper
        - why string can be classified as object
        - user input in the game
        - game from the console to the browser
        - status of the game
        - array method every
        - adding more user friendly messages
    - the class syntax
        - alternative way to create a constructor
    - creating subclasses
        - using prototypical inheritance
        - create an employee (extending a person)
        - create a student
    - getters and setters
        - custom getters and setters
    - fixing an edge case
        - problem in the hangman game: multiple words with a space

---


-   Chapter 11: Asynchronous JavaScript
    - http-request (met live server, uit te proberen met node.js, de manier die ik vorige week gaf: 
     npm install en dan npm run start)
    - http details
        - status

---

**We touch base at:**
- 11.45
- 13.00
- 15.45

**Op die momenten kom je sowieso even online met Zoom**



-   Chapter 12: App Themes
    - css toevoegen
    - zit niet in de pdf 
-   Chapter 13: Babel and Webpack
    - hoe ervoor zorgen dat je nieuwe JavaScript programma kan gebruikt worden in oudere browsers, ook in Internet Explorer



**alle afgewerkte oefeningen kan je hier terug vinden:**
**https://github.com/PacktPublishing/The-Modern-JavaScript-Bootcamp-2019**

todo Nancy: een grotere opdracht geven waarin je zo goed als alle geziene materie kan toepassen

PS: doordat ik dit in versnelde versie doorneem (aan snelheid x2), 
kan het natuurlijk dat ik hier of daar een finesse gemist heb, 
indien je vragen zou hebben (bv meer uitleg over topic) stel ze dan gerust
