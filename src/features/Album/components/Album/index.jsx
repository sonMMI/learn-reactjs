import React from 'react';
import './styles.scss';

Album.propTypes = {};

function Album({ album }) {
  return (
    <div className="album">
      <div className="album__thumbnail">
        <img src={album.thumbnailUrl} alt={album.title} />
      </div>
      <p className="album__name">{album.name}</p>
    </div>
  );
}

export default Album;
