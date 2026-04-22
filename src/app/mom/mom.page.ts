import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mom',
  templateUrl: './mom.page.html',
  styleUrls: ['./mom.page.scss'],
})
export class MomPage implements OnInit {

  emojis: string[] = ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇", "👋", "😮‍💨", "🫥", "🫡", "🫣", "😱","😶‍🌫️","🥺","🥸","😌","🥹","😿", "🙌", "💃", "🐸"];
  randomEmoji: string;
  rusty: boolean = false;

  constructor() {
    this.randomEmoji = this.generateEmoji()
  }

  ngOnInit() {
  }

  generateEmoji() {
    return this.emojis[Math.floor(Math.random() * this.emojis.length)];
  }

  isRusty() {
    this.randomEmoji = "🖕"
    this.rusty = true;
  }

  notRusty() {
    if (!this.rusty) this.randomEmoji = this.generateEmoji()
  }

  next() {
    if (!this.rusty) this.randomEmoji = this.generateEmoji()
  }

}
