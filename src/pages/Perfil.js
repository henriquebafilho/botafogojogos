import Times from '../Times';
import Tabs from '../components/Tabs';
import common from '../common';

function Perfil(props) {
  const meuTime = props.meuTime;
  let meusJogos = common.jogos;
  meusJogos.sort(function (a, b) {
    return a.data < b.data ? -1 : a.data > b.data ? 1 : 0;
  });

  return (
    <>
      <div className="App-header" style={{ backgroundColor: Times(props.meuTime).backgroundColor }}>
        <div style={{ margin: '20px' }}>
          <p style={{ display: 'inline', color: Times(props.meuTime).letterColor }}>
            Botafogo de Futebol e Regatas
          </p>
        </div>
        <img
          src={process.env.PUBLIC_URL + '/escudos/' + Times(props.meuTime).escudo + '.png'}
          className="App-logo"
          alt={"Escudo do " + props.meuTime}
          style={{ verticalAlign: 'middle', width: '100px', height: '100px' }}
          loading='lazy'
          onError={(e) => { e.target.src = '/escudos/escudo.png' }}
        />
        <br />
        <Tabs meuTime={meuTime} meusJogos={meusJogos} />
      </div>
    </>
  )
}

export default Perfil;