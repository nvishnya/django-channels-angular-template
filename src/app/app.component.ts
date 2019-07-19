import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public constructor(private titleService: Title, private router: ActivatedRoute) {
    
  }
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit(): void {
    // this.titleService.setTitle(this.router.snapshot.data['title']);
 }
}
