import QRCode from 'qrcode';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).end(); // Método não permitido
        return;
    }

    try {
        const { name, birth, adress, phone } = req.body;
        const informationQR = `${name} ${birth} ${adress} ${phone}`;

        // Gerar o QR code
        const qrCodeDataUrl = await QRCode.toDataURL(informationQR);

        // Retornar o QR code
        res.status(200).json({ qrCodeDataUrl });
    } catch (error) {
        console.error('Erro ao gerar QR code:', error);
        res.status(500).end(); // Erro interno do servidor
    }
}