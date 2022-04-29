import IconButton from './components/IconButton';
import Ellipse from './images/Ellipse.png';

const App = (): JSX.Element => {
  return (
    <div className='flex-auto items-center justify-end flex-col w-screen h-screen'>
      <IconButton text={'tailwind 👋 POG'} icon={Ellipse} />
    </div>
  );
};

export default App;
