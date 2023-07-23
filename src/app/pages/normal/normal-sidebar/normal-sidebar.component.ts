import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-normal-sidebar',
  templateUrl: './normal-sidebar.component.html',
  styleUrls: ['./normal-sidebar.component.css']
})
export class NormalSidebarComponent implements OnInit{
  categories = []

  constructor(private categoryService: CategoryService) {

  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data: any) => {
      this.categories = data;
    }, (error) => {
      console.log(error);
    })
  }

}
