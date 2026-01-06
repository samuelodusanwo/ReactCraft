import React from 'react';
import Button from '../ui/Button';
import Card from '../ui/Card';

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <Card 
      className="flex items-center justify-between p-4 mb-3"
      hover
    >
      <div className="flex items-center space-x-3 flex-1">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
        />
        <span
          className={`flex-1 ${
            task.completed
              ? 'line-through text-gray-500 dark:text-gray-400'
              : 'text-gray-900 dark:text-white'
          }`}
        >
          {task.text}
        </span>
      </div>
      <Button
        variant="danger"
        size="sm"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </Button>
    </Card>
  );
};

export default TaskItem;