import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { FoodService } from "../services/food/food.service";
import { Food } from "../shared/models/food";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];

  constructor(private foodservice: FoodService) {}
  ngOnInit(): void {
    this.foods = this.foodservice.getAll();
    console.log("food is : " + this.foods);
  }
}
