import { Component } from '@angular/core'; 
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { ArchiveComponent } from '../archive/archive.component';
import { RouterOutlet, RouterModule, Routes } from '@angular/router'
import { Router } from '@angular/router'; // ייבוא ה-Router
import { DataService } from '../../services/data.service'; // ייבוא השירות



const routes: Routes = [
    { path: 'archive', component: ArchiveComponent }, // קומפוננטת הארכיון
];

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [FormsModule, CommonModule, DatePipe, RouterModule ,RouterOutlet, ArchiveComponent],
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss', ]
})
export class ToDoListComponent {
    tasks: { name: string; completed: boolean }[] = [];
    newTask: string = '';
    taskDate: string | null = null;
    createDate: string | null = null;
    isFirstTask: boolean = true;
    

    constructor(private router: Router, private dataService: DataService) {
        this.tasks = this.dataService.getTasks();
    }

    addTask() {
        if (this.newTask.trim()) {
            if (this.isFirstTask) {
                this.taskDate = this.getShortDate();
                
                this.createDate = this.taskDate; // שמירה של התאריך של הכנסת המשימה הראשונה

                this.isFirstTask = false;
            }
            const task = { name: this.newTask, completed: false };
            this.dataService.addTask(task);
            this.newTask = '';
            this.tasks = this.dataService.getTasks();

        }
    }

    removeTask(task: { name: string; completed: boolean }) {
        this.tasks = this.tasks.filter(t => t !== task);
        this.dataService.clearTasks();
        this.tasks.forEach(t => this.dataService.addTask(t));

         // איפוס taskDate כאשר נמחקו כל המטלות
         if (this.tasks.length === 0) {
            this.taskDate = null; // איפוס התאריך
            this.isFirstTask = true; // איפוס הדגל של המשימה הראשונה
        }
        
    }

    clearTasks() {
        this.tasks = [];
        this.dataService.clearTasks();
        this.createDate = null; // איפוס התאריך לאחר ניקוי הרשימות
        this.taskDate = null; // איפוס התאריך
        this.isFirstTask = true; // איפוס הדגל של המשימה הראשונה
    }

    archiveTasks() {
        if (this.tasks.length > 0 && this.createDate) {
            const archiveName = `${this.createDate}`;
            this.dataService.archiveTasks(archiveName, this.tasks);
            this.clearTasks();
            this.isFirstTask = true;
            this.createDate = null; // איפוס התאריך לאחר הארכוב
        }
    }

    getShortDate() {
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return now.toLocaleDateString('he-IL', options);
    }
}
