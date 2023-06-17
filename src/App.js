import React, { useState } from 'react'
import {
	Grid,
	Container,
	Card,
	CardHeader,
	Slide,
	Dialog,
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Button,
	CircularProgress
} from '@material-ui/core'

import CloseIcon from '@material-ui/icons/Close'

import PDFConfig from './components/PDFConfig'
import SimulatorForm from './components/SimulatorForm'
import { SIMULATOR, AIRCRAFT, GROUND } from './consts'

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const App = () => {

	const [forms, setForms] = useState([
		{
			id: '1',
			ref: null,
			show: false,
			field: null,
			loading: false,
			type: SIMULATOR,
			title: 'SIMULATOR FORM',
			component: SimulatorForm,
		},
		{
			id: '2',
			ref: null,
			show: false,
			field: null,
			loading: false,
			type: AIRCRAFT,
			title: 'AIRCRAFT FORM',
			component: SimulatorForm,
		},
		{
			id: '3',
			ref: null,
			show: false,
			fields: null,
			loading: false,
			type: GROUND,
			title: 'GROUND FORM',
			component: SimulatorForm
		}
	])

	const handleShowPaf = (form, fields) => {
		setForms(forms.map(_form => {
			if (_form.id !== form.id) return _form
			return {
				..._form,
				field: fields.reduce((acc, f) => ({
					...acc, [f.name]: f.value
				}), {}),
				show: true
			}
		}))
	}

	const handleCloseDialog = id => () => {
		setForms(forms.map(_form => {
			if (_form.id !== id) return _form
			return { ..._form, show: false }
		}))
	}

	const handleDownload = form => () => {

		setForms(forms.map(_form => {
			if (_form.id !== form.id) return _form
			return {
				..._form,
				loading:true
			}
		}))

		let element = document.querySelector(`form[data-type="${form.type}"]`)

		let width = element.getBoundingClientRect().width
		let height = width * 1.4142

		var opt = {
			filename: 'myfile.pdf',
			image: { type: 'jpeg', quality: 1 },
			html2canvas: { scale: 4 },
			jsPDF: {
				unit: 'px',
				format: [width, height]
			}
		};
		setTimeout(() => {
			window.html2pdf()
			.set(opt)
			.from(element)
			.save()
			.then(() => {
				setForms(forms.map(_form => {
					if (_form.id !== form.id) return _form
					return {
						..._form,
						show:false,
						loading:false
					}
				}))
			})
		}, 750);
	}

	return (
		<div className="App">
			<Container>
				<Grid container>
					<Grid item xs={12}>
						<Card style={{ margin: '2rem 0 2rem 0' }}>
							<CardHeader title='Build Your Form and Export Pdf'></CardHeader>
						</Card>
					</Grid>
				</Grid>
			</Container>
			<Container>
				<Grid container spacing={3}>
					{forms.map(form => (
						<Grid
							item
							md={4}
							xs={12}
							key={form.id}
							sm={form.id === 3 ? 12 : 6}
							style={{ overflow: 'hidden' }}
						>
							<PDFConfig
								title={form.title}
								loading={form.loading}
								onShowPdf={v => handleShowPaf(form, v)}
							/>
							<Dialog fullScreen open={form.show} TransitionComponent={Transition}>
								<AppBar>
									<Toolbar>
										<IconButton onClick={handleCloseDialog(form.id)} edge="start" color="inherit" aria-label="close">
											<CloseIcon />
										</IconButton>
										<Typography style={{ flex: '1' }} variant="h6">Generated Form</Typography>
										<Button onClick={handleDownload(form)} autoFocus color="inherit">
										{form.loading && <CircularProgress
											size={18}
											color='inherit'
											style={{ marginRight: '0.75rem' }}
										/>}
											Download
            							</Button>
									</Toolbar>
								</AppBar>
								<div style={{ paddingTop: '6rem' }}>
									<form.component form={form} />
								</div>
							</Dialog>
						</Grid>
					))}
				</Grid>
			</Container>
		</div>
	);
}

export default App;
