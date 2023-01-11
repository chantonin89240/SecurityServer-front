import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Application } from 'src/app/models/application.interface';
import { ApplicationService } from '../../providers/application.service';

@Component({
  selector: 'app-application-fiche',
  templateUrl: './application-fiche.component.html',
  styleUrls: ['./application-fiche.component.scss']
})
export class ApplicationFicheComponent implements OnInit {

  application$: Observable<Application>

  constructor(private router: ActivatedRoute
    ,private applicationService: ApplicationService) {
    
  }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.application$ = this.applicationService.getById(params['id'])
      this.application$.subscribe(app => console.log(app))
    })
  }

  edit() {
    console.log('edit')
  }
}
