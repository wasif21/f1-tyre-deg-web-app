import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  defaultCss: string = "drop-area";
  draggedOverCss: string = "drag-over-drop-area";
  dropAreaCss: string = this.defaultCss;

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.dropAreaCss = this.draggedOverCss;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.dropAreaCss = this.defaultCss;
  }

  onFileUpload(files: any) {

  }
}
