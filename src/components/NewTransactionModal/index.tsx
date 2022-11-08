import { FormEvent, useState } from 'react';
import Modal from 'react-modal'
import { api } from '../services/api';

import closeImg from '../../assets/fechar.svg'
import incomeImg from '../../assets/entradas.svg'
import outcomeImg from '../../assets/saidas.svg'

import { Container, TransactionTypeContainer, RadioBox } from './style';
import { useTransaction } from '../../hooks/useTransaction';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createTransaction } = useTransaction();

  const [title, setTitle] = useState('');
  const [amount, setAmout] = useState(0);
  const [category, setCategory] = useState('');

  const [type, setType] = useState('deposit');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    })
    setTitle('');
    setAmout(0);
    setCategory('');
    setType('deposit');
    onRequestClose()

  };

  return (

    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>

        <h2>Cadastrar transação</h2>

        <input
          placeholder="Título"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input
          placeholder="Valor"
          value={amount}
          onChange={event => setAmout(Number(event.target.value))}
        />

        <TransactionTypeContainer>

          <RadioBox
            type="button"
            onClick={() => { setType('deposit'); }}
            isActive={type === 'deposit'}
            activeColors="green"
          >

            <img src={incomeImg} alt="Entradas" />
            <span>Entradas</span>

          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => { setType('withdraw'); }}
            isActive={type === 'withdraw'}
            activeColors="red"
          >

            <img src={outcomeImg} alt="Saídas" />
            <span>Saídas</span>

          </RadioBox>

        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>

      </Container>
    </Modal>
  );
}