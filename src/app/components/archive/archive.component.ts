import { Component } from '@angular/core'; //משמש להגדרת הקומפוננטה.
import { FormsModule } from '@angular/forms'; //נדרש כאשר יש לך ניתוב באפליקציה (routing), והוא משמש כמעין מקום לשיבוץ קומפוננטות בהתאם לנתיב.
import { CommonModule } from '@angular/common';
import { ToDoListComponent } from "../to-do-list/to-do-list.component"; 
import { RouterOutlet, RouterModule } from '@angular/router'


@Component({
  selector: 'app-archive',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, RouterOutlet, ToDoListComponent],
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.scss'
})
export class ArchiveComponent {
    archivedTasks: { name: string; completed: boolean }[] = [];
}
