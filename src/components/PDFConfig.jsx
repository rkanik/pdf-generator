import React, { useState } from 'react'
import {
	Card,
	CardContent,
	CardHeader,
	TextField,
	CardActions,
	Button
} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

const header = {
	value: '',
	type: 'text',
	max: 15,
	required: true,
	error: false
}

const getError = ({ min, max, label, type, value, required }) => {
	return (required && !value)
		? `${label} can't leave empty`
		: (min && (type === 'number' ? +value < min : value.length < min))
			? `${label} can't less than ${min} ${type === 'text' ? 'characters' : ''}`
			: (max && (type === 'number' ? +value > max : value.length > max))
				? `${label} can't getter than ${max} ${type === 'text' ? 'characters' : ''}`
				: false
}

const PDFConfig = ({ title, loading, onShowPdf }) => {

	const [form, setForm] = useState({
		valid: true,
		logo: {
			value: null,
			height: 200,
			width: 200
		},
		fields: [
			{
				name: 'formName',
				label: 'Form Name',
				value: '',
				type: 'text',
				max: 80,
				required: true,
				error: false
			},
			{
				name: 'clientName',
				label: 'Client Name',
				value: '',
				type: 'text',
				max: 50,
				required: true,
				error: false
			},
			{
				name: 'department',
				label: 'Department',
				value: '',
				type: 'text',
				max: 60,
				required: true,
				error: false
			},
			{
				...header,
				name: 'header1',
				label: 'Header LH info line 1'
			},
			{
				...header,
				name: 'header2',
				label: 'Header LH info line 2'
			},
			{
				...header,
				name: 'header3',
				label: 'Header LH info line 3'
			},
			{
				name: 'fleetName',
				label: 'Fleet Name',
				value: '',
				type: 'text',
				max: 30,
				required: true,
				error: false
			},
			{
				name: 'duration',
				label: 'Duration',
				value: '',
				type: 'number',
				min: 30,
				max: 480,
				required: true,
				error: false
			},
			{
				name: 'regularity',
				label: 'Regularity Info',
				value: '',
				type: 'textarea',
				max: 5000,
				rows: 6,
				required: true,
				error: false
			}
		]
	})

	const setField = (name, data) => {
		let fieldIndex = form.fields.findIndex(f => f.name === name)
		let field = { ...form.fields[fieldIndex], ...data }
		let fields = [...form.fields]
		fields.splice(fieldIndex, 1, field)
		let newForm = { ...form, fields }
		if (!newForm.valid) newForm.valid = true
		setForm(newForm)
	}

	const handleShowPdf = () => {
		let fields = [...form.fields]
		fields = fields.map(field => ({ ...field, error: getError(field) }))
		let valid = fields.every(f => !f.error)
		if (!valid) {
			return setForm({
				...form,
				valid: false,
				fields
			})
		}
		fields.push({ name: 'logo', value: form.logo.value })
		onShowPdf(fields)
	}

	const handleInputChange = field =>
		({ target: { name, value } }) => {
			let error = getError({ ...field, value })
			setField(name, { value, error })
		}

	const onChooseImage = file => {
		let reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = function () {
			setForm({
				...form, logo: {
					...form.logo,
					value: reader.result
				}
			})
		};
	}

	const handleClickImage = () => {
		let input = document.createElement('input')
		input.type = 'file'
		input.accept = 'image/*'
		input.addEventListener(
			'change',
			e => onChooseImage(e.target.files[0])
		)
		input.click()
	}

	const Fields = form.fields.map(({
		type, rows, label, min, max,
		required, name, error, value,
	}) => (
		<TextField
			fullWidth
			size='small'
			variant="outlined"
			required={required}
			key={name}
			error={error !== false}
			name={name}
			value={value}
			multiline={type === 'textarea'}
			rows={rows || null}
			type={type}
			label={label}
			helperText={error || null}
			onChange={handleInputChange({ min, max, label, type, required })}
			className='pdfconfig__input'
		/>
	))

	return (
		<Card>
			<CardHeader title={title}></CardHeader>
			<CardContent style={{ textAlign: 'center' }}>
				<img
					onClick={handleClickImage}
					style={{
						width: '200px',
						height: '200px',
						marginBottom: '1rem',
						objectFit: 'cover',
						cursor: 'pointer',
						borderRadius: '4px'
					}}
					src={
						form.logo.value ||
						'https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png'
					}
				/>
				<form className='pdfconfig' noValidate autoComplete="off">
					{Fields}
				</form>
			</CardContent>
			<CardActions>
				<Button
					color="primary"
					variant='contained'
					disabled={loading || !form.valid}
					onClick={handleShowPdf}
				>
					{loading && <CircularProgress
						size={18}
						color='inherit'
						style={{ marginRight: '0.75rem' }}
					/>}
					Show PDF
				</Button>
			</CardActions>
		</Card>
	)
}

export default PDFConfig