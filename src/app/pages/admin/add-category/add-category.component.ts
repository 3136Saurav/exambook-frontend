import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  @ViewChild("addCategoryForm") addCategoryForm: NgForm

  category = {
    title: '',
    description: ''
  }

  constructor(private categoryService: CategoryService, private _snackBar: MatSnackBar, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
  }

  onAddCategoryFormSubmit() {
    if (!this.addCategoryForm.valid) {
      console.log("Form Incomplete!")
      return;
    }

    this.categoryService.addCategory(this.category).subscribe((data) => {
      console.log(this.route)
    }, (error) => {
      console.log(error)
      this._snackBar.open('Something went wrong', '', {
        duration: 2000
      })
    })    


  }
}
