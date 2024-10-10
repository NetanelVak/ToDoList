import { Component } from '@angular/core'; 
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { ArchiveComponent } from '../archive/archive.component';
import { RouterOutlet, RouterModule } from '@angular/router'


@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [FormsModule, CommonModule, DatePipe, RouterModule ,RouterOutlet, ArchiveComponent],
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent {
    tasks: {name: string; completed: boolean} [] = [];
    newTask: string = '';

    taskDate: string | null = null; // משתנה לאחסון התאריך
    isFirstTask: boolean = true; // משתנה לבדיקת הוספת המשימה הראשונה

    archivedTasks: { name: string; completed: boolean }[] = []; //משתנה לארכיון

    //פונקציה להוספת מטלה לרשימה
    addTask() {
        if (this.newTask.trim()) {
            if (this.isFirstTask) {
                this.taskDate = this.getShortDate(); 
                this.isFirstTask = false; 
            }
            this.tasks.push({name: this.newTask, completed: false })
            this.newTask = '';
        }
    }

    //פונקציה למחיקת מטלה מהרשימה

    removeTask(task: { name: string; completed: boolean }) {
        this.tasks = this.tasks.filter(t => t !== task);
    }
       //פונקצייה לייבוא תאריך
    getShortDate() {
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return now.toLocaleDateString('he-IL', options);
    }

    //פונקצייה למחיקת רשימה
    clearTasks() {
        this.tasks = [];
    }

    //פונקצייה להעברת הרשימה לארכיון
    archiveTasks() {
        this.archivedTasks.push(...this.tasks);
        this.tasks = [];
    }
    
}


