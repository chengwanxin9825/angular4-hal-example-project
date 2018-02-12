import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-team-manager',
  providers: [ TeamsService ],
  templateUrl: './team-manager.component.html',
  styleUrls: ['./team-manager.component.css']
})
export class TeamManagerComponent implements OnInit {
 
  teams: Team[];
    
  constructor( private teamService: TeamsService ) { }
 
  ngOnInit() {
    this.getAllTeams();
  }
 
  getAllTeams() {
    this.teamService.getAll()
    .subscribe((teams: Team[]) => {
        this.teams = teams;
    });
  }
 }