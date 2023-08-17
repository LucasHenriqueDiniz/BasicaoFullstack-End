import { Col, Card, Form, Modal, Input, Button, Select, InputNumber, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { BookGenres } from '../../utils/genresArr';
import { criarLivro } from "../../services/apiFunctions";
import { livroType } from '../../types/livro';

const AddButton = (updateBooks) => {
    const [bookModalVisible, setBookModalVisible] = useState(false);

    function createBook() {
        setBookModalVisible(true)
    }

    function closeModal() {
        setBookModalVisible(false)
    }

    function onSubmit(values: livroType) {
        criarLivro(values)
          .then(response => {
            message.success(values.titulo + " criado com sucesso!")
            closeModal();
          })
          .catch(error => {
            if (error.response) {
              message.error(`API Request Error: ${error.response.status} (${error.response.statusText})`);
            } else {
                message.error("Network Error:", error.message);
            }
            closeModal();
            updateBooks();
          });
      }

    return (
        <>
            <Col span={4}>
                <Card
                    onClick={createBook}
                    title={false}
                    hoverable={true}
                    style={{ width: '100%', minHeight: '300px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    <PlusOutlined style={{ fontSize: '3rem' }} />
                </Card>
            </Col>
            <Modal open={bookModalVisible} footer={false} onCancel={closeModal} destroyOnClose={true} >
                <Form
                    layout={'vertical'}
                    onFinish={onSubmit}
                >
                    <Form.Item label={'Nome do livro'} name={'titulo'}>
                        <Input />
                    </Form.Item>
                    <Form.Item label={'Autor'} name={'autor'}>
                        <Input />
                    </Form.Item>
                    <Form.Item label={'Ano'} name={'ano_publicacao'}>
                        <InputNumber controls={false} style={{ width: '100%' }} maxLength={4} />
                    </Form.Item>
                    <Form.Item label={'Genero'} name={'categoria'}>
                        <Select
                            placeholder={'Escolha um genero'}
                            style={{ width: '100%' }}
                            options={
                                BookGenres.map((genre) => {
                                    return { label: genre, value: genre }
                                })
                            }
                        />
                    </Form.Item>
                    <Form.Item label={'Imagem da Capa'} name={'capa'}>
                        <Input />
                    </Form.Item>
                    <Form.Item label={'Sinopse'} name={'sinopse'}>
                        <Input.TextArea />
                    </Form.Item>
                    <div style={{ width: '100%', gap: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
                        <Button type={'primary'} danger onClick={closeModal}>Cancelar</Button>
                        <Button type={'primary'} htmlType={'submit'}>Submit</Button>
                    </div>
                </Form>
            </Modal>
        </>
    );
}

export default AddButton;