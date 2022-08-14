import * as moment from 'moment';

export const formatTime = (time) => moment(time).format('DD/MM/YYYY HH:mm');

export function getBase64(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});
}

export const formatMoney = (input = 0) =>
	input.toLocaleString('it-IT', {
		style: 'currency',
		currency: 'Vnd',
	});
