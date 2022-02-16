import React, { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { sendContactEmail } from '../../services/sendMail';
import theme from '../../styles/theme';
import { FormContainer, Input, TextArea } from './styles';

export default function Form() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (loading) return; //se estiver carregando nao execute mais nada

    if (!nome.trim() || !email.trim() || !mensagem.trim()) {
      toast('Por favor, preencha todos os campos para enviar sua mensagem', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });
      return;
    }

    try {
      setLoading(true);
      await sendContactEmail(nome, email, mensagem);
      setNome('');
      setEmail('');
      setMensagem(''); //limpar os campos ao enviar

      toast('Sua mensagem foi enviada com sucesso! Aguarde o meu retorno :)', {
        style: {
          background: theme.primary,
          color: '#fff'
        }
      });
    } catch (error) {
      toast('Ocorreu um erro ao enviar sua mensagem.', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <FormContainer data-aos="fade-up">
      <Input
        placeholder="Nome"
        value={nome}
        onChange={({ target }) => setNome(target.value)}
        required
      />
      <Input
        placeholder="Email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        type="email"
        required
      />
      <TextArea
        placeholder="Por favor, digite sua mensagem"
        value={mensagem}
        onChange={({ target }) => setMensagem(target.value)}
        required
      />
      <button type="submit" disabled={loading} onClick={handleSubmit}>
        Enviar
      </button>
    </FormContainer>
  );
}
