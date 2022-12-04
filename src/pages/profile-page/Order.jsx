import { formatMoney, formatTime } from 'common/common';
import Helmet from 'components/Helmet';
import { OrderStatus } from 'constant/filter.constans';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { detailOrders, listOrder } from 'redux/actions/order.actions';
import BannerUserPage from './BannerUserPage';
import MenuListUserInfo from './MenuListUserInfo';
import {
	Modal,
	Table,
	Form,
	Pagination,
	Popconfirm,
	Row,
	Col,
	Button,
} from 'antd';
import { EyeOutlined } from '@ant-design/icons';

const OrderPageUser = () => {
	const state = useSelector((state) => state);
	const [visible, setVisible] = useState(false);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(listOrder({ isMe: 1 }));
	}, [dispatch]);
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
	const showModalDetail = (id) => {
		setVisible(true);
		dispatch(detailOrders(id));
	};

	const handleCancel = () => {
		setVisible(false);
		// form.resetFields();
	};
	console.log(state);
	return (
		<Helmet title='Đơn hàng của tôi'>
			<div className='user'>
				<BannerUserPage />
				<div className='user__content order__content'>
					<div className='row'>
						<MenuListUserInfo />
						<div className='col l-8 m-8 c-12 order__content__table'>
							<div className='order__content__table__title'>
								<h4>Đơn hàng của tôi</h4>
							</div>
							<div className='order__content__table__wrapper'>
								<table>
									<thead>
										<tr>
											<th>#</th>
											<th>Mã đơn hàng</th>
											<th>Ngày đặt hàng</th>
											<th>Trạng thái</th>
											<th>Hành động</th>
										</tr>
									</thead>
									<tbody>
										{state?.order?.items?.map((e, i) => (
											<tr key={i}>
												<td>{i + 1}</td>
												<td>{e?.id}</td>
												<td>{formatTime(e?.createdAt)}</td>
												<td>{OrderStatus[e?.status]}</td>
												<td onClick={() => showModalDetail(e?.id)}>
													<EyeOutlined
														style={{
															cursor: 'pointer',
															paddingRight: 10,
														}}
														onClick={() => showModalDetail(e.id)}
													/>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<Modal
					title='Chi tiết đơn hàng'
					visible={visible}
					// onOk={handleOk}
					// confirmLoading={confirmLoading}
					className='ant-modal-header'
					onCancel={handleCancel}
					footer={false}
					width={1000}
				>
					<Form name='basic' labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
						<div>
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
										#{state.order.item?.id}
									</Form.Item>
									<Form.Item
										label='Trạng thái đơn hàng'
										name='categoryId'
										style={{
											marginBottom: 0,
										}}
									>
										{OrderStatus[state.order.item?.status]}
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
										{state.order.item?.user?.fullname}
									</Form.Item>
									<Form.Item
										label='Số điện thoại'
										name='name'
										style={{
											marginBottom: 0,
										}}
									>
										{state.order.item?.phone}
									</Form.Item>
									<Form.Item
										label='Địa chỉ'
										name='name'
										style={{
											marginBottom: 0,
										}}
									>
										{state.order.item?.address}
									</Form.Item>
								</Col>
								<Col span={24}>
									<h3>Danh sách sản phẩm</h3>
									<Table
										columns={columnsDetail}
										dataSource={state.order.item.orderDetails}
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
											state.order.item?.orderDetails?.reduce((total, item) => {
												return (
													total +
													(item?.orderPrice || item?.salePrice || item?.price) *
														item.quantity
												);
											}, 0),
										)}
									</Form.Item>
									{/* <Form.Item
										label='Mã giảm giá'
										name='name'
										style={{
											marginBottom: 0,
										}}
									>
										{state.order.item?.coupon?.id
											? `${state.order.item?.coupon?.code} - Giảm ${state.order.item?.coupon?.value}%`
											: 'Không'}
									</Form.Item> */}
									<Form.Item
										label='Thanh toán'
										name='name'
										style={{
											marginBottom: 0,
										}}
									>
										{formatMoney(
											state.order.item?.orderDetails?.reduce((total, item) => {
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
			</div>
		</Helmet>
	);
};

export default OrderPageUser;
