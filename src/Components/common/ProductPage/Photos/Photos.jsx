import c from './Photos.module.scss';
import { useState } from 'react';


export const Photos = ({ imageUrl }) => {
    
    const [image, setImage] = useState('main');



    return <div className={c.leftPart}>

        <div className={c.miniPhotos}>

            <div onClick={() => setImage('main')} >
                <img alt='' src={`http://localhost:4444${imageUrl.main}`}
                    style={image === 'main' ? { borderColor: '#57005C' } : null} />
            </div>

            <div onClick={() => setImage('side')} >
                <img alt='' src={`http://localhost:4444${imageUrl.side}`}
                    style={image === 'side' ? { borderColor: '#57005C' } : null} />
            </div>

            <div onClick={() => setImage('perspective')} >
                <img alt='' src={`http://localhost:4444${imageUrl.perspective}`}
                    style={image === 'perspective' ? { borderColor: '#57005C' } : null} />
            </div>

        </div>


        <div className={c.carausel}>
            <div style={image === 'main' ? { left: '40px' } : { left: '-100vw' }} >
                <img alt='' src={`http://localhost:4444${imageUrl.main}`} />
            </div>

            <div style={image === 'side' ? { left: '40px' } : { left: '100vw' }}>
                <img alt='' src={`http://localhost:4444${imageUrl.side}`} />
            </div>

            <div style={image === 'perspective' ? { left: '40px' } : { left: '100vw' }}>
                <img alt='' src={`http://localhost:4444${imageUrl.perspective}`} />
            </div>
        </div>

    </div>


}