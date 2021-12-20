import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, MatDividerModule],
  exports: [HeaderComponent, FooterComponent],
})
export class SharedModule {}
