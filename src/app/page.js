import React from 'react';
import styles from "../../styles/page.module.css";
import MainContainer from '../../components/MainContainer';
import Form from '../../components/Form';
import { useState } from 'react';
import { QRCode } from 'qrcode';

export default function Home() {

  const [qrCodeDataUrl, setQrCodeDataUrl] = useState('');

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

  return (
    <>
      <MainContainer>
        <section className={styles.section}>
          <div className={styles.main}>
            <Form onSubmit={handleSubmit} className={styles.forms} />
            <span className={styles.vertical_line}>-</span>
            <div>
              {qrCodeDataUrl && ( // Verifica se há um QR Code para exibir
                <div>
                  <h2>QR Code Gerado:</h2>
                  <QRCode value={qrCodeDataUrl} /> {/* Exibe o QR Code */}
                </div>
              )}
            </div>
          </div>
        </section>
      </MainContainer>
    </>
  );
};
