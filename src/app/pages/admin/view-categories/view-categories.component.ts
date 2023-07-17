import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {
  
  categories = []

  constructor(private categoryService: CategoryService, private _snackBar: MatSnackBar) {}
  
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((categories: any) => {
      console.log(categories)
      this.categories = categories
    }, (error) => {
      console.log(error)
      this._snackBar.open('Something went wrong', '', {
        duration: 2000
      })
    })
  }



}
