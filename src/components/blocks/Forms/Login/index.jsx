import { Card } from '@components/containers';
import { Subtitle } from '@components/typography';
import { Button, FormGroup, Input, Label, Spiner } from '@components/ui';
import { useForm } from 'react-hook-form';
import { useAppContext } from '@contexts/AppContext';
import styled from 'styled-components';

const Obs = styled.span`
  color: red;
  font-size: 14px;
  font-weight: 400;
  height: 15px; 
`;

const FormLogin = () => {
  // const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signInUser, isLoading } = useAppContext();

  const submitValues = async ({ email, password }) => {
    signInUser(email, password);
  };

  return (
    <Card className='p-5' border>
      <Subtitle className='mb-4 text-center'>Accesso al sistema</Subtitle>
      <FormGroup className='mb-3'>
        <Label>Nombre de usuario</Label>
        <Input
          type='email'
          id='email'
          placeholder='Ingresar email. Ej: mail@example.com'
          {...register('email', {
            required: 'El email es requerido*',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Debe ingresar un formato de email válido'
            }
          })}
        />
        {errors.email && <Obs>{errors.email.message}</Obs>}
      </FormGroup>
      <FormGroup className='mb-3'>
        <Label>Contraseña</Label>
        <Input
          type='password'
          id='password'
          placeholder='Ingresar contraseña. Mínimo 6 carácteres'
          {...register('password', {
            required: 'La contraseña es requerido*',
            minLength: {
              value: 6,
              message: 'La contraseña debe tener mínimo 6 carácteres'
            }
          })}
        />
        {errors.password && <Obs>{errors.password.message}</Obs>}
      </FormGroup>
      <Button
        primary
        block
        className='mt-3'
        type='submit'
        onClick={handleSubmit(submitValues)}
        disabled={isLoading}
      >
        {isLoading
          ? <>Cargando <Spiner/></>
          : 'INGRESAR'
        }
      </Button>
    </Card>
  );
};

export default FormLogin;
