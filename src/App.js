import { New } from './components/new/new';
import Img from './assets/descarga.jpg';

const mucus = {description: 'Una Polaird venida a más: la Fujifilm Instax Mini Evo tiene un montón de trucos que invitan a usalar con el smartphone.',
      img: Img,
      categories: 'Fotografia y video',
      title: 'Fotos impresas a golpe de palaquita',
      comments: 0,
      name: 'Miguel Cid',
      lastComment: 'Hace hace un buen día'
};


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main className="App-main">
        <New data={mucus}/>
      </main>
    </div>
  );
}

export default App;
