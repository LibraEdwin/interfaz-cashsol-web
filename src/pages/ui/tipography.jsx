import { Container } from '@components/containers';
import { Paragraph, Title } from '@components/typography';

/** Pagina de presentacion para componentes ui */
const Typography = () => {
  return (
    <Container>
      <h1>TIPOGRAFIA</h1>

      <h2 className='mt-5'>Parrafo con margen top <code>&apos;.mt-4&apos;</code> </h2>
      <Paragraph bold color='primary' className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque possimus, ex iusto ad explicabo, fugiat natus doloremque aspernatur aut blanditiis asperiores adipisci labore tempore, perferendis veniam repellendus in quos vel!</Paragraph>
      <Title>lorem</Title>
    </Container>
  );
};

export default Typography;
