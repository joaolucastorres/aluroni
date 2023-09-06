import styles from './Item.module.scss';
import { Prato } from 'types/Cardapio';
import TagsPrato from 'components/TagsPrato';
import { useNavigate } from 'react-router-dom';


export default function Item(props: Prato) {
  const navigate = useNavigate();
  const { id, title, description, photo } = props;

  return (
    <div className={styles.item} onClick={() => navigate(`/prato/${id}`)}>
      <div className={styles.item__imagem}>
        <img src={process.env.PUBLIC_URL + photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <TagsPrato {...props} />
      </div>
    </div>
  );
}