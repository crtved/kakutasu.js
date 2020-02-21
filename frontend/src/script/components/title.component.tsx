import * as React from 'react';
import { render } from 'react-dom';

const App = () => {
  const [name, setName] = React.useState('');

  React.useEffect(() => {
    const Name = (app: string) => {
      setName(app);
    };
    Name('Kakutasu JS | Art');
  });

  return (
    <React.Fragment>
      <h1 className='app__title'>{name}</h1>
    </React.Fragment>
  );
};

export default App;
render(<App />, document.getElementById('app'));
