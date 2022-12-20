import React, {useState} from 'react';
import './index.css';
import {DeleteTwoTone , PlusOutlined } from '@ant-design/icons';
import { Button, Form, Select, Space } from 'antd';
const Data = () => {
  const [damount, setDamount] = useState("0.00")
  const [camount, setCamount] = useState("0.00")
  const onFinish = (values) => {
    
    console.log('Received values of form:', values.users);
    let lst = values.users
    let c="0.00",d="0.00";
    for(let i in lst){
      
      if(lst[i].camount !== undefined){
      c=Number(c)+Number(lst[i].camount)
     
      }
      if(lst[i].damount !== undefined){
      d=Number(d) + Number(lst[i].damount)
      }
    }
    setDamount(d.toLocaleString("en-IN")) 
    setCamount(c.toLocaleString("en-IN"))

    console.log(damount,camount)
  };
  
  
  return (
    <Form
      name="dynamic_form_nest_item"
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.List name="users" initialValue={[
              {  },
              {  },
              {  },
            ]}>
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space
                key={key}
                style={{
                  display: 'flex',
                  marginBottom: 8,
                }}
                align="baseline"
              >
                <Form.Item
                  {...restField}
                  name={[name, 'account']}
                  rules={[
                    {
                      required: true,
                      message: 'Missing Account Type',
                    },
                  ]}
                 
                >
                  <Select
                  style={{
                    minWidth : 100
                  }}
                  placeholder="Select a person"
                  options={[
                    {
                      value: 'current',
                      label: 'Current Account',
                    },
                    {
                      value: 'saving',
                      label: 'Saving Account',
                    },
                    {
                      value: 'joint',
                      label: 'Joint Account',
                    },
                  ]}
                />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'damount']}
                  rules={[
                    {
                      required: true,
                      message: 'Missing Debit Amount',
                    },
                  ]}
                  
                >
                  <input placeholder="Debit Amount" onFocus={(e)=>{
                    if(e.target.value !== ""){
                    let str = e.target.value.replaceAll(",","")
                    e.target.value = Number(str)
                    }
                  }} onBlur = {(e)=>{
                    if(e.target.value !== ""){
                      e.target.value = Number(e.target.value).toLocaleString('en-IN')
                    }
                  }} />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'camount']}
                  rules={[
                    {
                      required: true,
                      message: 'Missing Credit Amount',
                    },
                  ]}
                  
                >
                  <input placeholder="Credit Amount" onFocus={(e)=>{
                    if(e.target.value !== ""){
                    let str = e.target.value.replaceAll(",","")
                    e.target.value = Number(str) 
                    }
                  }} onBlur = {(e)=>{
                    if(e.target.value !== ""){
                    e.target.value = Number(e.target.value).toLocaleString('en-IN')
                  }
                  }} />
                </Form.Item>
                <DeleteTwoTone style={{
                    fontSize : '30px',
                }} onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item  >
              <div
              className='formlist'>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add 
              </Button>
              <h1>Total</h1>
            <h1 className='dm'>{damount}</h1>
            <h1 className='cm'>{camount}</h1>
            </div>
            </Form.Item>
            
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Click to save
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Data;
