import { Routes } from '@angular/router';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { ArchiveComponent } from './components/archive/archive.component'; // ייבוא הקומפוננטה

export const routes: Routes = [
  { path: '', component: ToDoListComponent },  // הנתיב הראשי
  { path: 'archive', component: ArchiveComponent },  // נתיב ל-ArchiveComponent
];
