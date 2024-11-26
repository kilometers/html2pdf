import html_to_pdf from 'html-pdf-node';
import express, { Request, Response} from 'express';

const app = express();
app.use(express.json());

//@ts-expect-error
app.post('/generate-pdf', async (req, res) => {
  const {url, format, landscape, scale} = req.body;
  
  if(!url) {
    return res.status(400).send('URL is required in body');
  }

  let options = { 
    format: format || 'A4', 
    landscape: landscape || true, 
    scale: scale || 0.5 
  };

  let file = { url: url };

  try {
    html_to_pdf.generatePdf(file, options, (err, pdfBuffer) => {
      res.send(pdfBuffer);
    });
  }
  catch(e) {
    console.log(e);
    res.status(500).send(e);
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});