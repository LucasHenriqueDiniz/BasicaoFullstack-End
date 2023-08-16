import { Content, Footer, Header } from 'antd/es/layout/layout';
import { Row, Col, Layout, Card } from 'antd';
import AddButton from './components/addButton/addButton';
import { todosLivros } from './services/apiFunctions';
import { useEffect, useState } from 'react';

function App() {
  const [livros, setLivros] = useState([]);
  
  useEffect(() => {
    async function getLivros() {
      const res = await todosLivros();
      setLivros(res.data.data);
    }

    getLivros();
  }, []);
  console.log(livros)
  
  console.log(livros);

  return (
    <Layout style={{ width: '100vw', height: '100vh' }}>
      <Header>Test</Header>
      <Content style={{ width: '100%', height: '100%', backgroundColor: '#cdcdcd' }}>

        <Row justify="start" style={{ padding: '1rem', width: '100%' }} align="stretch" wrap={true} gutter={[15, 15]} >
          <Col span={6}>
            <Card title="Card title" bordered={false} style={{ width: '100%' }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Card title" bordered={false} style={{ width: '100%' }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Card title" bordered={false} style={{ width: '100%' }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Card title" bordered={false} style={{ width: '100%' }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Card title" bordered={false} style={{ width: '100%' }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <AddButton />
        </Row>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
