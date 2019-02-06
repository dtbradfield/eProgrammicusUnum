import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-writer',
  templateUrl: './the-writer.component.html',
  styleUrls: ['./the-writer.component.css']
})
export class TheWriterComponent implements OnInit {
  revealWriting: boolean = false;
  clickMessage: string = 'reveal'
  essays = [
    {title: "Disciples and Handmaids Asunder",
    description: "The deconstruction of religious explanations for The Handmaid’s Tale.",
    link: "https://medium.com/dtbradfieldportfolio/disciples-and-handmaids-asunder-91fa4d77a3ec"},
    {title: "Ecocritical Considerations for The Handmaid’s Tale",
    description: "Ecofeminism and The Handmaid’s Tale.",
    link: "https://medium.com/dtbradfieldportfolio/ecocritical-considerations-for-the-handmaids-tale-4c3a9027ee40"},
    {title: "She and Her Still Pleases I; He and Him Overreaches High",
    description: "A critical look at queer theory and The Handmaid’s Tale.",
    link: "https://medium.com/dtbradfieldportfolio/she-and-her-still-pleases-i-he-and-him-overreaches-high-12468fdaa4e"},
    {title: "All the Work Without the Worker; All the Slaughter Sans the Soldier:",
    description: "Migrant and Remote Labor, and the future of Virtual Warfare.",
    link: "https://medium.com/dtbradfieldportfolio/all-the-work-without-the-worker-all-the-slaughter-sans-the-soldier-b8f7eeabf580"}
  ]

  constructor() { }

  ngOnInit() {
  }

  onRevealWriting() {
    this.revealWriting = !this.revealWriting;
    if ( this.revealWriting ) {
      this.clickMessage = 'hide'
    } else { this.clickMessage = 'reveal' }
  }

}