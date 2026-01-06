import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import TaskItem from '../components/tasks/TaskItem';
import Modal from '../components/ui/Modal';

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [filter, setFilter] = useState('all');
  const [newTask, setNewTask] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTask = () => {
    if (newTask.trim()) {
      const task = {
        id: Date.now(),
        text: newTask.trim(),
        completed: false,
        createdAt: new Date().toISOString(),
      };
      setTasks([...tasks, task]);
      setNewTask('');
      setIsModalOpen(false);
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const clearCompleted = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const stats = {
    total: tasks.length,
    completed: tasks.filter(task => task.completed).length,
    active: tasks.filter(task => !task.completed).length,
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Task Manager
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your tasks efficiently
        </p>
      </div>

      {/* Stats */}
      <Card className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {stats.total}
            </p>
            <p className="text-gray-600 dark:text-gray-400">Total Tasks</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">
              {stats.completed}
            </p>
            <p className="text-gray-600 dark:text-gray-400">Completed</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
              {stats.active}
            </p>
            <p className="text-gray-600 dark:text-gray-400">Active</p>
          </div>
        </div>
      </Card>

      {/* Controls */}
      <Card className="mb-6">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex space-x-2">
            {['all', 'active', 'completed'].map((filterType) => (
              <Button
                key={filterType}
                variant={filter === filterType ? 'primary' : 'secondary'}
                size="sm"
                onClick={() => setFilter(filterType)}
              >
                {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
              </Button>
            ))}
          </div>
          <div className="flex space-x-2">
            <Button
              variant="success"
              onClick={() => setIsModalOpen(true)}
            >
              Add Task
            </Button>
            {stats.completed > 0 && (
              <Button
                variant="danger"
                size="sm"
                onClick={clearCompleted}
              >
                Clear Completed
              </Button>
            )}
          </div>
        </div>
      </Card>

      {/* Task List */}
      <Card>
        {filteredTasks.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              {tasks.length === 0 
                ? "No tasks yet. Add your first task!" 
                : `No ${filter} tasks found.`}
            </p>
          </div>
        ) : (
          <div>
            {filteredTasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={toggleTask}
                onDelete={deleteTask}
              />
            ))}
          </div>
        )}
      </Card>

      {/* Add Task Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Task"
        size="md"
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="task" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Task Description
            </label>
            <input
              type="text"
              id="task"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTask()}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="Enter your task..."
              autoFocus
            />
          </div>
          <div className="flex justify-end space-x-3">
            <Button
              variant="secondary"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={addTask}
              disabled={!newTask.trim()}
            >
              Add Task
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TaskManager;