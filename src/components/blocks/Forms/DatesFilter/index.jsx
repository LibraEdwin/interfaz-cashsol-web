import { FormGroup, Label, Input, Button } from '@components/ui';
import { Col, Row } from 'react-bootstrap';
import { ImPrinter } from 'react-icons/im';
import { IoMdDownload } from 'react-icons/io';

const FormDatesFilter = () => {
  const handlePrint = () => window.print();

  return (
    <form action="">
      <Row className='align-items-end'>
        <Col>
          <FormGroup>
            <Label>Fecha de Inicio</Label>
            <Input type="date" />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label>Fecha de Fin</Label>
            <Input type="date" />
          </FormGroup>
        </Col>
        <Col>
          <Button primary block>
            CONSULTAR
          </Button>
        </Col>
        <Col>
          <Button variant='outline' color='primary' type='button' block onClick={handlePrint}>
            <ImPrinter />
            IMPRIMIR
          </Button>
        </Col>
        <Col>
          <Button variant='outline' color='primary' type='button' block>
            <IoMdDownload />
            EXPORTAR
          </Button>
        </Col>
      </Row>
    </form>
  );
};

export default FormDatesFilter;
