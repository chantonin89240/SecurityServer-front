import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/providers/authenticate.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  constructor(private router: Router, private authenticateService: AuthenticateService) {}

  disconnect() {
    this.authenticateService.logout()
    this.router.navigate([''])
  }
}
