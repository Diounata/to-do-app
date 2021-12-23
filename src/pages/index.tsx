import { App } from '../Components/App';

import { TaskProvider } from '../Contexts/TaskContext';
import { ThemeProvider } from '../Contexts/ThemeContext';

export default function Home() {
  return (
    <ThemeProvider>
      <TaskProvider>
        <App />
      </TaskProvider>
    </ThemeProvider>
  );
}
