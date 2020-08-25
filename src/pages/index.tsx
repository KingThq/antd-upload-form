import React from 'react';
import { Form, Button, Card } from 'antd';
import UploadBtn from './UploadBtn';

export default () => {
  const data = { fileUrl: 'bbb' };

  const onFinish = (values: any) => {
    console.log('submit data:', values);
  };

  return (
    <div>
      <Card bodyStyle={{
        width: 400,
        margin: '0 auto',
      }}>
        <Form onFinish={onFinish} initialValues={{ file: data.fileUrl }}>
          <Form.Item label="上传1" name="file">
            <UploadBtn name="文件1" />
          </Form.Item>
          <Form.Item
            label="上传2"
            name={['owner', 'file']}
            initialValue={data.fileUrl}
          >
            <UploadBtn name="文件2" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
