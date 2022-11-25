import { Component, OnInit } from '@angular/core';
import { Application } from '../models/application.interface';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  applications: Application[]

  ngOnInit(): void {
    this.applications = [
      {name: "App1", url: "Url1", claim: "Claim1"},
      {name: "App2", url: "Url2", claim: "Claim2"},
      {name: "App3", url: "Url3", claim: "Claim3"},
      {name: "Youtube", url: "https://youtube.com", claim: "{ data }"},
      {name: "App1App1App1App1App1App1App1App1App1", url: "Url1Url1Url1Url1Url1Url1Url1Url1Url1Url1Url1Url1Url1Url1Url1Url1Url1Url1", claim: "Claim1Claim1Claim1Claim1Claim1Claim1Claim1Claim1Claim1Claim1Claim1Claim1Claim1Claim1Claim1Claim1Claim1Claim1Claim1Claim1Claim1Claim1Claim1Claim1Claim1Claim1Claim1Claim1Claim1Claim1"},
      {name: "App2", url: "Url2", claim: "Claim2"},
      {name: "App3", url: "Url3", claim: "Claim3"},
      {name: "App4", url: "Url4", claim: "Claim4"},
      {name: "App1", url: "Url1", claim: "Claim1"},
      {name: "App2", url: "Url2", claim: "Claim2"},
      {name: "App3", url: "Url3", claim: "Claim3"},
      {name: "App4", url: "Url4", claim: "Claim4"},
      {name: "App1", url: "Url1", claim: "Claim1"},
      {name: "App2", url: "Url2", claim: "Claim2"},
      {name: "App3", url: "Url3", claim: "Claim3"},
      {name: "App4", url: "Url4", claim: "Claim4"},
      {name: "App1", url: "Url1", claim: "Claim1"},
      {name: "App2", url: "Url2", claim: "Claim2"},
      {name: "App3", url: "Url3", claim: "Claim3"},
      {name: "App4", url: "Url4", claim: "Claim4"},
    ]
  }
}
