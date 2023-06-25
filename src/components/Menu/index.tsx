import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './Menu.module.scss';
import { Link } from 'react-router-dom';

export default function Menu() {
  const rotas = [{
    label: 'Início',
    to: '/'
  },
  {
    label: 'Cardápio',
    to: '/cardapio'
  },
  {
    label: 'Sobre',
    to: '/sobre'
  }
  ];

  return (
    <nav className={styles.menu}>
      <Logo />
      <ul className={styles.menu__list}>
        {rotas.map((item, index) => (
          <li key={index} className={styles.menu__link} >
            <Link to={item.to}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}