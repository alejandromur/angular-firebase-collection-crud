import { Component } from '@angular/core';

@Component({
  selector: 'collection-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  albums = [
    {
      id: 1,
      title: 'Romeo Bleeding',
      path: 'assets/images/romeo-bleeding.jpg',
      alt: 'Tom Waits cantando',
      city: 'Live from Austin',
      year: 'December 5, 1978, Austin, Texas',
      artist: 'Tom Waits',
      players: [
        {
          player: 'Tom Waits',
          instrument: 'Voz'
        },
        {
          player: 'Herbert Hardesty',
          instrument: 'saxophone, trumpet, flugelhorn'
        },
        {
          player: 'Arthur Richardson',
          instrument: 'Guitarra'
        },
        {
          player: 'John Thomassie',
          instrument: 'Percusión'
        },
        {
          player: 'Greg Cohen',
          instrument: 'Bajo'
        }
      ],
      tracklistSideA: [
        {
          name: 'Summertime / Burma Shave',
          duration: 11.16
        },
        {
          name: 'Annie`s Back in Town / I Wish I Was in New Orleans / Ain`t Gonna Rain',
          duration: 7.28
        },
        {
          name: 'A Sweet Little Bullet from a Pretty Blue Gun',
          duration: 7.42
        }
      ],
      tracklistSideB: [
        {
          name: 'On the Nickel',
          duration: 6.10
        },
        {
          name: 'Romeo Is Bleeding',
          duration: 4.59
        },
        {
          name: 'Silent Night / Christmas Card from a Hooker in Minneapolis',
          duration: 5.51
        },
        {
          name: 'Small Change / Hey Big Spender / Small Change',
          duration: 8.37
        }
      ],
      about: {
        gift: 'Auto regalo',
        date: '2013',
        comments: 'Lo compré porque acaba de cobrar'
      }
    },
    {
      id: 10,
      title: 'Coltrane',
      path: 'assets/images/coltrane.jpg',
      alt: 'John Coltrane posando con un saxofón',
      city: 'Hackensack, New Jersey',
      year: 'May 31, 1957',
      artist: 'John Coltrane',
      players: [
        {
          player: 'John Coltrane',
          instrument: 'Saxo tenor'
        },
        {
          player: 'Johnny Splawn',
          instrument: 'Trompeta'
        },
        {
          player: 'Sahib Shihab',
          instrument: 'Saxo barítono'
        },
        {
          player: 'Red Garland',
          instrument: 'Piano'
        },
        {
          player: 'Mal Waldron',
          instrument: 'Piano'
        },
        {
          player: 'Paul Chambers',
          instrument: 'Bajo'
        },
        {
          player: 'Albert "Tootie" Heath',
          instrument: 'Percusión'
        }
      ],
      tracklistSideA: [
        {
          name: 'Bakai',
          duration: 8.39
        },
        {
          name: 'Violets for your furs',
          duration: 6.14
        },
        {
          name: 'Time was',
          duration: 7.25
        }
      ],
      tracklistSideB: [
        {
          name: 'Straight street',
          duration: 6.16
        },
        {
          name: 'While my lady sleeps',
          duration: 4.39
        },
        {
          name: 'Chronic blues',
          duration: 8.10
        },
        {
          name: 'I hear a rhapsody',
          duration: 5.56
        }
      ],
      about: {
        gift: 'Auto regalo',
        date: '2013',
        comments: 'Lo compré porque acaba de cobrar'
      }
    },
    {
      id: 11,
      title: 'The Johnny Cash TV Show',
      path: 'assets/images/the-johnny-cash-tv-show.jpg',
      alt: 'Johnny Cash con una guitarra en mitad de un espectáculo',
      city: 'New York',
      year: '1969 - 1971',
      artist: 'Johnny Cash',
      players: [
        {
          player: 'Johnny Cash',
          instrument: 'Voz, Guitarra'
        },
        {
          player: 'Tammy Wynette',
          instrument: 'Voz, Guitarra'
        },
        {
          player: 'George Jones',
          instrument: 'Voz, Guitarra'
        },
        {
          player: 'Lynn Anderson',
          instrument: 'Voz'
        },
        {
          player: 'Bobby Bare',
          instrument: 'Voz, Guitarra'
        },
        {
          player: 'Ray Charles',
          instrument: 'Voz, Piano'
        },
        {
          player: 'Derek and the Dominos',
          instrument: 'Banda completa'
        }
      ],
      // tslint:disable-next-line:max-line-length
      tracklistSideA: [
        {
          name: 'I walk the line',
          duration: 2.53
        },
        {
          name: 'Flesh and blood',
          duration: 3.02
        },
        {
          name: 'Stand by your man',
          duration: 2.48
        },
        {
          name: 'She thinks I still care',
          duration: 3.48
        },
        {
          name: 'Love bug',
          duration: 2.16
        },
        {
          name: 'The race is on',
          duration: 3.24
        },
        {
          name: 'Detroit city',
          duration: 3.52
        },
        {
          name: 'Ring of fire',
          duration: 4.14
        },
        {
          name: 'It`s too late',
          duration: 8.39
        }
      ],
      // tslint:disable-next-line:max-line-length
      tracklistSideB: [
        {
          name: 'Loving her was easier',
          duration: 3.25
        },
        {
          name: 'Only the lonely',
          duration: 4.00
        },
        {
          name: 'Oh, pretty woman',
          duration: 2.37
        },
        {
          name: 'Belshazzar',
          duration: 2.47
        },
        {
          name: 'Brown eyed handsome man',
          duration: 8.39
        },
        {
          name: 'Girl form the north country',
          duration: 3.45
        },
        {
          name: 'Fire and rain',
          duration: 3.48
        },
        {
          name: 'Daddy sang bass',
          duration: 2.24
        },
        {
          name: 'I walk the line',
          duration: 2.13
        }
      ],
      about: {
        gift: 'Auto regalo',
        date: '2018',
        comments: 'Lo compré porque hacía mucho que no me regalaba nada'
      }
    }
  ];
}
