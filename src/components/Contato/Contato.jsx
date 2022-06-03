import React, { useContext } from 'react';

// context
import { StateContext } from '../../context/StateProvider';

//styles
import {
  ContatoStyled,
  ContatoGridContainer,
  ContatoFirstColum,
  ContatoFormContainer,
  ContatoSecondColum,
  ContatoTags,
} from '../../styles/Contato/Contato.styled';

const Contato = () => {
  const prevDataForm = {
    name: '',
    email: '',
    tel: '',
    message: '',
  };
  const { dataForm, setDataForm } = useContext(StateContext);

  const onInputChange = (e) => {
    setDataForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const onSubmitClick = (e) => {
    e.preventDefault();

    setDataForm((prevState) => {
      return { ...prevState, ...prevDataForm };
    });
  };

  return (
    <ContatoStyled id="contato">
      <h1>Contato</h1>
      <ContatoGridContainer>
        <ContatoFirstColum>
          <ContatoFormContainer>
            <form
              //   ref={form}
              onSubmit={onSubmitClick}
              method="POST"
              name="contact-form"
            >
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nome"
                value={dataForm.name}
                onChange={onInputChange}
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={dataForm.email}
                onChange={onInputChange}
              />
              <input
                type="tel"
                id="tel"
                name="tel"
                placeholder="Telefone"
                value={dataForm.tel}
                onChange={onInputChange}
              />
              <textarea
                name="message"
                placeholder="Mensagem"
                id="message"
                cols="30"
                rows="10"
                value={dataForm.message}
                onChange={onInputChange}
              ></textarea>

              <button type="submit">Enviar</button>
            </form>
          </ContatoFormContainer>
        </ContatoFirstColum>
        <ContatoSecondColum>
          <ContatoTags>
            <p>Telefone e WhatsApp</p>
            <span itemProp="telephone"></span>
            <a href="tel:+5511973314257">+55 (11) 97331-4257</a>
          </ContatoTags>
          <ContatoTags>
            <p>Quer fazer parte do nosso casting?</p>
            <p>
              Mande seu material para <span itemProp="email"></span>
              <a href="mailto:casting@agenciablessed.com.br?subject=Casting">
                casting@agenciablessed.com.br
              </a>
            </p>
          </ContatoTags>
        </ContatoSecondColum>
      </ContatoGridContainer>
    </ContatoStyled>
  );
};

export default Contato;
