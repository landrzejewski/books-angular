### Instalacja i uruchomienie json-server
```shell
npm install -g json-server
json-server books.js
```
### Dodanie plików konfiguracyjnych
```shell
ng generate environments
```
- local references (#nazwa) mogą być użyte do przekazania elementu DOM do klasy komponentu
  (jako argument metody lub przez użycie dekoratora @ViewChild('nazwa', {static:true}) na zmiennej instancyjnej)
  W drugim przypadku zmienna jest typu ElementRef, a dostęp do elementu DOM odbywa się przez property nativeElement
  @ContentChild('nazwa', {static:true}) pozwala dostać się do wstrzykniętego kontentu
- change detection:
  https://mokkapps.de/blog/the-last-guide-for-angular-change-detection-you-will-ever-need
  https://teropa.info/blog/2015/03/02/change-and-its-detection-in-javascript-frameworks.html
  https://medium.com/showpad-engineering/why-you-should-never-use-function-calls-in-angular-template-expressions-e1a50f9c0496
- Inne:
  - providers może być użyte na poziomie modułu lub komponentu (dekorator, działa na poziomie komponentu i jego dzieci)
  - @Injectable() oznacza, że można wstrzykiwać zależności np. do serwisu
  - programowa nawigacja może być zrealizowana przez wstrzyknięcie obiektu Router (metoda navigateByUrl lub navigate)
  - dyrektywa queryParams pozwala na wstrzyknięcie parametrów linku w html
  - przekierowanie na nieistniejącą stronę { path: '**', redirectTo: '/not-found'}, umieszczane jako ostatnia reguła, wymaga wcześniejszego
    zmapowania komponentu NotFound
  - canDeactivate guard może służyć do weryfikacji czy wolno opuścić lokalizację
  - NgForm zawiera zmapowanie values (na podstawie atrybutu name i dzięki dyrektywie ngModel)
    zmiana wartości pola związanego z modelem powoduje automatyczne przypisanie klasy np. ng-valid
  - Walidatory dla formularzy reaktywnych podpina się za pomocą konstruktora FormControl np. new FormControl('', Validators.required)
  - Pipes mogą być pure lub nie co oznacz, że mogą lub nie reagować na zmianę danych (rerender)
    https://angular.io/api/common/NgSwitch
- RxJs:
  https://reactivex.io
  https://stackoverflow.com/questions/38008334/angular-rxjs-when-should-i-unsubscribe-from-subscription
  https://www.esveo.com/en/blog/nY
  https://www.learnrxjs.io
- NgRx:
  https://ngrx.io
  https://www.angular.love/2019/02/27/ngrx-praktycznie-garsc-wskazowek
- JS:
  https://javascript.info
  https://www.javascripttutorial.net/javascript-array-sort

