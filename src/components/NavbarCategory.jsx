import { SettingOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { listProduct } from 'redux/actions/product.actions';
const { Panel } = Collapse;
const NavbarCategory = ({ items }) => {
	const dispatch = useDispatch();

	return (
		<>
			{items.map((item, index) => {
				return (
					<Collapse
						bordered={false}
						defaultActiveKey={[index]}
						onChange={() => {
							dispatch(listProduct({ categoryId: item.id }));
						}}
					>
						<Panel header={item.name} key={index + 1}>
							{item.childs?.map((itemChild) => (
								<Panel
									header={itemChild.name}
									key={index + 1}
									style={{ paddingLeft: 24, paddingTop: 10, cursor: 'pointer' }}
								>
									{item.childs?.map((itemChild) => itemChild.name)}
								</Panel>
							))}
						</Panel>
					</Collapse>
				);
			})}
		</>
	);
};

export default NavbarCategory;
