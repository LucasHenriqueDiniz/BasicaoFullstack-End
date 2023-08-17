import { Content, Footer, Header } from 'antd/es/layout/layout';
import { Row, Col, Layout, Card, Image } from 'antd';
import AddButton from './components/addButton/addButton';
import { todosLivros } from './services/apiFunctions';
import { useCallback, useEffect, useState } from 'react';
import { livroType } from './types/livro';
import { ShoppingCartOutlined, InfoCircleOutlined } from '@ant-design/icons';

function App() {
  const [livros, setLivros] = useState<livroType[]>([]);

  const updateBooks = useCallback(() => {
    todosLivros()
      .then((response) => {
        setLivros(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);

  useEffect(() => {
    updateBooks();
  }, [updateBooks]);

  function showMore(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <Layout style={{ maxWidth: '100vw', minWidth: '99vw', minHeight: '100vh'}} >
      <Header>
        <div style={{ color: 'white', fontSize: '1.25rem', fontWeight: '700'}}>
        My Personal Bookshelf
        </div>
        </Header>
      <Content style={{ maxWidth: '100vw', backgroundColor: '#cdcdcd', display: 'flex', flexDirection: 'column' }}>
          <Row justify="start" style={{ padding: '1rem', width: '100%' }} align="stretch" wrap={true} gutter={[15, 15]} >
            {livros.map((livro) => (
              <Col span={4} style={{ display: 'flex' }}>
                <Card
                  title={<p title={livro.titulo}>{livro.titulo}</p>}
                  hoverable
                  actions={ [
                    <div onClick={showMore}><InfoCircleOutlined /> Ver mais</div>,
                    <a href={`https://www.amazon.com.br/s?k=${livro.titulo}`} target="_blank" rel="noreferrer"><ShoppingCartOutlined /> Comprar</a>
                  ]}
                  
                  cover={
                    <div style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <Image src={livro.capa} style={{ width: '270px', height: '400px' }} />
                    </div>
                  }
                  bordered={true}
                  style={{ width: '100%', height: '100%' }}
                >
                  <div>
                    <div style={{ fontWeight: 'bold', textAlign:'center'}} title={livro.autor}>{livro.autor}</div>
                    <p style={{height: '80px', overflow: 'hidden', fontSize: '0.75rem'}}>{livro.sinopse}</p>
                  </div>
                </Card>
              </Col>
            ))}

            <AddButton updateBooks={updateBooks} />

          </Row>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
