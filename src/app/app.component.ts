declare var google: any;
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    google.accounts.id.initialize({
      // client_id: '298527698559-csqs17fneirjhta3d9lgsghgd1rv99i2.apps.googleusercontent.com',
      client_id: '298527698559-dr2gnkq2lhsj5ftfmpnr5o30kvbekfqh.apps.googleusercontent.com',
      callback: (resp: any) => {
        console.log(resp);
        
      }
    });

    google.accounts.id.renderButton(document.getElementById('google-btn'), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width: 350
    })
  }

}
