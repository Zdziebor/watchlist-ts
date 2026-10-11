# Watchlist TS

Prosta aplikacja terminalowa w TypeScripcie do prowadzenia listy filmów: dodawania tytułów, oznaczania obejrzanych, oceniania i sprawdzania statystyk. Dane są zapisywane lokalnie w pliku JSON i pozostają dostępne po ponownym uruchomieniu programu.

Projekt powstał jako praktyczna nauka TypeScriptu po kursie podstaw. Kod rozwijałem stopniowo — od typu opisującego film i prostych pętli, przez funkcje i moduły, aż po klasę oraz obsługę komend terminala.

## Funkcje aplikacji

- Dodawanie filmów z tytułem, rokiem i gatunkiem oraz automatycznym ID.
- Wyświetlanie listy ze statusem i opcjonalną oceną.
- Wyszukiwanie po fragmencie tytułu, bez rozróżniania wielkości liter i z pomijaniem spacji na brzegach frazy.
- Oznaczanie filmów jako obejrzane.
- Ocenianie liczbą całkowitą od 1 do 10; ocena ustawia również status obejrzanego.
- Usuwanie filmów po ID.
- Statystyki: liczba obejrzanych i pozostałych filmów, średnia ocen, najlepszy film oraz liczba filmów według gatunków.
- Zapis i odczyt listy z `watchlist.json`.

## Uruchomienie

Potrzebujesz Node.js i npm. Projekt był uruchamiany na Windowsie z Node.js 24.13.0.

Pobierz repozytorium, np. poleceniem `git clone https://github.com/Zdziebor/watchlist-ts.git`. Następnie:

```powershell
cd watchlist-ts
npm install
npm run dev -- list
```

Skrypt `dev` najpierw sprawdza typy przez `tsc`, a po poprawnym sprawdzeniu uruchamia kod przez `tsx`. Ustawienie `noEmit: true` sprawia, że `tsc` nie generuje osobnych plików JavaScript.

Przy pierwszym uruchomieniu plik danych jeszcze nie istnieje. Obecna wersja wypisuje wtedy `Failed to read a file` i zaczyna od pustej listy. Pierwsze dodanie filmu zapisze plik. Polecenia uruchamiaj z głównego folderu projektu — tam program szuka `watchlist.json`.

## Komendy

| Komenda | Przykład | Działanie |
|---|---|---|
| `list` | `npm run dev -- list` | Wyświetla wszystkie filmy. |
| `add` | `npm run dev -- add "Diuna" 2021 "Sci-Fi"` | Dodaje film; rok musi być dodatnią liczbą całkowitą. |
| `watch` | `npm run dev -- watch 1` | Oznacza film o podanym ID jako obejrzany. |
| `rate` | `npm run dev -- rate 1 8` | Nadaje ocenę i oznacza film jako obejrzany. |
| `search` | `npm run dev -- search "diu"` | Wyszukuje filmy po fragmencie tytułu. |
| `remove` | `npm run dev -- remove 1` | Usuwa film o podanym ID. |
| `stats` | `npm run dev -- stats` | Wyświetla statystyki listy. |

Tytuły i frazy zawierające spacje ujmuj w cudzysłowy. ID w przykładach zastąp numerem widocznym na swojej liście. Wywołanie bez komendy lub z nieznaną komendą pokazuje pomoc.

Przykładowy fragment listy po dodaniu i ocenieniu filmu:

```text
✅ [1] Diuna (2021) - Sci-Fi ★ 8 / 10
```

## Jak korzystałem z AI

Podczas pracy korzystałem z asystenta AI OpenAI Codex jako przewodnika po projekcie. Asystent dzielił naukę na małe zadania, tłumaczył konstrukcje na przykładach, przeglądał mój kod i pomagał znaleźć przyczyny błędów. Czytał również lokalne pliki oraz uruchamiał wybrane sprawdzenia programu.

**Treść tego README została wygenerowana przez OpenAI Codex na moją wyraźną prośbę, na podstawie rozmowy oraz aktualnych plików projektu.** Opis nauki jest podsumowaniem przygotowanym przez AI, a nie tekstem napisanym przeze mnie samodzielnie.

## Czego się nauczyłem

W projekcie ćwiczyłem:

- Typy obiektów, unie literalne, pola opcjonalne i sprawdzanie `undefined`.
- Parametry i wartości zwracane funkcji, w tym różnicę między `return` a `console.log`.
- Pętle oraz metody `find`, `findIndex`, `filter`, `reduce`, `sort` i `splice`.
- Porównywanie tekstów przez `localeCompare`, kopiowanie tablic przez spread i operator `??`.
- Referencje do obiektów: kopia tablicy nie oznacza kopii znajdujących się w niej filmów.
- `Record<string, number>` do zliczania gatunków.
- Moduły, `export`, `import` i `import type`.
- Klasy, konstruktor, pola `private` oraz `this`.
- Podstawy `Promise`, `async`, `await` i `try/catch`.
- Odczyt i zapis plików oraz `JSON.stringify` i `JSON.parse`.
- Argumenty `process.argv`, instrukcję `switch` i konwersję tekstu na liczby.

## Struktura projektu

```text
src/
  types.ts       — typy Movie i Status
  Watchlist.ts   — lista filmów i metody zarządzania nią
  storage.ts     — zapis i odczyt JSON
  stats.ts       — obliczanie statystyk
  display.ts     — wyświetlanie filmów i statystyk
  index.ts       — argumenty terminala i obsługa komend
  movies.ts      — funkcje operujące na filmach, powstałe przed klasą
  data.ts        — przykładowe dane z wcześniejszych ćwiczeń
```

`data.ts` nie zasila obecnego programu — dane pochodzą z pliku JSON. Część funkcji w `movies.ts` nadal jest wykorzystywana przez statystyki i wyświetlanie. Sortowanie oraz notatki były ćwiczone w kodzie, ale nie mają osobnych komend terminala.

`watchlist.json` jest pomijany przez Git, więc każdy użytkownik prowadzi własną lokalną listę.

## Co bym poprawił

- Sprawdzanie struktury danych po `JSON.parse` — deklaracja typu nie gwarantuje poprawnej zawartości pliku.
- Rozróżnianie braku pliku, uszkodzonego JSON i błędów dostępu. Obecnie `load` zwraca pustą listę po błędzie odczytu lub parsowania; późniejszy zapis może nadpisać wcześniejsze dane.
- Dokładniejsze komunikaty o błędach zapisu i odczytu.
- Rozszerzenie walidacji argumentów, np. odrzucanie pustych tytułów i gatunków.
- Dodanie testów automatycznych. Dotychczas działanie było sprawdzane przez komendy terminala i kontrolę typów; obecny skrypt `npm test` jest domyślnym placeholderem.

To projekt edukacyjny, który stanowi podstawę do dalszej nauki i kolejnych ćwiczeń, w tym pracy z Playwrightem.
