import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectionsService {

  private selections = [
    {id: 28, name: 'Action', feel: 'Need to fight with someone', emoji: '😬'}, 
    {id: 12, name: 'Adventure', feel: 'Want to go somewhere!', emoji: '🤫'}, 
    {id: 16, name: 'Animation', feel: 'Childhood memories', emoji: '😳'}, 
    {id: 35, name: 'Comedy', feel: 'Laughfing AF', emoji: '🤪'}, 
    {id: 80, name: 'Crime', feel: 'Guns and blood', emoji: '😤'}, 
    {id: 99, name: 'Documentary', feel: 'Need to study something', emoji: '🧐'}, 
    {id: 18, name: 'Drama', feel: 'Just classic', emoji: '😉'}, 
    {id: 10751, name: 'Family', feel: 'Family', emoji: '👨‍👩‍👧‍👧'}, 
    {id: 14, name: 'Fantasy', feel: 'Imagining some fantasies', emoji: '😇'}, 
    {id: 36, name: 'History', feel: 'About hundreds years ago', emoji: '🤓'}, 
    {id: 27, name: 'Horror', feel: 'Want to see a ghost', emoji: '😱'}, 
    {id: 10402, name: 'Music', feel: 'I am singing', emoji: '🤗'}, 
    {id: 9648, name: 'Mystery', feel: 'Want to be the Sherlock', emoji: '🤠'}, 
    {id: 10749, name: 'Romance', feel: 'Want to hug a pillow', emoji: '😘'}, 
    {id: 878, name: 'Science Fiction', feel: 'Artificial intelligence', emoji: '😎'}, 
    {id: 10770, name: 'TV Movie', feel: 'Need to watch TV', emoji: '😏'}, 
    {id: 53, name: 'Thriller', feel: 'Oh who did it', emoji: '🤔'}, 
    {id: 10752, name: 'War', feel: 'Soldiers', emoji: '😯'}, 
    {id: 37, name: 'Western', feel: 'Old guns and stuff', emoji: '🤨'}
  ];

  constructor() { }

  getSelections(): any[] {
    let startIndex = (Math.random() * 100000) % (this.selections.length - 3);
    let endIndex = startIndex + 3;
    return this.selections.slice(startIndex, endIndex);
  }

}
