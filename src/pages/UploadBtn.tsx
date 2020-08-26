import React from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { UploadChangeParam } from 'antd/lib/upload';
import { UploadFile } from 'antd/lib/upload/interface';

const uploadService = () => {
  return Promise.resolve('aaa');
};

const UploadBtn = React.forwardRef((props: any, ref: any) => {
  const { onChange, value, name } = props;

  const defaultFileList: any[] = [];
  if (value) {
    defaultFileList.push({
      uid: -1,
      name,
      url: value,
    });
  }
  console.log('defaultFileList: ', defaultFileList);

  const customRequest = async (options: any) => {
    options.onProgress({ percent: 0 });
    const url = await uploadService();
    options.onProgress({ percent: 100 });
    options.onSuccess();
    if (onChange) onChange(url);
  };

  const onRemove = () => {
    onChange('');
  };

  const onUploadChange = (info: UploadChangeParam<UploadFile<any>>) => {
    console.log('onUploadChange: ', info)
  }

  return (
    <Upload
      customRequest={customRequest}
      onRemove={onRemove}
      ref={ref}
      fileList={defaultFileList}
      onChange={onUploadChange}
    >
      <Button>
        <UploadOutlined /> 上传
      </Button>
    </Upload>
  );
});

export default UploadBtn;
