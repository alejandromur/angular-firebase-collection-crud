import { Component } from '@angular/core';

@Component({
  selector: 'collection-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  album = [
    {
      id: 10,
      title: 'Coltrane',
      path: 'assets/images/coltrane.jpg',
      picture: 'John Coltrane posando con un saxofón',
      city: 'Hackensack, New Jersey',
      year: 'May 31, 1957',
      artist: 'John Coltrane',
      players: ['John Coltrane', 'Johnny Splawn', 'Sahib Shihab', 'Red Garland', 'Mal Waldron', 'Paul Chambers', 'Albert "Tootie" Heath'],
      instruments: ['Saxo tenor', 'Trompeta', 'Saxo barítono', 'Piano', 'Piano', 'Bajo', 'Percusión'],
      tracklistSideA: ['Bakai', 'Violets for your furs', 'Time was'],
      tracklistSideB: ['Straight street', 'While my lady sleeps', 'Chronic blues', 'I hear a rhapsody'],
      tracklistDurationSideA: [8.39, 6.14, 7.25],
      tracklistDurationSideB: [6.16, 4.39, 8.10, 5.56],
      gift: 'Auto regalo',
      date: '2013',
      comments: 'Lo compré porque acaba de cobrar'
    },
    {
      id: 111,
      title: 'Coltrane',
      path: 'assets/images/coltrane.jpg',
      picture: 'John Coltrane posando con un saxofón',
      city: 'Hackensack, New Jersey',
      year: 'May 31, 1957',
      artist: 'John Coltrane',
      players: ['John Coltrane', 'Johnny Splawn', 'Sahib Shihab', 'Red Garland', 'Mal Waldron', 'Paul Chambers', 'Albert "Tootie" Heath'],
      instruments: ['Saxo tenor', 'Trompeta', 'Saxo barítono', 'Piano', 'Piano', 'Bajo', 'Percusión'],
      tracklistSideA: ['Bakai', 'Violets for your furs', 'Time was'],
      tracklistSideB: ['Straight street', 'While my lady sleeps', 'Chronic blues', 'I hear a rhapsody'],
      tracklistDurationSideA: [8.39, 6.14, 7.25],
      tracklistDurationSideB: [6.16, 4.39, 8.10, 5.56],
      gift: 'Auto regalo',
      date: '2013',
      comments: 'Lo compré porque acaba de cobrar'
    }
  ];
}
