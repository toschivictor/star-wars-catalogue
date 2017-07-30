import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})

export class PresentationComponent implements OnInit {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['home']);
    }, 25000);
  }
}
