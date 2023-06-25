import styles from './Pratos.module.scss';
import { useParams, useNavigate } from 'react-router-dom';
import cardapio from 'data/cardapio.json';
import TagsPrato from 'components/TagsPrato';
import NotFound from 'pages/NotFound';
import PaginaPadrao from 'components/PaginaPadrao';

export default function Pratos() {
  const navigate = useNavigate();
  const { id } = useParams();
  const prato = cardapio.find(prato => prato.id == Number(id));

  return (
    <>
      {prato != undefined &&
        <PaginaPadrao>
          <button onClick={() => navigate(-1)}
            className={styles.voltar}>
            {'< Voltar'}
          </button>
          <section className={styles.container}>
            <h1 className={styles.titulo}>
              {prato.title}
            </h1>
            <div className={styles.imagem}>
              <img src={prato.photo} alt={prato.title} />
            </div>
            <div className={styles.conteudo}>
              <p className={styles.conteudo__descricao}>
                {prato.description}
              </p>
              <TagsPrato {...prato} />
            </div>
          </section>
        </PaginaPadrao>
      }
      {
        prato == undefined &&
        <NotFound />
      }

    </>
  );
}