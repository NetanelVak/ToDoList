import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service'; // ייבוא השירות לניהול המשימות בארכיון

@Component({
  selector: 'app-archive',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, RouterOutlet],
  templateUrl: './archive.component.html', 
  styleUrls: ['./archive.component.scss']
  
})
export class ArchiveComponent {
  archivedTaskLists: { name: string; tasks: { name: string; completed: boolean }[] }[] = [];

  constructor(private dataService: DataService) {
    this.archivedTaskLists = this.dataService.getArchivedTaskLists(); // קבלת הרשימות שנשמרו בארכיון
  }

  // פונקציה למחיקת מטלה מרשימה
  removeTask(taskListName: string, task: { name: string; completed: boolean }) {
    this.dataService.removeTaskFromArchivedList(taskListName, task); // מחיקת המטלה מהשירות
    this.archivedTaskLists = this.dataService.getArchivedTaskLists(); // עדכון הרשימות
  }
}
