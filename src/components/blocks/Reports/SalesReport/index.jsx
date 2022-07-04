import { Table } from '@components/containers';
import { Col, Row } from 'react-bootstrap';

const SalesReport = () => {
  return (
    <>
      <Table.Content>
        <Table.Head>
          <Table.Row>
            <Table.Col as='th'>N°. comp.</Table.Col>
            <Table.Col as='th' textAlign='left'>Tipo de comp.</Table.Col>
            <Table.Col as='th' textAlign='left'>Fecha registro</Table.Col>
            <Table.Col as='th' textAlign='left'>Nombre del cliente</Table.Col>
            <Table.Col as='th' textAlign='left'>Concepto de venta</Table.Col>
            <Table.Col as='th'>IGV</Table.Col>
            <Table.Col as='th'>Valor de venta</Table.Col>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Col as='th'>00010</Table.Col>
            <Table.Col>Boleta</Table.Col>
            <Table.Col>04/09/2021</Table.Col>
            <Table.Col>Nombre completo del primer cliente</Table.Col>
            <Table.Col>Interes - cuota 1 - contrato 22-0001</Table.Col>
            <Table.Col textAlign='center'>10.00</Table.Col>
            <Table.Col textAlign='center'>2450.00</Table.Col>
          </Table.Row>
          <Table.Row>
            <Table.Col as='th'>00010</Table.Col>
            <Table.Col>Boleta</Table.Col>
            <Table.Col>04/09/2021</Table.Col>
            <Table.Col>Nombre completo del primer cliente</Table.Col>
            <Table.Col>Interes - cuota 1 - contrato 22-0001</Table.Col>
            <Table.Col textAlign='center'>10.00</Table.Col>
            <Table.Col textAlign='center'>2450.00</Table.Col>
          </Table.Row>
          <Table.Row>
            <Table.Col as='th'>00010</Table.Col>
            <Table.Col>Boleta</Table.Col>
            <Table.Col>04/09/2021</Table.Col>
            <Table.Col>Nombre completo del primer cliente</Table.Col>
            <Table.Col>Interes - cuota 1 - contrato 22-0001</Table.Col>
            <Table.Col textAlign='center'>10.00</Table.Col>
            <Table.Col textAlign='center'>2450.00</Table.Col>
          </Table.Row>
          <Table.Row>
            <Table.Col as='th'>00010</Table.Col>
            <Table.Col>Boleta</Table.Col>
            <Table.Col>04/09/2021</Table.Col>
            <Table.Col>Nombre completo del primer cliente</Table.Col>
            <Table.Col>Interes - cuota 1 - contrato 22-0001</Table.Col>
            <Table.Col textAlign='center'>10.00</Table.Col>
            <Table.Col textAlign='center'>2450.00</Table.Col>
          </Table.Row>
          <Table.Row>
            <Table.Col as='th'>00010</Table.Col>
            <Table.Col>Boleta</Table.Col>
            <Table.Col>04/09/2021</Table.Col>
            <Table.Col>Nombre completo del primer cliente</Table.Col>
            <Table.Col>Interes - cuota 1 - contrato 22-0001</Table.Col>
            <Table.Col textAlign='center'>10.00</Table.Col>
            <Table.Col textAlign='center'>2450.00</Table.Col>
          </Table.Row>
          <Table.Row>
            <Table.Col as='th'>00010</Table.Col>
            <Table.Col>Boleta</Table.Col>
            <Table.Col>04/09/2021</Table.Col>
            <Table.Col>Nombre completo del primer cliente</Table.Col>
            <Table.Col>Interes - cuota 1 - contrato 22-0001</Table.Col>
            <Table.Col textAlign='center'>10.00</Table.Col>
            <Table.Col textAlign='center'>2450.00</Table.Col>
          </Table.Row>

        </Table.Body>
      </Table.Content>
      <Row className='justify-content-center mt-5 gap-4'>
        <Col md={6} lg={5}>
          <table className='w-100'>
            <thead>
              <tr>
                <th className='text-start py-2'>VENTAS POR CONCEPTO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className='py-2 text-start border-top'>Concepto</th>
                <th className='py-2 text-end border-top'>Monto en soles</th>
                <th width="100px" className='py-2 text-end border-top'></th>
              </tr>
              <tr>
                <td className='py-2'>Capital</td>
                <td className='py-2 text-end'>2,010.45</td>
                <th width="100px"></th>
              </tr>
              <tr>
                <td className='py-2'>Interés</td>
                <td className='py-2 text-end'>4,340.50</td>
                <th width="100px"></th>
              </tr>
              <tr>
                <td className='py-2'>Mora</td>
                <td className='py-2 text-end'>4,340.50</td>
                <th width="100px"></th>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th className='py-2 text-start border-top'>Total general (S/)</th>
                <th className='py-2 text-end border-top'>10,690.45</th>
                <th width="100px" className='py-2 text-end border-top'></th>
              </tr>
            </tfoot>
          </table>
        </Col>
        <Col md={6} lg={5}>
          <table className='w-100'>
            <thead>
              <tr>
                <th className='text-start py-2'>CUADRE GENERAL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className='py-2 text-start border-top'>Tipo de cobro</th>
                <th className='py-2 text-end border-top'>Monto en soles</th>
                <th width="100px" className='py-2 text-end border-top'></th>
              </tr>
              <tr>
                <td className='py-2'>Efectivo</td>
                <td className='py-2 text-end'>2,010.45</td>
                <th width="100px"></th>
              </tr>
              <tr>
                <td className='py-2'>Transferencia</td>
                <td className='py-2 text-end'>4,340.50</td>
                <th width="100px"></th>
              </tr>
              <tr>
                <td className='py-2'>Tarjeta Visa</td>
                <td className='py-2 text-end'>4,340.50</td>
                <th width="100px"></th>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th className='py-2 text-start border-top'>Total general (S/)</th>
                <th className='py-2 text-end border-top'>10,690.45</th>
                <th width="100px" className='py-2 text-end border-top'></th>
              </tr>
            </tfoot>
          </table>
        </Col>
      </Row>
    </>
  );
};

export default SalesReport;
