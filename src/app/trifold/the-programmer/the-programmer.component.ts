import { Component, OnInit } from '@angular/core';
import { StarredConfigService } from '../../starred.service';
import { IStarred } from '../../starred-interface';


@Component({
  selector: 'app-the-programmer',
  templateUrl: './the-programmer.component.html',
  styleUrls: ['./the-programmer.component.css']
})
export class TheProgrammerComponent implements OnInit {
  public projects: IStarred;
  revealProjects: boolean = false;
  clickMessage: string = 'reveal';


  constructor(private _starredService: StarredConfigService) { }

  ngOnInit() {
    this._starredService.getConfig()
      .subscribe(data => {
        this.projects = data;
      });
  }

  onRevealCodeProjects() {
    this.revealProjects = !this.revealProjects;
    if ( this.revealProjects ) {
      this.clickMessage = 'hide'
    } else { this.clickMessage = 'reveal' }
  }

}
