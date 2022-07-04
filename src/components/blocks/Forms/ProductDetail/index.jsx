import { Button, FormGroup, Input, Label, Select, TextArea, InputMessage } from '@components/ui';
import { Col, Row } from 'react-bootstrap';
import { RiSave2Fill } from 'react-icons/ri';
import { AiFillPrinter } from 'react-icons/ai';
import { useProductDetailContext } from '@contexts/ProductDetailContext';
import { useForm, FormProvider } from 'react-hook-form';
import { apiProductDetail, apiProducts } from '@services/api';
import TYPES_PRODUCT_DETAIL from '@contexts/ProductDetailContext/types';
import { getDate } from '@libs/utils';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { Modal } from '@components/containers';
import ModalProductProperty from '@components/blocks/ModalProductProperty';
import ToastConfirm from '@components/blocks/ToastConfirm';

const YEARS = [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];

// eslint-disable-next-line react/prop-types
const FormProduct = ({ open, close, dataProductProperty, setDataProductProperty, dataCustomerID, SearchCustomerProductClient }) => {
  const router = useRouter();
  const [{
    products,
    categories,
    categorySelected,
    productDetail
  }, dispatch] = useProductDetailContext();
  const { handleSubmit, register, reset, formState: { errors } } = useForm({ defaultValues: productDetail });
  // const [categorySelected, setCategorySelected] = useState(category);

  const handleChangeCategory = async (e) => {
    const { value } = e.target;
    if (value) {
      dispatch({ type: TYPES_PRODUCT_DETAIL.UPDATE_CATEGORY, payload: Number(value) });
      const { data: { products } } = await apiProducts.getProductsByCategory({ id: value, limit: 0 });
      dispatch({ type: TYPES_PRODUCT_DETAIL.UPDATE_PRODUCTS, payload: products });
    }
  };

  const save = async (data) => {
    toast.info(<ToastConfirm text='¿Está seguro de que desea guardar el detalle?' confirm={() => saveProductDetail(data)} />, {
      onClose: () => console.log('CANCELAR'),
      position: 'bottom-center',
      hideProgressBar: true,
      theme: 'dark'
    });
  };

  const saveProductDetail = async (data) => {
    if (productDetail.id) {
      // actualizar
      const { data: productUpdated } = await apiProductDetail.updateProductDetail(productDetail.id, data);
      dispatch({ type: TYPES_PRODUCT_DETAIL.UPDATE_PRODUCT_DETAIL, payload: productUpdated });
      toast.success('Se actualizó el Detalle del producto!');
    } else {
      // guardar
      const { data: productDetailCreated } = await apiProductDetail.createProductDetail({ ...data, client: productDetail.client });
      dispatch({ type: TYPES_PRODUCT_DETAIL.UPDATE_PRODUCT_DETAIL, payload: productDetailCreated });
      toast.success('Se creó correctament el Detalle del producto!');
    }
  };

  const deliverProduct = async () => {
    await apiProductDetail.deliverProduct(productDetail.id);
    await viewProductDetail(productDetail.id);
    toast.success('Se hizo la entrega del producto!');
  };

  const viewProductDetail = async (id) => {
    const { data: productDetail } = await apiProductDetail.getProductDetail(id);
    dispatch({ type: TYPES_PRODUCT_DETAIL.UPDATE_PRODUCT_DETAIL, payload: productDetail });

    const { data: product } = await apiProducts.getProduct(productDetail.product);
    const { data: { products } } = await apiProducts.getProductsByCategory({ id: product.productCategoryID, limit: 0 });
    dispatch({ type: TYPES_PRODUCT_DETAIL.UPDATE_PRODUCTS, payload: products });

    reset({ ...productDetail, productCategory: product.productCategoryID });
  };

  const getProductDetail = async (id) => {
    const { data: productDetail } = await apiProductDetail.getProductDetail(id);
    dispatch({ type: TYPES_PRODUCT_DETAIL.UPDATE_PRODUCT_DETAIL, payload: productDetail });

    const { data: product } = await apiProducts.getProduct(productDetail.product);
    const { data: { products } } = await apiProducts.getProductsByCategory({ id: product.productCategoryID, limit: 0 });
    dispatch({ type: TYPES_PRODUCT_DETAIL.UPDATE_PRODUCTS, payload: products });
    dispatch({ type: TYPES_PRODUCT_DETAIL.UPDATE_CATEGORY, payload: product.productCategoryID });

    reset({ ...productDetail, productCategory: product.productCategoryID });
    close();
  };

  return (
    <FormProvider reset={reset} getProductDetail={getProductDetail}>
      <form onSubmit={handleSubmit(save)}>
        <Row className='mt-3'>
          <Col lg={3}>
            <FormGroup className='mb-4'>
              <Label>Código del registro</Label>
              <Input
                readOnly
                background='success'
                value={productDetail.id}
                placeholder="Código del detalle" />
            </FormGroup>
          </Col>
          <Col lg="3">
            <FormGroup>
              <Label>Categoría de producto</Label>
              <Select
                {...register('productCategory')}
                onChange={handleChangeCategory}>
                <option value="">Seleccione una categoría</option>
                {categories.length > 0 && categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name.toUpperCase()}</option>
                ))}
              </Select>
            </FormGroup>
          </Col>
          <Col lg='6'>
            <FormGroup>
              <Label>{categorySelected && categorySelected === 6 ? 'Inmueble' : 'Producto'}</Label>
              <Select
                {...register('product', {
                  required: 'Antes de elegir un producto debe elegir una categoría'
                })}
                invalid={errors.product}
              >
                <option value="">Seleccione un {categorySelected && categorySelected === 6 ? 'Inmueble' : 'Producto'}</option>
                {products.length > 0 && products.map(product => (
                  <option key={product.id} value={product.id}>{product.name.toUpperCase()}</option>
                ))}
              </Select>
              {errors.product && (
                <InputMessage color='danger'>{errors.product.message}</InputMessage>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col lg='3'>
            <FormGroup>
              <Label>Valor de {categorySelected && categorySelected === 6 ? 'inmueble' : 'producto'} tasado</Label>
              <Input
                {...register('appraisedValue', {
                  required: 'Ingrese un valor tasado'
                })}
                invalid={errors.appraisedValue}
                type='text'
                className='text-center'
                background='info'
              />
              {errors.appraisedValue && (
                <InputMessage color='danger'>{errors.appraisedValue.message}</InputMessage>
              )}
            </FormGroup>
          </Col>
          <Col>
            <FormGroup >
              <Label>Nombre del {categorySelected && categorySelected === 6 ? 'Inmueble' : 'Producto'}</Label>
              <Input
                {...register('productName', {
                  required: 'Ingrese un nombre para el detalle del producto'
                })}
                invalid={errors.productName}
                type="text"
                className='mb-3' />
              {errors.productName && (
                <InputMessage color='danger'>{errors.productName.message}</InputMessage>
              )}
            </FormGroup>
          </Col>
        </Row>
        {categorySelected && categorySelected !== 6 && (
          <Row className='mt-3'>
            <Col>
              <FormGroup>
                <Label>Año del producto</Label>
                <Select
                  {...register('year')}
                >
                  {YEARS.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </Select>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup >
                <Label>Marca</Label>
                <Input
                  {...register('brand')}
                  type="text"
                  className='mb-3' />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup >
                <Label>Modelo</Label>
                <Input
                  {...register('model')}
                  type="text"
                  className='mb-3' />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup >
                <Label>Serie</Label>
                <Input
                  {...register('serie')}
                  type="text"
                  className='mb-3' />
              </FormGroup>
            </Col>
          </Row>
        )}
        <Row className='mt-3'>
          <Col>
            <FormGroup >
              <Label subtitle>Caracteristicas</Label>
              <TextArea
                {...register('features', {
                  required: 'Campo requerido'
                })}
                invalid={errors.features}
                height='92px' />
              {errors.features && (
                <InputMessage color='danger'>{errors.features.message}</InputMessage>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col>
            <FormGroup >
              <Label subtitle>Observación externa / interna</Label>
              <TextArea
                {...register('observationIntExt', {
                  required: 'Campo requerido'
                })}
                invalid={errors.observationIntExt}
                height='165px' />
              {errors.observationIntExt && (
                <InputMessage color='danger'>{errors.observationIntExt.message}</InputMessage>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col>
            <FormGroup >
              <Label subtitle>Observación de funcionamiento o técnico</Label>
              <TextArea
                {...register('observationOperation', {
                  required: 'Campo requerido'
                })}
                invalid={errors.observationOperation}
                height='165px' />
              {errors.observationOperation && (
                <InputMessage color='danger'>{errors.observationOperation.message}</InputMessage>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col className='m-auto'>
            {/* <Row className='m-auto'>
              <FormGroup className='mt-3'>
                <Button type='button' variant='small' color='primary'><BsFillEyeFill size='2em' />imagen 1</Button>
                < UtilitiesButton size='2rem'><AiTwotoneDelete /></UtilitiesButton>
              </FormGroup>
              <FormGroup >
                <Button type='button' variant='small' color='primary'><BsFillEyeFill size='2em' />imagen 2</Button>
                < UtilitiesButton size='2rem'><AiTwotoneDelete /></UtilitiesButton>
              </FormGroup>
              <FormGroup >
                <Button type='button' variant='small' color='primary'><BsFillEyeFill size='2em' />imagen 3</Button>
                < UtilitiesButton size='2rem'><AiTwotoneDelete /></UtilitiesButton>
                < UtilitiesButton size='2rem'><FaCloudUploadAlt /></UtilitiesButton>
              </FormGroup>
            </Row> */}
          </Col>
          <Col>
            {productDetail.id && (
              <Row>
                <div>
                  <FormGroup >
                    <Label>Fecha de registro</Label>
                    <Input
                      readOnly
                      type="text"
                      value={getDate(productDetail.receptionDate, 'DD/MM/YYYY - HH:mm:ss')}
                      background='info'
                      placeholder="22/04/2022"
                    />
                  </FormGroup>
                </div>
                {productDetail.returnDate && (
                  <div className='mt-2'>
                    <FormGroup >
                      <Label>Fecha de devolución / levantamiento</Label>
                      <Input
                        value={getDate(productDetail.returnDate, 'DD/MM/YYYY - HH:mm:ss')}
                        readOnly
                        type="text"
                        background='info'
                        placeholder="30/08/2022"
                      />
                    </FormGroup>
                  </div>
                )}
              </Row>
            )}
          </Col>
          <Col>
            <Row className='p-1'>
              {productDetail.id && (
                <>
                  <Button
                    className='mt-4 fs-5'
                    variant='outline'
                    type='button'
                    color='primary'
                    onClick={() => { router.push(`/prestamos-y-garantias/registro-de-productos-en-garantia/formato-documento-recepcion/${productDetail.id}`); }}
                  ><AiFillPrinter size='1.3em' />DOC. RECEPCIÓN</Button>

                  <Button
                    className='mt-4 fs-5'
                    variant='outline'
                    type='button'
                    color='primary'><AiFillPrinter size='1.3em' />ACTA ENTREGA</Button>
                </>
              )}
            </Row>
          </Col>
          <Col>
            <Row className='p-1'>
              <Button
                className='mt-4 fs-5'
                primary
                disabled={productDetail.id || !productDetail.client}
              >
                <RiSave2Fill size='1.3em' />RECEPCIONAR
              </Button>

              {productDetail.id && (
                <Button
                  className='mt-4 fs-5'
                  type='button'
                  primary
                  onClick={deliverProduct}
                  disabled={productDetail.returnDate}
                >
                  <RiSave2Fill size='1.3em' />ENTREGAR
                </Button>
              )}
            </Row>
          </Col>
        </Row>
      </form>
      <Modal open={open} close={close}>
        <ModalProductProperty
          dataProductProperty={dataProductProperty}
          setDataProductProperty={setDataProductProperty}
          dataCustomerID={dataCustomerID}
          SearchCustomerProductClient={SearchCustomerProductClient} />
      </Modal>
      <ToastContainer />
    </FormProvider>
  );
};

export default FormProduct;
