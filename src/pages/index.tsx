import React from 'react';
import { Form, Button, Card, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { UploadChangeParam } from 'antd/lib/upload';
import { UploadFile, RcCustomRequestOptions } from 'antd/lib/upload/interface';

import UploadBtn from './UploadBtn';

const uploadService = () => {
  return Promise.resolve('aaa');
};

export default () => {
  const data = { fileUrl: 'bbb' };
  const ownerData = [{
    uid: -1,
    name: '文件2',
    url: 'ccc',
  }];

  const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  const customRequest = async (options: any) => {
    const url = await uploadService();
    options.onSuccess({}, {...options.file, url});
  };
  const onChange = (info: UploadChangeParam<UploadFile<any>>) => {
    console.log('upload change:', info);
  };

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
          {/* <Form.Item label="上传1" name="file">
            <UploadBtn name="文件1" />
          </Form.Item> */}
          <Form.Item
            label="上传2"
            name={['owner', 'file']}
            initialValue={ownerData}
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload
              customRequest={customRequest}
              onChange={onChange}
            >
              <Button>
                <UploadOutlined /> 上传
              </Button>
            </Upload>
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
