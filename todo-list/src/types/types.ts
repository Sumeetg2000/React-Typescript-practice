export type taskType = { id: number; description: string; completed: boolean };
export interface taskListprop {
  allTasks: taskType[];
  completedtask: Function;
}
export interface inputBoxprop {
  setAllTasks: Function;
  setShowInputBox: Function;
}
