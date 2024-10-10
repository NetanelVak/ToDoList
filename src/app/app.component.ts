import { Component } from '@angular/core'; //משמש להגדרת הקומפוננטה.
import { RouterOutlet, RouterModule, Routes } from '@angular/router'; //נדרש כאשר יש לך ניתוב באפליקציה (routing), והוא משמש כמעין מקום לשיבוץ קומפוננטות בהתאם לנתיב.
import { CommonModule } from '@angular/common'; //כולל פקודות בסיסיות כמו תנאים (*ngIf), לולאות (*ngFor), ועוד כלים חיוניים לכל קומפוננטה. 
import { ToDoListComponent } from "./components/to-do-list/to-do-list.component"; 
import { ArchiveComponent } from "./components/archive/archive.component";


const routes: Routes = [
    { path: '', component: ToDoListComponent }, // קומפוננטת הבית
    { path: 'archive', component: ArchiveComponent }, // קומפוננטת הארכיון
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule, 
    ToDoListComponent, 
    ArchiveComponent
  ],
  template:` <app-to-do-list></app-to-do-list> `
})
export class AppComponent {
  title = 'todo-app';
}
