import * as React from 'react';
import { render } from 'react-dom';

const App = () => {
  const [name, setName] = React.useState('');

  React.useEffect(() => {
    let Name = (app: string) => setName(app);
    Name('Kakutasu JS | Art');
  });

  return (
    <>
      <h1 className='app__title'>{name}</h1>
    </>
  );
};

export default App;
render(<App />, document.getElementById('app'));
