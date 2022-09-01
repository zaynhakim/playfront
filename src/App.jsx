import CardOne from './components/CardOne';
import Button from './components/button';
import CardTwo from './components/CardTwo';
import NavItems from './components/NavItems';

function App() {
  return (
    <div className="App bg-gray-100 dark:bg-gray-900 text-black dark:text-white min-h-screen">
      <div className="flex flex-col space-y-2 max-w-md mx-auto p-4">
        <CardOne />
        <CardTwo />
        <Button />
        <NavItems />
      </div>
    </div>
  );
}

export default App;
