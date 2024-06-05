import React, { useState } from 'react'
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons'
import {
  Button,
  Modal,
  Form,
  Input,
  Typography,
  Space,
  Checkbox,
  Flex,
  Collapse
} from 'antd'
import type { GetProp, CollapseProps } from 'antd'

const { Title } = Typography

const ModalForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const showModal = () => setIsOpen(true)
  const handleOk = () => setIsOpen(false)
  const handleCancel = () => setIsOpen(false)

  const [form] = Form.useForm()

  const onCheckboxChange: GetProp<typeof Checkbox.Group, 'onChange'> = (
    checkedValues
  ) => {
    console.log('checked = ', checkedValues)
  }

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: (
        <Flex gap="middle">
          <Flex gap="small">
            <span>字段一</span>
            <span>123456789</span>
          </Flex>
          <Flex gap="small">
            <span>字段二</span>
            <span>我是一段测试文本</span>
          </Flex>
        </Flex>
      ),
      children: <p>这里什么都没有</p>,
      showArrow: true
    }
  ]

  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
      >
        创建
      </Button>
      <Modal
        title="创建"
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width="40vw"
      >
        <Space
          direction="vertical"
          size="middle"
          style={{ display: 'flex' }}
        >
          <Title level={5}>标题一</Title>
          <Form
            layout="inline"
            form={form}
            size="middle"
          >
            <Form.Item
              label="ID"
              name="id"
              rules={[{ required: true }]}
            >
              <Input placeholder="请输入内容" />
            </Form.Item>
            <Form.Item
              label="名称"
              name="name"
              rules={[{ required: true }]}
            >
              <Input
                placeholder=""
                readOnly
              />
            </Form.Item>
          </Form>
          <div>
            <span>标题二</span>
            <Button
              type="link"
              icon={<PlusCircleOutlined />}
            >
              增加
            </Button>
            <Button
              type="link"
              icon={<MinusCircleOutlined />}
            >
              删除
            </Button>
          </div>
          <Checkbox.Group onChange={onCheckboxChange}>
            <Space
              direction="vertical"
              size="small"
              style={{ display: 'flex' }}
            >
              {[1, 2, 3].map((i) => (
                <Checkbox value={i}>
                  <Collapse
                    defaultActiveKey={[]}
                    items={items}
                    expandIconPosition="end"
                  />
                </Checkbox>
              ))}
            </Space>
          </Checkbox.Group>
        </Space>
      </Modal>
    </>
  )
}

export default ModalForm
