import React, { Component } from 'react'
import AdminNav from './AdminNav.js'
import './css/ArticleForm.css'

class AdminFiltreForm extends Component {

  state = {
    filterTag: this.props.filtre.filterTag || '',
    section: this.props.filtre.section || ''
  }

	handleChange = event => {
		const key = event.target.name
    this.setState({ ...this.state.filtre, [key]: event.target.value })
  }

	handleSubmit = event => {
    event.preventDefault()

    const filtre = {
	    filterTag: this.state.filtre.filterTag,
      section: this.state.filtre.section
    }

    this.props.submitFiltre(filtre)
  }

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>Nom du filtre :<br/>
				<input type="text" name="filterTag" value={this.state.filterTag} onChange={this.handleChange} />
				</label>

				<select name="section" value={this.state.section} onChange={this.handleChange}>
				  <option value="Choose">Choisissez la section</option>
				  <option value="lab">LabRusch</option>
				  <option value="projets">Projets</option>
				</select>

				<input type="submit" value="Submit" />
			</form>
	)}
}

export default AdminFiltreForm