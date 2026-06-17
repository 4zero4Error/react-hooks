import useFetch from './useFetch';
import './photoGallery.css';

// photos in json format from https://jsonplaceholder.typicode.com/photos?_limit=12
function PhotoGallery() {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/photos?_limit=12' 
  );

  // Colors for placeholders
  const colors = [
    '#92c952', '#771796', '#24f355', '#d32776',
    '#f66b97', '#56a8c2', '#b0f7cc', '#54176f',
    '#51aa97', '#810b14', '#1ee8a4', '#66b7d2'
  ];

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading photos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">ERROR:{error}</p>
      </div>
    );
  }

  return (
    <div className="photo-gallery">
      <h1>Photos</h1>
      <div className="photo-grid">
        {data?.map((photo) => {
          const color = colors[photo.id % colors.length];
          return (
            <div key={photo.id} className="photo-card">
              <div className="photo-placeholder" style={{backgroundColor: color}}>
                600 x 600
              </div>
              <p>{photo.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PhotoGallery;
