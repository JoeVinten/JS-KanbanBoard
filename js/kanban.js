let order = 1;
let adding = false;

const error = document.querySelector('.error');
const message = 'Please add a description.';

const add_btn = document.querySelector('.add');
add_btn.addEventListener('click', () => {
	const target = document.querySelector('#requested');
	if (adding == false) {
		adding = true;
		target.appendChild(create_item());
	} else {
		error.innerHTML = message;
	}
});

const create_item = () => {
	const item = document.createElement('div');
	item.classList.add('item');
	item.id = 'item-' + order;
	item.setAttribute('draggable', true);
	item.addEventListener('dragstart', (event) => {
		event.DataTransfer.setData('text');
		event.DataTransfer.setData('text', event.target.id);
	});
	item.addEventListener('dragend', (event) => {
		event.DataTransfer.clearData();
	});

	const input = document.createElement('input');
	item.append(input);

	const save_btn = document.createElement('button');
	save_btn.innerHTML = 'Save';

	save_btn.addEventListener('click', () => {
		error.innerHTML = '';
		if (input != '') {
			order += 1;
			item.innerHTML = input.value;
			adding = false;
		} else {
			error = message;
		}
	});

	item.append(save_btn);
};

document.querySelectorAll('.drop').forEach((element) => {});
