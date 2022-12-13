import './App.css';
import { Link, Route, Routes, useParams } from 'react-router-dom';

const Home = () => <h1>Home</h1>;
const Dashboard = () => <h1>Dashboard</h1>;
const SearchPage = () => {
  const tacos = ['al pastor', 'chili', 'otros'];
  return (
    <div>
      <h1>Search page</h1>
      <ul>
        {tacos.map((taco) => (
          <li key={taco}>
            <Link to={`/tacos/${taco}`}>{taco}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Tacos = () => {
  const { name } = useParams();
  return (
    <div>
      <h1>Tacos</h1>
      <h2>{name}</h2>
    </div>
  );
};

function App() {
  return (
    <div className='App'>
      <header>
        <nav>
          <ul>
            <li>
              <Link to={'/'}>Home page</Link>
            </li>
            <li>
              <Link to={'/dashboard'}>Dashboard page</Link>
            </li>
            <li>
              <Link to={'/search'}>Search page</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/dashboard'} element={<Dashboard />} />
        <Route path={'/search'} element={<SearchPage />} />
        <Route path={'/tacos/:name'} element={<Tacos />} />
        <Route path={'*'} element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
