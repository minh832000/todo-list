import TodoInput from '@/components/TodoInput/TodoInput';
import Todos from '@/components/Todos/Todos';

const App = () => {
  return (
    <div className="flex items-center justify-center h-full bg-accent-bg-color text-black">
      <div className="w-1/2 h-3/4 px-7 py-5 rounded-lg bg-gray-100">
        <Todos />
        <TodoInput />
      </div>
    </div>
  );
};

export default App;
