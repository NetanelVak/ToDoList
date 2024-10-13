import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private tasks: { name: string; completed: boolean }[] = [];
  private archivedTaskLists: { name: string; tasks: { name: string; completed: boolean }[] }[] = [];

  getTasks() {
    return this.tasks;
  }

  addTask(task: { name: string; completed: boolean }) {
    this.tasks.push(task);
  }

  clearTasks() {
    this.tasks = [];
  }

  // פונקציה לארכוב רשימות שלמות עם שם
  archiveTasks(taskListName: string, tasks: { name: string; completed: boolean }[]) {
    this.archivedTaskLists.push({ name: taskListName, tasks });
  }

  // קבלת כל הרשימות בארכיון
  getArchivedTaskLists() {
    return this.archivedTaskLists;
  }

  // פונקציה להסרת מטלה מרשימה בארכיון
  removeTaskFromArchivedList(taskListName: string, task: { name: string; completed: boolean }) {
    const taskList = this.archivedTaskLists.find(list => list.name === taskListName);
    if (taskList) {
      taskList.tasks = taskList.tasks.filter(t => t.name !== task.name); // מסנן את המטלה
    }
  }
}
