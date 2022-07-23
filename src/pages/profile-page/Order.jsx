// @ts-nocheck
import Helmet from 'components/Helmet';
import React from 'react';
import BannerUserPage from './BannerUserPage';
import MenuListUserInfo from './MenuListUserInfo';

const OrderPageUser = () => {
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
											<th>Đơn hàng</th>
											<th>Ngày đặt hàng</th>
											<th>Trạng thái</th>
											<th>Tổng tiền</th>
											<th>Hành động</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>
											<td>CODE34567</td>
											<td>22/7/2022</td>
											<td>Đang giao</td>
											<td>365.000đ</td>
											<td>Xem</td>
										</tr>
										<tr>
											<td>1</td>
											<td>CODE34567</td>
											<td>22/7/2022</td>
											<td>Đang giao</td>
											<td>365.000đ</td>
											<td>Xem</td>
										</tr>
										<tr>
											<td>1</td>
											<td>CODE34567</td>
											<td>22/7/2022</td>
											<td>Đang giao</td>
											<td>365.000đ</td>
											<td>Xem</td>
										</tr>
										<tr>
											<td>1</td>
											<td>CODE34567</td>
											<td>22/7/2022</td>
											<td>Đang giao</td>
											<td>365.000đ</td>
											<td>Xem</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Helmet>
	);
};

export default OrderPageUser;
