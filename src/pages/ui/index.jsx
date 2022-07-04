import { Container } from '@components/containers';
import { Button, Checkbox, Input, Label, Radio, Select } from '@components/ui';
import { FormGroup } from 'react-bootstrap';
import { FaBeer } from 'react-icons/fa';

/** Pagina de presentacion para componentes ui */
const UI = () => {
  return (
    <Container>
      <h1>ELEMENTOS UI</h1>
      <h3>Inputs</h3>
      <ol>
        <li>
          <h5>Text</h5>
          <Input type="text" placeholder='input text' />
        </li>
        <li>
          <h5>Select</h5>
          <Select>
            <option value="">one</option>
            <option value="">two</option>
          </Select>
        </li>
        <li>
          <h5>Radio</h5>
          <Radio type="radio" />
          <Radio type="radio" defaultChecked={true} />
        </li>
        <li>
          <h5>Radio</h5>
          <Checkbox type="checkbox" />
          <Checkbox type="checkbox" defaultChecked={true} />
        </li>
      </ol>
      <h3>Label</h3>
      <Label>Texto label</Label>
      <Label>Texto label <abbr title="requerido">*</abbr> </Label>
      <h3>Form Group</h3>
      <ol>
        <li>
          <h5>label / input</h5>
          <FormGroup>
            <Label>Texto</Label>
            <Input type="text" placeholder="usuario" />
          </FormGroup>
        </li>
        <li>
          <h5>label / input / icon</h5>
          <FormGroup>
            <Label>Texto</Label>
            <Input type="text" placeholder="usuario" />
            <FaBeer />
          </FormGroup>
        </li>
        <li>
          <h5>label / input / button</h5>
          <FormGroup>
            <Label>Recuperar contraseña</Label>
            <Input type="text" placeholder="contraseña" />
            <Button>Enviar</Button>
          </FormGroup>
        </li>
      </ol>
    </Container>
  );
};

export default UI;
