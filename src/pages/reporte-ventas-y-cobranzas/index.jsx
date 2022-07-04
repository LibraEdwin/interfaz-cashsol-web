import { FormDatesFilter, SalesReport } from '@components/blocks';
import { Card, Container } from '@components/containers';
import { Title } from '@components/typography';

const SalesReportPage = () => {
  return (
    <Container className='pb-5'>
      <Card className='p-5 no-print' border>
        <Title color='primary' className='mb-5'>Reporte de ventas y cobranzas</Title>
        <FormDatesFilter />
      </Card>
      <Card className='mt-4 p-5' minHeight="900px" border noRounded>
        <SalesReport />
      </Card>
    </Container>
  );
};

export default SalesReportPage;
