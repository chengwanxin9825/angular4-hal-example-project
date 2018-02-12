import { Injectable, Injector } from '@angular/core';
import { RestService } from 'angular4-hal';
import { Team } from './team';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TeamsService extends RestService<Team> {
 
  constructor(injector: Injector) {
    console.log('working!');
    super(Team, "teams", injector);
    console.log('not working!');
  }
 
  public findByName(name: string): Observable<Team[]> {
 
    let options: any = {params: [{key: "name", value: name}]};
    return this.search("findByName", options);
  }
}