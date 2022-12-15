import c from './AdminProductPanel.module.scss';
import { fetchDeleteProd } from '../../../redux/productsSlice.js';
import { useNavigate } from 'react-router-dom';


export const AdminProductPanel = ({productId, dispatch}) => {
    const navigate = useNavigate();

    return <div className={c.editBlock}>
        <button onClick={() => dispatch(fetchDeleteProd(productId))}>
            Удалить товар
        </button>

        <button onClick={() => navigate(`/manage/${productId}`) }>
            Изменить товар
        </button>
    </div>


}