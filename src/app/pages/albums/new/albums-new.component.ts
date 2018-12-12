import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AlbumService } from '../../../services/album.service';
import { AlbumModel } from '../../../model/album.model';

@Component({
  selector: 'album-new',
  templateUrl: './albums-new.component.html',
  styleUrls: ['./albums-new.component.scss']
})
export class AlbumsNewComponent implements OnInit {

  albumForm: FormGroup;

  isEditing: Boolean = false;
  listRoute: Array<any> = [];

  players: FormArray;
  tracklistA: FormArray;
  tracklistB: FormArray;
  gift: FormControl;
  date: FormControl;
  comments: FormControl;

  constructor(
    private fb: FormBuilder,
    private albumService: AlbumService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // console.log(this.items);
    // console.log(this.albumService.selectedAlbum.$key);
    if (this.albumService.selectedAlbum.$key) {
      this.isEditing = true;
      this.gift = new FormControl(this.albumService.selectedAlbum.about.gift, Validators.required);
      this.date = new FormControl(this.albumService.selectedAlbum.about.date, Validators.required);
      this.comments = new FormControl(this.albumService.selectedAlbum.about.comments, Validators.required);

      this.albumForm = this.fb.group({
        $key: [this.albumService.selectedAlbum.$key, null],
        id: [this.albumService.selectedAlbum.id, [Validators.required, Validators.pattern('[0-9]*')]],
        title: [this.albumService.selectedAlbum.title, Validators.required],
        artist: [this.albumService.selectedAlbum.artist, Validators.required],
        city: [this.albumService.selectedAlbum.city, null],
        year: [this.albumService.selectedAlbum.year, null],
        path: [this.albumService.selectedAlbum.path, null],
        alt: [this.albumService.selectedAlbum.alt, null],
        linkVideo: [this.albumService.selectedAlbum.linkVideo, null],
        players: this.fb.array([]),
        tracklistA: this.fb.array([]),
        tracklistB: this.fb.array([]),
        about: this.fb.group({
          gift: this.gift,
          date: this.date,
          comments: this.comments
        })
      });

      this.setPlayers();
      this.setTracks(true);
      this.setTracks(false);
    } else {
      this.isEditing = false;
      this.gift = new FormControl('', Validators.required);
      this.date = new FormControl('', Validators.required);
      this.comments = new FormControl('', Validators.required);

      this.albumForm = this.fb.group({
        $key: [null, Validators.pattern('[0-9]*')],
        id: ['', [Validators.required, Validators.pattern('[0-9]*')]],
        title: ['', Validators.required],
        artist: ['', Validators.required],
        city: ['', null],
        year: ['', null],
        path: ['', null],
        alt: ['', null],
        linkVideo: ['', null],
        players: this.fb.array([this.createItem('player')]),
        tracklistA: this.fb.array([this.createItem('track')]),
        tracklistB: this.fb.array([this.createItem('track')]),
        about: this.fb.group({
          gift: this.gift,
          date: this.date,
          comments: this.comments
        })
      });
    }
  }

  setPlayers() {
    const control = <FormArray>this.albumForm.controls.players;
    for (const key in this.albumService.selectedAlbum.players) {

      // skip loop if the property is from prototype
      if (!this.albumService.selectedAlbum.players.hasOwnProperty(key)) {
        continue;
      }

      const obj = this.albumService.selectedAlbum.players[key];
      control.push(this.fb.group({
        name: obj.name,
        instrument: obj.instrument
      }));
    }
  }

  setTracks(isSideA: boolean) {

    if (isSideA) {
      const control = <FormArray>this.albumForm.controls.tracklistA;
      for (const key in this.albumService.selectedAlbum.tracklistA) {

        if (!this.albumService.selectedAlbum.tracklistA.hasOwnProperty(key)) {
          continue;
        }

        const obj = this.albumService.selectedAlbum.tracklistA[key];
        control.push(this.fb.group({
          name: obj.name,
          duration: obj.duration
        }));
      }
    } else {
      const control = <FormArray>this.albumForm.controls.tracklistB;
      for (const key in this.albumService.selectedAlbum.tracklistB) {

        if (!this.albumService.selectedAlbum.tracklistB.hasOwnProperty(key)) {
          continue;
        }

        const obj = this.albumService.selectedAlbum.tracklistB[key];
        control.push(this.fb.group({
          name: obj.name,
          duration: obj.duration
        }));
      }
    }
  }

  // Initializes an Object
  // Keys depends by the parameters: 'player' || 'track'
  createItem(target: string): FormGroup {
    if (target === 'player') {
      return this.fb.group({
        name: '',
        instrument: ''
      });
    } else {
      return this.fb.group({
        name: '',
        duration: ''
      });
    }
  }

  // Creates an FormArray
  // Parameters: 'player' || 'sideA' || 'sideB'
  addItem(target: string): void {
    if (target === 'player') {
      this.players = this.albumForm.get('players') as FormArray;
      this.players.push(this.createItem('player'));
    } else if (target === 'sideA') {
      this.tracklistA = this.albumForm.get('tracklistA') as FormArray;
      this.tracklistA.push(this.createItem('track'));
    } else {
      this.tracklistB = this.albumForm.get('tracklistB') as FormArray;
      this.tracklistB.push(this.createItem('track'));
    }
  }

  // Removes an array position
  // Parameters: 'player' || 'sideA' || 'sideB', position
  removeItem(target: string, i: number) {
    let control;
    if (target === 'player') {
      control = <FormArray>this.albumForm.controls['players'];
    } else if (target === 'sideA') {
      control = <FormArray>this.albumForm.controls['tracklistA'];
    } else {
      control = <FormArray>this.albumForm.controls['tracklistB'];
    }
    control.removeAt(i);
  }

  onSubmit() {

    // console.log(this.albumForm);
    // console.log(this.albumForm.valid);

    if (!this.albumForm.valid) {
      return;
    }

    if (this.albumForm.value.$key == null) {
      this.albumService.insertAlbum(this.albumForm.value);
      this.listRoute.push('../list');
    } else {
      this.listRoute.push('../../list');
      this.albumService.updateAlbum(this.albumForm.value);
    }

    this.router.navigate(this.listRoute, {
      relativeTo: this.activatedRoute
    });

    this.resetForm(this.albumForm);
  }

  resetForm(albumForm?: FormGroup) {
    if (albumForm != null) {
      albumForm.reset();
      this.albumService.selectedAlbum = new AlbumModel();
    }
  }
}
