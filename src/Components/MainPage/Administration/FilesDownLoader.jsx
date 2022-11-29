import instance from '../../../redux/API/api';
import c from './FilesDownLoader.module.scss';

export const FilesDownloader = ({ images, setImages }) => {

    const handleChangeFile = async (e, currentImg) => {
        try {
            const formData = new FormData();
            const file = e.target.files[0];
            formData.append('image', file);
            const { data } = await instance.post('/upload', formData);
            const newI = {...images, [currentImg]: data.url}
            setImages(newI);
        } catch (error) {
            console.warn(error);
            alert('не получилось загрузить фото')
        }
    }


    return <div className={c.downloader}>
        <div>
            <label>главное фото
                <input type='file' id='imageUrl' name='imageUrl'
                    onChange={(e) => handleChangeFile(e, 'main' )} />

            </label>
            {images.main && <img src={`${process.env.REACT_APP_API_URL}${images.main}`} alt='' />}
        </div>

        <div>
            <label>фото сбоку
                <input type='file' id='imageUrl' name='imageUrl'
                    onChange={(e) => handleChangeFile(e, 'side')} />
            </label>
            {images.side && <img src={`${process.env.REACT_APP_API_URL}${images.side}`} alt='' />}
        </div>

        <div>
            <label>фото в перспективе
                <input type='file' id='imageUrl' name='imageUrl'
                    onChange={(e) => handleChangeFile(e, 'perspective')} />
            </label>
            {images.perspective && <img src={`${process.env.REACT_APP_API_URL}${images.perspective}`} alt='' />}
        </div>

        


    </div>
}