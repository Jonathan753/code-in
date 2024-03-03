import React from 'react';
import styles from "../../styles/page.module.css";
import MainContainer from '../../components/MainContainer';
import Form from '../../components/Form';
import Image from 'next/image';
import teste from '../../public/teste.png'

const Home = () => {
  const handleSubmit = async (dataForms) => {
    try {
      const response = await fetch('/api/gerarQRCode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataForms),
      });
      if (response.ok) {
        // Lógica para lidar com a resposta e exibir o QR code
        const qrCodeData = await response.json();
        console.log('QR Code gerado:', qrCodeData);
      } else {
        console.error('Erro ao gerar QR Code');
      }
    } catch (error) {
      console.error('Erro ao enviar dados do formulário:', error);
    }
  };
}

export default function Home() {
  return (
    <>
      <MainContainer>
        <section className={styles.section}>
          <div className={styles.main}>
            <Form onSubmit={handleSubmit} className={styles.forms} />
            <span className={styles.vertical_line}>-</span>
            <Image className={styles.qrcode}
              src={teste}
              alt='teste'
              width={200}
              height={200}
            />
          </div>
        </section>
      </MainContainer>
    </>
  );
};
