import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {HexcodeService} from '../../service/hexcode-service/hexcode-service';

@Component({
  selector: 'app-color-palette',
  imports: [CommonModule],
  templateUrl: './color-palette.html',
  styleUrl: './color-palette.css'
})
export class ColorPalette {
  hexcodes: string[] = [];
  name: string = "";

  constructor(private hexcodeService: HexcodeService) {
  }

  generateHexcode() {
    this.hexcodeService.getRandom().subscribe((res: any) => {
      this.name = res.name;
      this.hexcodes = res.hexcodes;
    });
  }
}
