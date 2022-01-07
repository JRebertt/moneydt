import incomeImg from '../../assets/entradas.svg'
import outcomeImg from '../../assets/saidas.svg'
import totalImg from '../../assets/total.svg'

import { Container } from "./style";



export function Summary() {
  return(

    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$1.000,00</strong>
      </div>
      <div>
        <header>
          <p>Entradas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>- R$500,00</strong>
      </div>
      <div className="highlighted-background">
        <header>
          <p>Entradas</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>

  );
}