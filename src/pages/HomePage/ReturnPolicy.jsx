// @ts-nocheck
import Helmet from 'components/Helmet';
import React from 'react';
import returnPolicyImage from '../../assets/images/return.jpg';

const ReturnPolicy = () => {
	return (
		<Helmet title='Chính sách đổi/trả'>
			<div className='return__policy'>
				<div className='return__policy__title__head'>CHÍNH SÁCH ĐỔI/TRẢ</div>
				<div className='return__policy__content'>
					<p>
						Khách hàng nắm được chính sách đổi trả sản phẩm sẽ giúp cho quá
						trình mua sắm diễn ra suôn sẻ, như ý và đem đến sự hài lòng cũng như
						trải nghiệm tốt nhất
					</p>
					<div className='return__policy__content__page'>
						<h2>I. Chính sách bảo hành đổi trả sản phẩm YOLO năm 2022</h2>
						<p>
							Để mang đến cho Khách hàng những trải nghiệm tốt hơn trong quá
							trình mua sắm, YOLO xin gửi đến quý khách các thông tin về chính
							sách bảo hành đổi trả sản phẩm mới nhất năm 2022. Cụ thể như sau:
						</p>
						<div className='return__policy__content__page__item'>
							<img src={returnPolicyImage} alt='' />
							<em>Chính sách đổi trả sản phẩm YOLO 2022</em>
						</div>
					</div>
				</div>
			</div>
		</Helmet>
	);
};

export default ReturnPolicy;
