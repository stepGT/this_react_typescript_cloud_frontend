import React from 'react';
import { setCookie } from 'nookies';
import styles from './Auth.module.scss';
import { Button, Form, Input, notification } from 'antd';
import { TRegisterFormDTO } from '@/api/dto/auth.dto';

import * as Api from '@/api';

export const RegisterForm: React.FC = () => {
  const onSubmit = async (values: TRegisterFormDTO) => {
    try {
      const { token } = await Api.auth.register(values);

      notification.success({
        message: 'Успешно!',
        description: 'Переходим в админ-панель...',
        duration: 2,
      });

      setCookie(null, '_token', token, {
        path: '/',
      });
    } catch (err) {
      console.warn(err);

      notification.error({
        message: 'Ошибка!',
        description: 'Ошибка при регистрации',
        duration: 2,
      });
    }
  };

  return (
    <div className={styles.formBlock}>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        onFinish={onSubmit}>
        <Form.Item
          label="E-Mail"
          name="email"
          rules={[
            {
              required: true,
              message: 'Укажите почту',
            },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Полное имя"
          name="fullName"
          rules={[
            {
              required: true,
              message: 'Укажите полное имя',
            },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          rules={[
            {
              required: true,
              message: 'Укажите пароль',
            },
          ]}>
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}>
          <Button type="primary" htmlType="submit">
            Регистрация
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
