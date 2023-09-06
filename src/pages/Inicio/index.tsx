import cardapio from 'data/cardapio.json';
import styles from './Inicio.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import casa from 'assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';

export default function Inicio() {
  const navigate = useNavigate();
  let pratosRecomendados = [...cardapio];
  pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0, 3);

  return (
    <section>
      <h3 className={stylesTema.titulo}>Recomendações da cozinha</h3>
      <div className={styles.recomendados}>
        {pratosRecomendados.map(item => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={process.env.PUBLIC_URL + item.photo} alt={item.title} />
            </div>
            <button onClick={() => navigate(`/prato/${item.id}`)}
              className={styles.recomendado__botao}>Ver mais</button>
          </div>
        ))}
      </div>
      <h3 className={stylesTema.titulo}>
        Nossa casa
      </h3>
      <div className={styles.nossaCasa}>
        <img src={casa} alt="Casa do Aluroni" />
        <div className={styles.nossaCasa__endereco}>
          Rua Vergueiro, 4846<br /><br />Vila Mariana - SP
        </div>
      </div>
    </section>
  );
}