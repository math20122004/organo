import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import './Colaborator.css'

const Colaborator = ({colaborator, backgroundColor, onDelete, onFavorite}) => {
    const favorite = () => {
        onFavorite(colaborator.id)
    }

    const propsFavorite = {
        onClick: favorite,
        size: 25
    }

    return (
        <div className='colaborador'>
            <AiFillCloseCircle size={25} className='delete' onClick={() => onDelete(colaborator.id)}/>
            <div className='cabecalho' style={{backgroundColor: backgroundColor}}>
                <img src={colaborator.image} alt={colaborator.name} />
            </div>
            <div className='rodape'>
                <h4>{colaborator.name}</h4>
                <h5>{colaborator.position}</h5>
                <div className="favorite">
                    {colaborator.favorite 
                        ? <AiFillHeart {...propsFavorite} color="#FF0000"/> 
                        : <AiOutlineHeart {...propsFavorite}/>}
                </div>
            </div>
        </div>
    )
}

export default Colaborator