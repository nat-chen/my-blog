import React, { useState } from 'react';
import Head from 'next/head';
import { Row, Col, List, Icon } from 'antd';
import Header from '../components/Header';
import '../static/style/pages/index.css'

export default () => {
  const [ articleList , setArticleList ] = useState(
    [
      { title: 'Server Rendering', context: 'With Next.js, server rendering React applications has never been easier, no matter where your data is coming from.' },
      { title: 'Static Exporting', context: 'With Next.js, server rendering React applications has never been easier, no matter where your data is coming from.' },
      { title: 'CSS in JS', context: 'With Next.js, server rendering React applications has never been easier, no matter where your data is coming from.' },
    ]
  )

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <List
            header={<div>最新日志</div>}
            itemLayout="vertical"
            dataSource={articleList}
            renderItem={item => (
              <List.Item>
                <div className="list-title">{item.title}</div>
                <div className="list-icon">
                  <span><Icon type="calendar" /> 2019-12-03</span>
                  <span><Icon type="folder" /> video</span>
                  <span><Icon type="fire" /> 5498 views</span>
                </div>
                <div className="list-context">{item.context}</div>
              </List.Item>
            )}
          />
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          右侧
        </Col>
      </Row>
    </>
  );
};
