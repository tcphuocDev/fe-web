// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Form, Input, InputNumber, Button } from 'antd';
const layout = {
	labelCol: {
		span: 2,
	},
	wrapperCol: {
		span: 16,
	},
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
	required: '${label} is required!',
	types: {
		email: '${label} is not a valid email!',
		number: '${label} is not a valid number!',
	},
	number: {
		range: '${label} must be between ${min} and ${max}',
	},
};
/* eslint-enable no-template-curly-in-string */

const Checkout = () => {
	const onFinish = (values) => {
		console.log(values);
	};
	return (
		<div className='checkout'>
			<div className='checkout__info'>
				<div className='checkout__info__title'>Thông tin hóa đơn</div>
				<Form
					{...layout}
					name='nest-messages'
					onFinish={onFinish}
					validateMessages={validateMessages}
				>
					<Form.Item
						name={['user', 'name']}
						label='Name'
						rules={[
							{
								required: true,
							},
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						name={['user', 'email']}
						label='Email'
						rules={[
							{
								type: 'email',
							},
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						name={['user', 'age']}
						label='Age'
						rules={[
							{
								type: 'number',
								min: 0,
								max: 99,
							},
						]}
					>
						<InputNumber />
					</Form.Item>
					<Form.Item name={['user', 'website']} label='Website'>
						<Input />
					</Form.Item>
					<Form.Item name={['user', 'introduction']} label='Introduction'>
						<Input.TextArea />
					</Form.Item>
					<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
						<Button type='primary' htmlType='submit'>
							Submit
						</Button>
					</Form.Item>
				</Form>
			</div>
			<div className='checkout__cart'>
				<div className='checkout__info__title'>Thông tin giỏ hàng</div>

				<div className='checkout__cart__content'>
					<table className='checkout__cart__content__table'>
						<tr className='checkout__cart__content__table-th'>
							<th>Tên sản phẩm</th>
							<th>Số lượng</th>
							<th>Giá</th>
						</tr>
						<tr className='checkout__cart__content__table__listOrder'>
							<td>a</td>
							<td>a</td>
							<td>a</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
