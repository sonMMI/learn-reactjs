import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Tản Mạn Cùng Indie Việt',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/5/e/2/3/5e2369c6765309b600cccd5e4f1ca738.jpg' 
        },
        {
            id: 2,
            name: 'Tiềm Năng V-Pop',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/9/0/b/b/90bb3d69f29efadd49f9f3af6583da17.jpg' 
        },
        {
            id: 3,
            name: 'R&B Việt Ngày Nay',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/e/2/c/3/e2c3c3bf9dd772ef4872a84c5e11d93a.jpg'
        }
    ];

    return (
        <div>
            <h2>Có thể bạn cũng sẽ thích đấy</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;