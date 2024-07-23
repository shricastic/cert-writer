import React, { useRef, useEffect } from 'react';
import { jsPDF } from 'jspdf';

const CertificateGenerator = () => {
  const canvasRef = useRef(null);

  const handleDownload = () =>{
    const canvas = canvasRef.current;
    const image = canvas.toDataURL('image/png');
    const pdf = new jsPDF('landscape');
    pdf.addImage(image, 'PNG', 0, 0, 297, 210);
    pdf.save('download-cert.pdf');
  };


  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const certificateImage = new Image();
    certificateImage.src = require('./certificate.png');
    certificateImage.onload = () => {
      ctx.drawImage(certificateImage, 0, 0, canvas.width, canvas.height);

      ctx.font = 'bold 20px Arial';
      ctx.fillStyle = 'black';
      ctx.fillText('Course', 350, 340);
      ctx.fillText('2122010191', 340, 390);
      ctx.font = 'bold 30px Times New Roman';
      ctx.fillText('Shrikrushna Gundre', 270, 260);
      ctx.font = '13px Arial';
      ctx.fillText('hjha23412968961h2huyeih127812e27', 5, 580);

    };
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} width={800} height={600} />
      <button onClick={handleDownload}> Download Certificate </button>
    </div>
  );
};

export default CertificateGenerator;
