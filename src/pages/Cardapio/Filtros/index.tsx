import filtros from './filtros.json';
import styles from './Filtros.module.scss';
import classNames from 'classnames';

type IOpcao = typeof filtros[0]

interface Props {
  filtro: number | null,
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filtros({ filtro, setFiltro }: Props) {
  function selecionaFiltro(opcao: IOpcao) {
    if (opcao.id === filtro) return setFiltro(null);
    return setFiltro(opcao.id);
  }

  return (
    <div className={styles.filtros}>
      {
        filtros.map(opcao => (
          <button className={classNames({
            [styles.filtros__filtro]: true,
            [styles['filtros__filtro--ativo']]: opcao.id === filtro
          })}
          key={opcao.id}
          onClick={() => selecionaFiltro(opcao)}>
            {opcao.label}
          </button>
        )

        )
      }
    </div>
  );
}