import { Button, Col, Form, Modal, Row, Table } from 'antd';
import { formatMoney } from 'common/common';
import { OrderStatus } from 'constant/filter.constans';
import React from 'react'
const columnsDetail = [
  {
    title: 'Mã sản phẩm',
    dataIndex: 'productId',
  },
  {
    title: 'Tên sản phẩm',
    dataIndex: 'productName',
  },
  {
    title: 'Phiên bản',

    render: (record) => `${record.color?.name} - ${record.size?.name}`,
  },
  {
    title: 'Giá',

    render: (record) =>
      formatMoney(record.orderPrice || record.salePrice || record.price),
  },
  {
    title: 'Số lượng',
    dataIndex: 'quantity',
  },
  {
    title: 'Thành tiền',

    render: (record) =>
      formatMoney(
        (record.orderPrice || record.salePrice || record.price) *
          record.quantity,
      ),
  },
];


const OrderDetailModal = ({item}) => {
  return (
  	<Modal
				title='Chi tiết đơn hàng'
				visible={}
				// onOk={handleOk}
				// confirmLoading={confirmLoading}
				onCancel={}
				footer={false}
				width={1000}
			>
				<Form name='basic' labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
					<Row gutter={[16, 16]}>
						<Col span={24} style={{ float: 'right' }}>
							<Form.Item wrapperCol={{ offset: 20, span: 16 }}>
								<Button type='primary' onClick={}>
									In hoá đơn
								</Button>
							</Form.Item>
						</Col>
					</Row>
					<div
						ref={}
						style={{
							padding: 20,
						}}
					>
						<Row gutter={[16, 16]}>
							<Col span={12}>
								<Form.Item
									label='Cửa hàng'
									name='categoryId'
									style={{
										marginBottom: 0,
									}}
								>
									<b>YOLO</b>
								</Form.Item>
								<Form.Item
									label='Mã đơn hàng'
									name='categoryId'
									style={{
										marginBottom: 0,
									}}
								>
									#{item?.id}
								</Form.Item>
								<Form.Item
									label='Trạng thái đơn hàng'
									name='categoryId'
									style={{
										marginBottom: 0,
									}}
								>
									{OrderStatus[item?.status]}
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item
									label='Người mua'
									name='name'
									style={{
										marginBottom: 0,
									}}
								>
									{item?.user?.fullname}
								</Form.Item>
								<Form.Item
									label='Số điện thoại'
									name='name'
									style={{
										marginBottom: 0,
									}}
								>
									{item?.phone}
								</Form.Item>
								<Form.Item
									label='Địa chỉ'
									name='name'
									style={{
										marginBottom: 0,
									}}
								>
									{item?.address}
								</Form.Item>
							</Col>
							<Col span={24}>
								<h3>Danh sách sản phẩm</h3>
								<Table
									columns={columnsDetail}
									dataSource={item.orderDetails}
									pagination={false}
								/>
							</Col>
							<Col span={12}></Col>
							<Col span={12}>
								<Form.Item
									label='Tổng số tiền'
									name='name'
									style={{
										marginBottom: 0,
									}}
								>
									{formatMoney(
										item?.orderDetails?.reduce((total, item) => {
											return (
												total +
												(item?.orderPrice || item?.salePrice || item?.price) *
													item.quantity
											);
										}, 0),
									)}
								</Form.Item>
								<Form.Item
									label='Mã giảm giá'
									name='name'
									style={{
										marginBottom: 0,
									}}
								>
									{item?.coupon?.id
										? `${item?.coupon?.code} - Giảm ${item?.coupon?.value}%`
										: 'Không'}
								</Form.Item>
								<Form.Item
									label='Thanh toán'
									name='name'
									style={{
										marginBottom: 0,
									}}
								>
									{formatMoney(
										item?.orderDetails?.reduce((total, item) => {
											return (
												total +
												(item?.orderPrice || item?.salePrice || item?.price) *
													item.quantity
											);
										}, 0),
									)}
								</Form.Item>
							</Col>
						</Row>
					</div>
				</Form>
			</Modal>
  )
}

export default OrderDetailModal