import { Outlet, Link } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <p>
          <span role="img" aria-label="computer icon">
            💻
          </span>{' '}
          GoMerch Store
        </p>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
