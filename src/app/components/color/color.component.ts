import { Component, OnInit } from '@angular/core';
import { ColorService } from '../../services/color.service';
import { Color } from '../../models/color';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors: Color[] = [];
  currentColor: Color | null;
  filterColorText="";

  constructor(private colorService: ColorService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getColors();
  }

  getColors() {
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data;
    });
  }

  setCurrentColor(color: Color) {
    this.currentColor = color;
  }

  getCurrentColorClass(color: Color) {
    return color === this.currentColor ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action";
  }

  getAllColorClass() {
    return !this.currentColor ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action";
  }

  setGetAllColor() {
    this.currentColor = null;
  }

  removeColorQueryParam() {
    const queryParams = { ...this.activatedRoute.snapshot.queryParams };
    delete queryParams['colorId'];
    return queryParams;
  }
}
